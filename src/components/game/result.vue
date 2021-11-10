<template>
    <div>
        {{ choice }}
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'result',
    props: {
        choice: String
    },
    data() {
        return {
            //
        }
    },
})
</script>