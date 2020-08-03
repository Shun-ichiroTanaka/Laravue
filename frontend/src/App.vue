<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="scss">
  @import "@/assets/sass/_variables.scss";

  body {
    background: $bg-white;
    box-sizing: border-box !important;
    clear: both !important;
  }

  .dark {
    background: $black;
    color: $white;

    a {
      color: $primary;
    }

    strong {
      color: $white;
    }
  }
</style>
