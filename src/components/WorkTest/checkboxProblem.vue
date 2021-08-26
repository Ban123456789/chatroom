<template>
  <div>
    <h1>點擊checkbox顯示畫面</h1>
    <div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="status" />
        <label class="form-check-label" for="flexSwitchCheckDefault">是否開啟畫面</label>
      </div>
      <div class="collapse collapse-card" id="timeCollepse">
        <div class="card card-body">
          開始時間: <input type="date" v-model="startTime" /> 結束時間: <input type="date" v-model="endTime" />
        </div>
      </div>
    </div>
    <h1>點擊checkbox即時更新資料庫</h1>
    <div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="update" v-model="customerStatus" />
        <label class="form-check-label" for="update">是否開啟顧客審查機制</label>
      </div>
      <div>
        <p class="text-success" v-if="customerStatus === true">已開啟</p>
        <p class="text-danger" v-else>未開啟</p>
      </div>
    </div>
  </div>
</template>

<script>
import collapse from 'bootstrap/js/dist/collapse'
import firebase from '@/methods/firebase.js'

export default {
  data() {
    return {
      status: false,
      startTime: '',
      endTime: '',
      customerStatus: false,
    }
  },
  created() {
    const db = firebase.database()
    const updateCustomer = db.ref('customerStatus')
    updateCustomer.on('value', (status) => {
      console.log(status.val())
      this.customerStatus = status.val()
    })
  },
  watch: {
    status() {
      const id = document.getElementById('timeCollepse')
      if (this.status) {
        const Collepse = new collapse(id, {
          toggle: false,
        })
        Collepse.show()
        console.log(this.status)
      } else {
        const Collepse = new collapse(id, {
          toggle: false,
        })
        Collepse.hide()
      }
    },
    customerStatus() {
      const db = firebase.database()
      const updateCustomer = db.ref('customerStatus')
      if (this.customerStatus) {
        updateCustomer.set(true)
      } else {
        updateCustomer.set(false)
      }
    },
  },
}
</script>
