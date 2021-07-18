

<template>
  <div>
    <div
      @click="isOpen = true"
      class="app-button">
      Create
    </div>
    <div class="modal" :class="{'is-active': isOpen}">
      <div class="modal-content">
        <span @click="close" class="close">&times;</span>
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: {
  //   close: {
  //     type: Boolean,
  //     required: false
  //   }
  // },
  data() {
    return {
      isOpen: false
    }
  },
  watch: { // onceki degerinide izliyebiliriz
    close(isClose, preIsClose) {
      if (isClose && this.isOpen) {
        this.isOpen = false
      }
    }
  },
  methods: {
    close() {
      this.isOpen = false
      // this.$emit('EVENtname') // customevent to inform parent component
      // parent comp ta ise @EVENTname='functionName' yaparak degisikligi aliyoruz ve parent comp teki functiona aktariyoruz
      // $emit te 2nd parameter yaparak anything we want data , we can send as objects,string tabi bu parent functiona arg diye gidecek 

    }
  }
}
</script>
<style scoped lang="scss">
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    line-height: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  .modal {
    display: none; //block hep gosterecek
    position: fixed; // stay in place, normalde dongunun altinda gosterir ama fized yaparak top ta kaliyor
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; // enable scroll if needed
    background-color: rgba(0, 0, 0, 0.4);

    &.is-active {
      display: block;
    }
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    text-align: left;
  }
</style>
