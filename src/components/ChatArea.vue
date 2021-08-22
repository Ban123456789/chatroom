<template>
  <div class="row">
    <div class="col-8">
      <div class="chat-banner mt-3">
        <div class="chat-area">
          <div
            class="mt-3"
            v-for="msg in msgs"
            :key="msg"
            :class="[msg.username === $cookies.VueCookies.get('user') ? 'me' : 'other']"
          >
            <div v-if="msg.username !== $cookies.VueCookies.get('user')">
              <img src="" alt="" class="photo-sticker mx-3" />
              <div class="d-inline-block">
                <strong class="d-block">{{ msg.username }}</strong>
                <p class="chat-content d-block p-2">{{ msg.message }}</p>
              </div>
            </div>
            <div v-else>
              <div class="d-inline-block">
                <strong class="d-block">{{ msg.username }}</strong>
                <p class="chat-content d-block p-2">{{ msg.message }}</p>
              </div>
              <img src="" alt="" class="photo-sticker mx-3" />
            </div>
          </div>
        </div>
        <div class="chat-bottom">
          <input type="text" class="chat-iuput" v-model="msg" @keyup.enter="send" />
          <input type="button" class="btn btn-outline-danger chat-btn" value="送出" @click="send" />
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="reg-area mt-3">
        <p class="text-center reg-title">申請使用者</p>
        <input type="text" class="reg-input" v-model="register" @keyup.enter="registerFn" />
        <input type="button" value="確定申請" class="btn btn-outline-success mt-3" @click="registerFn" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/methods/firebase.js'
import { useSSRContext } from '@vue/runtime-core'

export default {
  data() {
    return {
      msg: '',
      message: '',
      msgs: {},
      otherMsgs: [],
      ownMsgs: [],
      register: '',
      users: {},
      addUser: false,
    }
  },
  created() {
    const db = firebase.database()
    const messages = db.ref('messages')
    const users = db.ref('users/user')
    messages.on('value', (data) => {
      this.msgs = data.val()
    })
    users.on('value', (data) => {
      console.log(data.val())
    })
  },
  methods: {
    send() {
      const db = firebase.database()
      const messages = db.ref('messages')
      if (this.msg.trim() && this.$cookies.VueCookies.get('user')) {
        messages
          .push({
            time: new Date().getTime(),
            username: this.$cookies.VueCookies.get('user'),
            message: this.msg,
          })
          .then((res) => {
            console.log(res)
            this.msg = ''
          })
      } else {
        alert('請檢查是否有登入或有無輸入訊息')
      }
    },
    registerFn() {
      const db = firebase.database()
      const users = db.ref('users')
      this.$cookies.VueCookies.set('user', this.register)
      users.once('value', (data) => {
        data.forEach((item) => {
          if (item.val().user === this.$cookies.VueCookies.get('user')) {
            return (this.addUser = true)
          }
        })
      })
      console.log(this.addUser)
    },
  },
}
</script>
