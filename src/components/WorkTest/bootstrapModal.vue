<template>
  <div>
    <h1>解決 modal 關掉問題</h1>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" @click="showTest1">
      測試一
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" ref="test1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            測試一
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="save1">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" @click="showTest2">
      測試二
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal2" ref="test2">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            測試二
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="save2">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from 'bootstrap/js/dist/modal'

export default {
  data() {
    return {
      modal: {
        modal1: {},
        modal2: {},
      },
    }
  },
  mounted() {
    this.modal.modal1 = new modal(this.$refs.test1)
    this.modal.modal2 = new modal(this.$refs.test2)
  },
  methods: {
    showTest1() {
      this.modal.modal1.show()
    },
    save1() {
      this.modal.modal1.hide()
    },
    showTest2() {
      this.modal.modal2.show()
    },
    save2() {
      this.modal.modal2.hide()
    },
  },
}
</script>
