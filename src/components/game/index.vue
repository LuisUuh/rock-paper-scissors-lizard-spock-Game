<template>
    <section>
        <article class="game-box">
            <div v-if="show_game" :class="['basic ', mode == 'basic' ? 'basic-bg':'hard-bg']">
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
    data(): {show_game: boolean, show_result: boolean, myChoise: string, options: Object} {
        return {
            show_game: true,
            show_result: false,
            myChoise: '',
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
    padding-top: 4em;
    margin-top: 2em;
}
.basic {
    position: relative;
    width: 30em;
    height: 18em;
    margin: auto;
    margin-bottom: 4em;
}
.basic-bg{
    background: url('../../assets/images/bg-triangle.svg') no-repeat center center;
}
.hard-bg{
    background: url('../../assets/images/bg-pentagon.svg') no-repeat center center;
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
    top: -4em;
    left: 1em;
}
.scissors-basic-position{
    position: absolute;
    top: -4em;
    right: 1em;
}
.rock-basic-position{
    position: absolute;
    bottom: -4em;
    left: 10.4em;
}
.paper-hard-position{
    position: absolute;
    top: 2em;
    right: -1em;
}
.scissors-hard-position{
    position: absolute;
    top: -4em;
    left: 10.5em;
}
.rock-hard-position{
    position: absolute;
    bottom: -5em;
    right: 4em;
}
.lizard-hard-position{
    position: absolute;
    bottom: -5em;
    left: 4em;
}
.spock-hard-position{
    position: absolute;
    top: 2em;
    left: -1em;
}
 
@media screen and (max-width: 564px) {
    .basic {
        width: 100%
    }
    .option-box{
        width: 115px;
        height: 115px;
    }
    .option-box div{
        width: 85px;
        height: 85px;
    }
    .paper-basic-position{
    top: -3em;
    left: 4em;
    }
    .scissors-basic-position{
        top: -3em;
        right: 4em;
    }
    .rock-basic-position{
        left: 14em;
    }
    .paper-hard-position{
        top: 3em;
        right: 4em;
    }
    .scissors-hard-position{
        left: 14em;
    }
    .rock-hard-position{
        bottom: -4em;
        right: 8em;
    }
    .lizard-hard-position{
        bottom: -4em;
        left: 8em;
    }
    .spock-hard-position{
        top: 3em;
        left: 4em;
    }
}
@media screen and (max-width: 414px) {
    .basic-bg{
        background-size: calc(100% - 12em) calc(100% - 9em);
    }
    .hard-bg{
        background-size: calc(100% - 12em) calc(100% - 6em);
    }
    .paper-basic-position{
        top: 1em;
        left: 3em;
    }
    .scissors-basic-position{
        top: 1em;
        right: 3em;
    }
    .rock-basic-position{
        left: 8.6em;
        bottom: 2em;
    }
    .paper-hard-position{
        top: 4em;
        right: 1em;
    }
    .scissors-hard-position{
        top: -2em;
        left: 8.6em;
    }
    .rock-hard-position{
        bottom: -2em;
        right: 4em;
    }
    .lizard-hard-position{
        bottom: -2em;
        left: 4em;
    }
    .spock-hard-position{
        top: 4em;
        left: 1em;
    }
}
@media screen and (max-width: 320px) {
    .game-box {
        padding-top: 0em;
    }
    .option-box{
        width: 90px;
        height: 90px;
    }
    .option-box div{
        width: 70px;
        height: 70px;
    }
    .basic-bg{
        background-size: calc(100% - 10em) calc(100% - 10em);
    }
    .hard-bg{
        background-size: calc(100% - 10em) calc(100% - 10em);
    }
    .paper-basic-position{
        top: 2.2em;
    }
    .scissors-basic-position{
        top: 2.2em;
    }
    .rock-basic-position{
        left: 7.2em;
    }
    .paper-hard-position{
        top: 5em;
        right: 2em;
    }
    .scissors-hard-position{
        top: 1em;
        left: 7.2em;
    }
    .rock-hard-position{
        bottom: 1em;
    }
    .lizard-hard-position{
        bottom: 1em;
    }
    .spock-hard-position{
        top: 5em;
        left: 2em;
    }
}
</style>