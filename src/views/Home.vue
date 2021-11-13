<template>
  <div class="home">
    <scoreboard :score="score" :logoMode="logo"/>
    <game :mode="mode" :record="score" @update="setRecord"/>
    <button class="btn-home changeMode" @click="changeMode">{{option}}</button>
    <button class="btn-home btn-sm-position" @click="showModal = true">Rules</button>
    <modal v-if="showModal" :showModal="showModal" :mode="mode"  @close="showModal = false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import scoreboard from '@/components/scoreboard_.vue'
import game from '@/components/game/index.vue'
import modal from '@/components/modal.vue'
// principal page
export default Vue.extend({
  name: 'Home',
  created (){
    let r = localStorage.getItem('record')
    if(r !== null){
      var savedRecord = JSON.parse(r)
      this.score = savedRecord[0].record
    }
  },
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      score: 0,
      mode: 'basic',
      logo: 'basic',
      option: 'Normal',
      showModal: false
    }
  },
  methods: {
    changeMode () {
      this.mode = this.mode === 'basic' ? 'hard' : 'basic'
      this.logo = this.logo === 'basic' ? 'hard' : 'basic'
      if (this.mode === 'basic') {
        this.option = 'Normal'
      } else {
        this.option = '...Lizard, Spock'
      }
    },
    setRecord (record: number) {
      if(record >= 0) {
        this.score = record
        const saveRecord = [
          {date: new Date(), record: record}
        ]
        localStorage.setItem('record', JSON.stringify(saveRecord))
      }
    },
    },
  components: {
    scoreboard,
    game,
    modal
  },
})
</script>
<style scoped>
.home {
  margin: 0;
  padding: 0;
  min-height: 95vh;
}
.changeMode {
  top: 5%;
  right: 4%;
  margin: 1rem;
}
.btn-home{
  border: 2px hsl(217, 16%, 45%) solid;
  color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  background: none;
  position: absolute;
  text-transform: uppercase;
}
.btn-sm-position{
  bottom: 5%;
  right: 5%;
}
@media (max-width: 768px) {
    .changeMode{
      top:87.5%;
      right: 0;
      left: 0;
    }
}
</style>
