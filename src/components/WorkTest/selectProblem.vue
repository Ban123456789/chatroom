<template>
  <div>
    <select class="form-select" aria-label="Default select example" v-model="vip">
      <option value="尚無選擇VIP">尚無選擇VIP</option>
      <option value="vip1">vip1</option>
      <option value="vip2">vip2</option>
      <option value="vip3">vip3</option>
    </select>
    <p class="text-success mt-5">{{ vip }}</p>
  </div>
</template>

<script>
import firebase from '@/methods/firebase.js'

export default {
  data() {
    return {
      vip: '',
    }
  },
  created() {
    const db = firebase.database()
    const vipLv = db.ref('vipLv')
    vipLv.on('value', (vip) => {
      this.vip = vip.val()
    })
  },
  watch: {
    vip() {
      const db = firebase.database()
      const vipLv = db.ref('vipLv')
      vipLv.set(this.vip)
    },
  },
}
</script>
