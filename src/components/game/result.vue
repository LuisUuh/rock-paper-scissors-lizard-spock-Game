<template>
    <div>
        <section class="result-box basic">
            <article :class="['result-item ', userWin ? 'bg-spinner': '']">
                <h3>YOU PICKED</h3>
                <figure v-if="choice == 'paper'" class="option-box d-flex paper">
                <div>
                    <img :src="options.paper" width="50" alt="img-paper">
                </div>
                </figure>
                <figure v-if="choice == 'rock'" class="option-box d-flex rock">
                    <div>
                        <img :src="options.rock" width="50" alt="img-rock">
                    </div>
                </figure>
                <figure v-if="choice == 'scissors'" class="option-box d-flex scissors">
                    <div>
                        <img :src="options.scissors" width="50" alt="img-scissors">
                    </div>
                </figure>
                <figure v-if="choice == 'lizard'" class="option-box d-flex lizard">
                    <div>
                        <img :src="options.lizard" width="50" alt="img-lizard">
                    </div>
                </figure>
                <figure v-if="choice == 'spock'" class="option-box d-flex spock">
                    <div>
                        <img :src="options.spock" width="50" alt="img-spock">
                    </div>
                </figure>
            </article>
            <div v-if="!isMobile" :class="[show_btn ? 'show-btn':'hide-btn']">
                <h2>{{labelResult}}</h2>
                <button class="btn-restart" @click="restart">play again</button>
            </div>
            <article :class="['result-item ', houseWin ? 'bg-spinner': '']">
                <h3>THE HOUSE PICKED</h3>
                <div v-if="housePicked == ''" class="spinner-house option-box d-flex">
                    <div><img :src="options.sppiner" alt=""></div>
                </div>
                <figure v-if="housePicked == 'paper'" class="option-box d-flex paper">
                <div>
                    <img :src="options.paper" width="50" alt="img-paper">
                </div>
                </figure>
                <figure v-if="housePicked == 'rock'" class="option-box d-flex rock">
                    <div>
                        <img :src="options.rock" width="50" alt="img-rock">
                    </div>
                </figure>
                <figure v-if="housePicked == 'scissors'" class="option-box d-flex scissors">
                    <div>
                        <img :src="options.scissors" width="50" alt="img-scissors">
                    </div>
                </figure>
                <figure v-if="housePicked == 'lizard'" class="option-box d-flex lizard">
                    <div>
                        <img :src="options.lizard" width="50" alt="img-lizard">
                    </div>
                </figure>
                <figure v-if="housePicked == 'spock'" class="option-box d-flex spock">
                    <div>
                        <img :src="options.spock" width="50" alt="img-spock">
                    </div>
                </figure>
            </article>
        </section>
        <section class="mobile-score">
            <div v-if="isMobile" :class="[show_btn ? 'show-btn':'hide-btn']">
                <h2>{{labelResult}}</h2>
                <button class="btn-restart" @click="restart">play again</button>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'result',
    props: {
        mode: String,
        choice: String,
        actualRecord: Number,
    },
    data(): {show_btn: boolean, labelResult: string, isMobile: boolean, userWin: boolean, houseWin: boolean, housePicked: string, countResult: number, options: object} {
        return {
            show_btn: false,
            labelResult: '',
            housePicked: '',
            userWin: false,
            houseWin: false,
            isMobile: false,
            countResult: this.actualRecord,
            options: {
                lizard: require('@/assets/images/icon-lizard.svg'),
                paper: require('@/assets/images/icon-paper.svg'),
                rock: require('@/assets/images/icon-rock.svg'),
                scissors: require('@/assets/images/icon-scissors.svg'),
                spock: require('@/assets/images/icon-spock.svg'),
                sppiner: require('@/assets/images/sppiner.svg'),
                sppiner_win: require('@/assets/images/sppiner-win.svg'),
            }
        }
    },
    methods: {
        restart() {
            this.$emit('playAgain', true)
        },
        getHousePicked() {
            let m = this.mode == 'basic' ? 3 : 5
            if(screen.width < 768) {
                this.isMobile = true
            }else {
                this.isMobile = false
            }
            let housePicked = Math.floor(Math.random() * m)
            switch (housePicked) {
                case 0:
                    this.housePicked = 'paper'
                    if (this.choice == 'paper') {
                        this.labelResult = 'draw'
                    } else if (this.choice == 'rock' || this.choice == 'spock') {
                        this.labelResult = 'you lose'
                        this.countResult -= 1
                        this.houseWin = true
                    }  else {
                        this.labelResult = 'You win'
                        this.userWin = true
                        this.countResult++
                    }
                    break;
                case 1:
                    this.housePicked = 'rock'
                    if (this.choice == 'rock') {
                        this.labelResult = 'draw'
                    } else if (this.choice == 'paper' || this.choice == 'spock') {
                        this.labelResult = 'you win'
                        this.userWin = true
                        this.countResult++
                    }  else {
                        this.labelResult = 'you lose'
                        this.houseWin = true
                        this.countResult -= 1
                    }
                    break;
                case 2:
                    this.housePicked = 'scissors'
                    if (this.choice == 'scissors') {
                        this.labelResult = 'draw'
                    } else if (this.choice == 'spock' || this.choice == 'rock') {
                        this.labelResult = 'you win'
                        this.userWin = true
                        this.countResult ++
                    }  else {
                        this.labelResult = 'you lose'
                        this.houseWin = true
                        this.countResult -= 1
                    }
                    break;
                case 3:
                    this.housePicked = 'lizard'
                    if (this.choice == 'lizard') {
                        this.labelResult = 'draw'
                    } else if (this.choice == 'rock' || this.choice == 'scissors') {
                        this.labelResult = 'you win'
                        this.userWin = true
                        this.countResult++
                    } else {
                        this.labelResult = 'you lose'
                        this.houseWin = true
                        this.countResult -= 1
                    }
                    break;
                case 4:
                    this.housePicked = 'spock'
                    if (this.choice == 'spock') {
                        this.labelResult = 'draw'
                    } else if(this.choice == 'paper' || this.choice == 'lizard') {
                        this.labelResult = 'you win'
                        this.userWin = true
                        this.countResult++
                    } else {
                        this.labelResult = 'you lose'
                        this.houseWin = true
                        this.countResult -= 1
                    }
                    break;
                    default:
                        this.labelResult = 'Error!'
            }
            this.$emit('setResult', this.countResult)
        }
    },
    mounted() {
        setTimeout(() => {
            this.getHousePicked()
            this.show_btn = true
        }, 2000)
    }
})
</script>
<style scoped>
.result-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}
.result-item{
    padding-bottom: 1em;
    position: relative;
    width: 33%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
}
.show-btn{
    display:block;
    font-size: 25px;
    margin: 0;
}
.show-btn h2{
    color: #fff;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    display: block;
    text-align: center;
}
.hide-btn{
    display:none
}
.btn-restart{
    width: 100%;
    height: 3rem;
    border: none;
    background: #fff;
    color:hsl(230, 64%, 43%);
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: bold;
}
.result-item figure, h3{
    z-index: 2;
}
.bg-spinner{
    background: url('../../assets/images/sppiner-win.svg') no-repeat center center;
    background-position-y: 3em;
}
.spinner-house img{
    width: 150px;
}
.mobile-score{
    width: 60%;
    margin: auto;
    text-align: center;
}
.mobile-score h2{
    font-size: 2.2em;
    /* margin: .1em 0; */
}
@media (max-width: 768px) {
    .bg-spinner{
    background: url('../../assets/images/sppiner-win.svg') no-repeat top center;
    background-position-y: -.7em;
}
    .result-item{
        flex-direction: column-reverse;
        width: 50%;
    }
    .spinner-house img{
        width: 120px;
    }
}
@media (max-width: 375px) {
    .mobile-score{
        width: 50%;
        margin: auto;
        margin-top: -2em;
    }
    .mobile-score h2{
        font-size: 1.5em;
    }
}
</style>