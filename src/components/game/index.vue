<template>
    <section>
        <article class="game-box">
            <!-- <div v-if="mode == 'basic' && show_game" class="basic"> -->
            <div v-if="show_game" class="basic">
                <figure class="bg-game">
                    <img v-if="mode == 'basic'" :src="img.triangle" alt="" width="325">
                    <img v-if="mode == 'hard'" :src="img.pentagon" alt="" width="325">
                </figure>
                <figure :class="['option-box d-flex paper ', mode =='basic' ? 'paper-basic-position': 'paper-hard-position']" @click="select('paper')">
                    <div>
                        <img :src="options.paper" width="50" alt="img-paper">
                    </div>
                </figure>
                <figure :class="['option-box d-flex rock ', mode=='basic' ? 'rock-basic-position':'rock-hard-position']" @click="select('rock')">
                    <div>
                        <img :src="options.rock" width="50" alt="img-rock">
                    </div>
                </figure>
                <figure :class="['option-box d-flex scissors ', mode=='basic' ? 'scissors-basic-position':'scissors-hard-position']" @click="select('scissors')">
                    <div>
                        <img :src="options.scissors" width="50" alt="img-scissors">
                    </div>
                </figure>
                <figure v-if="mode == 'hard'" class="option-box d-flex lizard lizard-hard-position" @click="select('lizard')">
                    <div>
                        <img :src="options.lizard" width="50" alt="img-lizard">
                    </div>
                </figure>
                <figure v-if="mode == 'hard'" class="option-box d-flex spock spock-hard-position" @click="select('spock')">
                    <div>
                        <img :src="options.spock" width="50" alt="img-spock">
                    </div>
                </figure>
            </div>
            <result v-if="show_result" :mode="mode" :choice="myChoise" :actualRecord="record" @setResult="update"  @playAgain="restart"/>
        </article>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import result from './result.vue'

export default Vue.extend({
    name: 'game',
    props: {
        mode: String,
        record: Number
    },
    data(): {show_game: boolean, show_result: boolean, myChoise: string, img: Object, options: Object} {
        return {
            show_game: true,
            show_result: false,
            myChoise: '',
            img: {
                pentagon: require('@/assets/images/bg-pentagon.svg'), 
                triangle: require('@/assets/images/bg-triangle.svg'),
            },
            options: {
                lizard: require('@/assets/images/icon-lizard.svg'),
                paper: require('@/assets/images/icon-paper.svg'),
                rock: require('@/assets/images/icon-rock.svg'),
                scissors: require('@/assets/images/icon-scissors.svg'),
                spock: require('@/assets/images/icon-spock.svg'),
            }
        }
    },
    methods: {
        select(choice: string) {
            this.show_result = true
            this.show_game = false
            this.myChoise = choice
        },
        restart (flag: boolean) {
            if (flag) {
                this.show_game = true
                this.show_result = false
                this.myChoise = ''
            }
        },
        update(record: number){
            this.$emit('update', record)
        }
    },
    components: {
        result
    },
})
</script>
<style>
.game-box {
    overflow: hidden;
    box-sizing: border-box;
    min-height: 72vh;
    padding-top: 4em;
}
.d-flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.option-box{
    border-radius: 50%;
    width: 145px;
    height: 145px;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
}
.option-box div{
    background: #fff;
    border-radius: 50%;
    width: 115px;
    height: 115px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:inset 0px 7px 3px #aca8a8;
}
.basic {
    position: relative;
    width: 50%;
    height: 300px;
    margin: auto;
    margin-bottom: 50px;
}
.bg-game {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    right: 30%;
    margin: auto;
}
.paper {
    background: radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
    box-shadow:inset 0px -6px 2px hsl(230, 64%, 43%);        
}
.scissors {
    background: radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
    box-shadow:inset 0px -6px 2px hsl(39, 75%, 43%);
}
.rock {
    background: radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
    box-shadow:inset 0px -6px 2px hsl(349, 71%, 43%);    
}
.lizard {
    background: radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
    box-shadow:inset 0px -6px 2px hsl(261, 73%, 43%);
}
.spock {
    background: radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
    box-shadow:inset 0px -6px 2px hsl(189, 59%, 43%);
}
.paper-basic-position{
    position: absolute;
    top: -40px;
    left: 15%;
}
.scissors-basic-position{
    position: absolute;
    top: -40px;
    right: 22%;
}
.rock-basic-position{
    position: absolute;
    bottom: -30px;
    left: 36%;
}
.paper-hard-position{
    position: absolute;
    top: 2em;
    right: 8em;
}
.scissors-hard-position{
    position: absolute;
    top: -4em;
    left: 35%;
}
.rock-hard-position{
    position: absolute;
    bottom: -5em;
    right: 11em;
}
.lizard-hard-position{
    position: absolute;
    bottom: -5em;
    left: 20%;
}
.spock-hard-position{
    position: absolute;
    top: 2em;
    left: 5em;
}

@media screen and (max-width: 1262px) {
    .bg-game img {
        width: 100%;
    }
}
@media screen and (max-width: 1242px) {
    .rock-basic-position{
        left: 13em !important;
        bottom: -4em !important;
    }
    .paper-basic-position{
        left: 3em !important;
        top: -3em !important;
    }
    .scissors-basic-position{
        right: 6em !important;
        top: -3em !important;
    }
    .scissors-hard-position{
        left: 12rem;
        top: -4rem;
    }
    .lizard-hard-position{
        left: 5em;
    }
    .spock-hard-position{
        left: 2em;
    }

}
@media screen and (max-width: 1180px) {
    .rock-basic-position{
        left: 11em !important;
    }
    .scissors-hard-position{
        left: 11rem;
    }
    .lizard-hard-position{
        left: 4em;
    }
    .spock-hard-position{
        left: 1em;
    }
    .paper-hard-position{
        right: 7em;
    }
}
@media screen and (max-width: 1072px) {
    .scissors-hard-position{
        left: 10rem !important;
    }
    .rock-basic-position{
        left: 9em !important;
    }
    .paper-basic-position{
        left: 2em !important;
    }
    .scissors-basic-position{
        right: 6em !important;
    }
}
@media screen and (max-width: 985px) {
    .bg-game {
        width: 60%;
        top: 2em;
        right: 0;
        left: .1rem;
    }
    .scissors-hard-position{
        top: -3rem;
    }
    .rock-hard-position{
        bottom: -4rem;
        right: 5em !important;
    }
    .paper-hard-position{
        right: 2em !important;
    }
    .lizard-hard-position{
        bottom: -4rem;
        left: 4em !important;
    }
    .rock-basic-position{
        left: 11em !important;
    }
    .scissors-basic-position{
        right: 3em !important;
    }
}
@media screen and (max-width: 922px) {

    .scissors-hard-position{
        top: -4rem;
        left: 9rem !important;
    }
    .rock-hard-position{
        right: 4em !important;
    }
    .paper-hard-position{
        right: 1em !important;
    }
    .lizard-hard-position{
        left: 3em !important;
    }
    .spock-hard-position{
        left: .5em !important;
    }
    .rock-basic-position{
        left: 10em !important;
    }
    .scissors-basic-position{
        right: 2em !important;
    }
}
@media screen and (max-width: 859px) {
    .paper-hard-position{
        left: 18em !important;
    }
    .rock-basic-position{
        left: 9em !important;
    }
}
@media screen and (max-width: 800px) {
    .bg-game img {
        width: 100%;
    }
    .option-box{
        width: 90px;
        height: 90px;
    }
    .option-box img{
        width: 60%;
    }
    .option-box div{
        width: 70px;
        height: 70px;
    }
    
    .paper-hard-position{
        left: 17rem !important;
        top: 4rem;
    }
    .scissors-hard-position{
        left: 9.5rem !important;
        top: -1rem;
    }
    .lizard-hard-position{
        left: 5em !important;
        bottom: 0rem;
    }
    .spock-hard-position{
        left: 3em !important;
        top: 4em;
    }
    .rock-hard-position{
        right: 4.7em !important;
        bottom: 0rem;
    }
    .rock-basic-position{
        left: 9.5em !important;
        bottom: 1em !important;
    }
    .scissors-basic-position{
        top: -1em !important;
        right: 2rem !important;
    }
    .paper-basic-position{
        left: 2rem;
        top: -1rem !important;
    }
    
}
@media screen and (max-width: 728px) {

    .paper-hard-position{
        left: 16rem !important;
    }
    .scissors-hard-position{
        left: 9rem !important;
    }
    .lizard-hard-position{
        bottom: 1rem;
    }
    .spock-hard-position{
        left: 2em !important;
    }
    .rock-hard-position{
        right: 4em !important;
        bottom: 1rem;
    }
    .rock-basic-position{
        left: 8.7em !important;
    }
    
}
/*  */
@media screen and (max-width: 675px) {
    .basic {
        width: 100%;
    }
    .rock-basic-position{
        left: 9.2em !important;
    }
    .lizard-hard-position{
        bottom: 1rem;
    }
}
</style>