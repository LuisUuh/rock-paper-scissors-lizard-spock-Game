<template>
  <div class="home">
    <scoreboard :score="score" :logoMode="logo"/>
    <game :mode="mode" :record="score" @update="setNewRecord"/>
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
      this.getRecordSaved(r)
    }
  },
  data (): {message:string, score: number, mode: string, logo:string, option: string, showModal: boolean} {
    return {
      message: 'Welcome to Your Vue.js App',
      score: 0,
      mode: 'basic',
      logo: 'basic',
      option: '...Lizard, Spock',
      showModal: false
    }
  },
  methods: {
    changeMode () {
      this.mode = this.mode === 'basic' ? 'hard' : 'basic'
      this.logo = this.logo === 'basic' ? 'hard' : 'basic'
      if (this.mode === 'basic') {
        this.option = '...Lizard, Spock'
      } else {
        this.option = 'normal'
      }
    },
    setNewRecord (record: number) {
      if(record >= 0) {
        this.score = record
        const saveRecord = [
          {date: new Date(), record: record}
        ]
        localStorage.setItem('record', JSON.stringify(saveRecord))
      }
    },
    getRecordSaved(value: string) {
      const savedRecord = JSON.parse(value)
      let toDay = new Date()
      let daySaved = new Date(savedRecord[0].date)
      let diff = toDay.getTime() - daySaved.getTime()
      const day_as_milliseconds = 86400000;
      let diff_in_days = diff / day_as_milliseconds;

      if (Math.floor(diff_in_days) > 0) {
        alert('You have not played in a long time, your record has been reset')
        localStorage.removeItem('record')
      } else {
        this.score = savedRecord[0].record
      }
    }
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
.btn-home{
  border: 2px hsl(217, 16%, 45%) solid;
  color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  background: none;
  position: absolute;
  text-transform: uppercase;
}
.changeMode {
  top: 0;
  right: 0;
  margin: 2rem;
}
.btn-sm-position{
  bottom: 0;
  right: 0;
  margin: 2rem;
}
@media (max-width: 768px) {
    .changeMode{
      top: auto;
      bottom: 0;
      left: 0;
    }
}
</style>
