<template>
    <div>
        Game
        <div v-if="mode == 'basic'">basic
            <button @click="select('papper')">papper</button>
            <button @click="select('sissors')">sissors</button>
            <button @click="select('rock')">rock</button>
            <result v-if="show" :choice="myChoise"/>
        </div>
        <div v-if="mode == 'hard'">hard</div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import result from './result.vue'

export default Vue.extend({
    name: 'game',
    props: {
        mode: String
    },
    data(): {show: boolean, myChoise: string} {
        return {
            show: false,
            myChoise: ''
        }
    },
    methods: {
        select(choice: string) {
            console.log(choice)
            this.show = true
            this.myChoise = choice
        }
    },
    components: {
        result
    },
})
</script>