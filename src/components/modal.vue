<template>
    <section>
         <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
                  <img class="btn-close" :src="img.iconClose" alt="close-icon" @click="$emit('close')">
              <div class="modal-header">
                  <h1>Rules</h1>
              </div>
              <div class="modal-body">
                  <img v-if="mode == 'basic'" :src="img.basic" alt="rules">
                  <img v-if="mode == 'hard'" :src="img.hard" alt="rules">
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'modal',
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String,
            default: 'basic'
        }
    },
    data() {
        return {
            img: {
                    iconClose: require('@/assets/images/icon-close.svg'),
                    basic: require('@/assets/images/image-rules.svg'),
                    hard: require('@/assets/images/image-rules-bonus.svg'),
                 }
        }
    },
})
</script>
<style>
.modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease-in-out;
}
.modal-header{
    position: relative;
    margin-bottom: 30px;
    margin: 0 auto;
}
.modal-header h1{
    font-size: 30px;
    margin: 0;
}
.btn-close{
    position: absolute;
    top: 1em;
    right: 1em;
    width: 17px;
    margin: 1em;
    z-index: 2;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
  
.modal-container {
    position: relative;
    width: 335px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0px 18px rgba(223, 231, 223, 0.33);
    transition: all 0.3s ease;

  }
  .modal-body {
    margin: 20px 0 0 0;
  }
  @media screen and (max-width: 675px) {
    .modal-container {
      width: 100%;
      height: 100%;
      padding: 0;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      margin: 0;
    }
    .modal-header h1{
        text-align: center;
    }
    .modal-header{
        margin: 10em 0 5em 0;
    }
    .modal-body{
        margin: auto;
        margin-top: 0;
    }
    .btn-close{
        z-index: 1222;
        top: 85%;
        right: 45%;
        width: 20px;
    }
  }
</style>