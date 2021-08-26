<template>
  <div>
    <h1>1. 解決bs展開功能問題</h1>
    <button class="btn btn-primary mb-3" @click="showAll('1')">
      展開全部
    </button>
    <button class="btn btn-primary mb-3" @click="showAll('2')">
      收合全部
    </button>
    <div>
      <ul>
        <li v-for="i in arr" :key="i">
          <button class="btn btn-primary" type="button" @click="showSingle(i)">
            單一展開
          </button>
          <div class="collapse collapse-card" :id="i">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
              user activates the relevant trigger.
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import collapse from 'bootstrap/js/dist/collapse'

export default {
  data() {
    return {
      arr: ['a', 'b', 'c', 'd', 'e'],
    }
  },
  methods: {
    showAll(status) {
      const id = document.getElementsByClassName('collapse-card')
      if (status === '1') {
        for (let i = 0; i < id.length; i++) {
          const Collepse = new collapse(id[i], {
            toggle: false,
          })
          Collepse.show()
        }
      } else {
        for (let i = 0; i < id.length; i++) {
          const Collepse = new collapse(id[i], {
            toggle: false,
          })
          Collepse.hide()
        }
      }
    },
    showSingle(i) {
      const id = document.getElementById(i)
      new collapse(id, {
        toggle: true,
      })
    },
  },
}
</script>
