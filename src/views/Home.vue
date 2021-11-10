<template>
  <div class="home">
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <scoreboard :score="score"/>
    <game :mode="mode"/>
    <basic v-if="mode == 'basic'"/>
    <hard v-if="mode == 'hard'"/>
    <button @click="changeMode">Change</button>
    <button @click="addScore">test score</button>
    <button @click="restScore">rest score</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import scoreboard from '@/components/scoreboard_.vue'
import game from '@/components/game/index.vue'
import basic from '@/components/basic/index.vue'
import hard from '@/components/hardcore/index.vue'
// principal page
export default Vue.extend({
  name: 'Home',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      score: 0,
      mode: 'basic'
    }
  },
  methods: {
    changeMode () {
      this.mode = this.mode === 'basic' ? 'hard' : 'basic'
    },
    addScore () {
      this.score += 1
    },
    restScore () {
      this.score -= 1
    },
    },
  components: {
    scoreboard,
    game,
    basic,
    hard
  },
})
</script>
