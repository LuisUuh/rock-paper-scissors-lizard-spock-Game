<template>
    <div>
        score
        {{ score }}
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'scoreboard_',
    props: {
        score: Number
    },
    data() {
        return {
            //
        }
    },
})
</script>