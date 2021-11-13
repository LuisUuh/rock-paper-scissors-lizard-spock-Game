<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed');
  #app {
    border: .1px solid hsl(237, 49%, 15%);
    font-family: 'Barlow Semi Condensed';
    color:  hsl(229, 25%, 31%);
  }
  body {
    margin: 0;
    padding: 0;
    background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  }
</style>