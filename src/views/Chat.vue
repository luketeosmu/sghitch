<template lang="">
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <Nav />
            <!-- Page content here -->


            <!-- <div class="grid grid-cols-2 h-full justify-center items-center">
                <div class="text-center text-6xl font-bold bg-slate-300 h-full items-center justify-center">
                    <h1 class="my-auto">View Existing Requests</h1>
                </div>
                
                <div class="text-center text-6xl font-bold">Create new Request</div>
            </div> -->
            <div class="flex">
                <div class="w-1/4">
                    <div v-for="chat in chats" class="p-4 border-2 drop-shadow-sm">
                        <div>{{ chat.displayName }}</div>
                        <div>{{ chat.latestMsg }}</div>
                    </div>
                </div>
                <div class="w-3/4 view chat">
                    <header>
                        <h1>Welcome, {{ state.displayName }}</h1>
                    </header>
                    <section class="chat-box">
                        <div v-for="message in state.messages" :key="message.key" :class="(message.displayName == state.displayName ? 'message current-user' : 'message')">
                            <div class="message-inner">
                                <div class="displayName">{{ message.displayName }}</div>
                                <div class="content">{{ message.content }}</div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <form @submit.prevent="SendMessage">
                            <input type="text" v-model="inputMessage" placeholder="Write a message...">
                            <input type="submit" value="Send">
                        </form>
                    </footer>
                </div>
            </div>

            <!-- Page content ends here -->
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <li><a @click="home()">Home</a></li>
                <li><a @click="profile()">Profile</a></li>
                <li><a @click="favourite()">Favourite</a></li>
                <li><a @click="change()">Switch to Hitcher</a></li>
                <li><a @click="chat()">Chat</a></li>
                <li><a @click="settings()">Account Settings</a></li>
                <hr/>
                <li><a @click="logout()">Logout</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Nav from "../components/Nav.vue"
import { getAuth } from 'firebase/auth'
import { reactive, onMounted, ref } from 'vue';
import { getDatabase, set, push, ref as storageRef, onValue} from "firebase/database";

export default {
    name: "Chat",
    props: {},
    components: {
        Nav
    },
    setup () {
        const auth = getAuth();
        const user = auth.currentUser

        const inputMessage = ref("")

        const state = reactive({
            displayName: "",
            messages: []
        })
        if (user != null){
            state.displayName = user.displayName
        }

        const db = getDatabase()

        const SendMessage = () => {
            const messagesRef = storageRef(db, 'messages')
            if(inputMessage.value === "" || inputMessage.value === null){
                return
            }

            const message = {
                displayName: state.displayName,
                content: inputMessage.value
            }

            const newMessageRef = push(messagesRef)
            set(newMessageRef, message)
            inputMessage.value = ""
        }

        onMounted(() => {
            const messagesRef = storageRef(db, 'messages')
            onValue(messagesRef, (snapshot) => {
                const data = snapshot.val()
                let messages = []

                Object.keys(data).forEach(key => {
                    messages.push({
                        id: key,
                        displayName: data[key].displayName,
                        content: data[key].content
                    })
                })

                state.messages = messages;
            })
        })

        return {
            state,
            inputMessage,
            SendMessage
        }
    },
    // beforeRouteLeave(to, from, next) {
    //     state.username = ""
    //     next()
    // },
    methods: {
        change() {
            if(this.user.type == "driver") {
                this.user.type = "hitcher"
            } else [
                this.user.type = "driver"
            ]
            console.log(this.user.type)
        },
        home() {
            window.location.reload()
        },
        profile() {
            this.$router.push('/profile')
        },
        favourite() {
            this.$router.push('/newFav')
        },
        chat() {
            this.$router.push('/chat')
        },
        settings() {
            this.$router.push('/profile')
        },
        logout(){
            this.$router.push('/login')
        }
    },
    data() {
        return {
            user: {
                type: "driver"
            },
            chats: [
                {
                    displayName: "john",
                    latestMsg: "amazing experience!"
                },
                {
                    displayName: "anson",
                    latestMsg: "wow what a shit deal"
                },
                {
                    displayName: "rock",
                    latestMsg: "zzz"
                },

            ]
        }
    }
}
</script>
<style lang="scss">
    .view {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: #ea526f;
	
	&.login {
		align-items: center;
		.login-form {
			display: block;
			width: 100%;
			padding: 15px;
			
			.form-inner {
				display: block;
				background-color: #FFF;
				padding: 50px 15px;
				border-radius: 16px;
				box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
				h1 {
					color: #AAA;
					font-size: 28px;
					margin-bottom: 30px;
				}
				label {
					display: block;
					margin-bottom: 5px;
					color: #AAA;
					font-size: 16px;
					transition: 0.4s;
				}
				input[type="text"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					border-radius: 8px;
					margin-bottom: 15px;
					
					color: #333;
					font-size: 18px;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					background-color: #F3F3F3;
					transition: 0.4s;
					&::placeholder {
						color: #888;
						transition: 0.4s;
					}
				}
				input[type="submit"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					background-color: #ea526f;
					border-radius: 8px;
					color: #FFF;
					font-size: 18px;
					font-weight: 700;
				}
				&:focus-within {
					label {
						color: #ea526f;
					}
					input[type="text"] {
						background-color: #FFF;
						box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
						&::placeholder {
							color: #666;
						}
					}
				}
			}
		}
	}
	&.chat {
		flex-direction: column;
		header {
			position: relative;
			display: block;
			width: 100%;
			padding: 50px 30px 10px;
			.logout {
				position: absolute;
				top: 15px;
				right: 15px;
				appearance: none;
				border: none;
				outline: none;
				background: none;
				
				color: #FFF;
				font-size: 18px;
				margin-bottom: 10px;
				text-align: right;
			}
			h1 {
				color: #FFF;
			}
		}
		.chat-box {
			border-radius: 24px 24px 0px 0px;
			background-color: #FFF;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
			flex: 1 1 100%;
			padding: 30px;
			.message {
				display: flex;
				margin-bottom: 15px;
				
				.message-inner {
					.username {
						color: #888;
						font-size: 16px;
						margin-bottom: 5px;
						padding-left: 15px;
						padding-right: 15px;
					}
					.content {
						display: inline-block;
						padding: 10px 20px;
						background-color: #F3F3F3;
						border-radius: 999px;
						color: #333;
						font-size: 18px;
						line-height: 1.2em;
						text-align: left;
					}
				}
				&.current-user {
					margin-top: 30px;
					justify-content: flex-end;
					text-align: right;
					.message-inner {
						max-width: 75%;
						.content {
							color: #FFF;
							font-weight: 600;
							background-color: #ea526f;
						}
					}
				}
			}
		}
		footer {
			position: sticky;
			bottom: 0px;
			background-color: #FFF;
			padding: 30px;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
			form {
				display: flex;
				input[type="text"] {
					flex: 1 1 100%;
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					border-radius: 8px 0px 0px 8px;
					
					color: #333;
					font-size: 18px;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					background-color: #F3F3F3;
					transition: 0.4s;
					&::placeholder {
						color: #888;
						transition: 0.4s;
					}
				}
				
				input[type="submit"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					padding: 10px 15px;
					border-radius: 0px 8px 8px 0px;
					background-color: #ea526f;
					color: #FFF;
					font-size: 18px;
					font-weight: 700;
				}
			}
		}
	}
}
</style>