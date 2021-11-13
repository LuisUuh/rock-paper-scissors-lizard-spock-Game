<template>
    <section class="scoreboard">
        <figure>
            <img v-if="logoMode == 'basic'" :src="logos.basic" max-width="150" alt="logo">
            <img v-if="logoMode == 'hard'" :src="logos.hard" max-width="100" alt="logo">
        </figure>
        <article>
            <p class="score-text">Score</p>
            <p class="score-value">{{score}}</p>
        </article>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'scoreboard_',
    props: {
        score: Number,
        logoMode: String
    },
    data() {
        return {
            logos: { basic: require('@/assets/images/logo.svg'), hard: require('@/assets/images/logo-bonus.svg') }
        }
    }
})
</script>
<style scoped>
.scoreboard {
    border: 2px hsl(217, 16%, 45%) solid;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 40%;
    margin: auto;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 2rem;
}
.scoreboard figure {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.scoreboard article{
    height: 100px;
    width: 7rem;
    background-color: #fff;
    color:hsl(229, 25%, 31%);
    padding: 0;
    border-radius: 10px;
}
.scoreboard .score-text {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 0;
    color: hsl(229, 64%, 46%);
}
.scoreboard .score-value {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 0;
}
@media screen and (max-width: 700px) {
    .scoreboard {
        max-width: 100%;
        margin: 2rem 2rem 0 2rem;
    }
}
@media screen and (max-width: 375px) {
    .scoreboard figure img {
        max-width: 100px;
    }
    .scoreboard article{
    height: 90px;
    width: 6rem;
}
}
</style>