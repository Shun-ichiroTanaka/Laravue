<template>
  <h1 class="h1 pb-2 font-medium">
    <slot></slot>
  </h1>
</template>
<script>
  export default {};
</script>
<style lang="scss" scoped>
  .h1 {
    font-size: 1.8rem;
    line-height: 1.8rem;
    margin: 1.8rem 0;
    border-bottom: 1px solid #dadada;
  }
  .dark {
    .h1 {
      border-bottom: 1px solid #8e8f91;
    }
  }
</style>
