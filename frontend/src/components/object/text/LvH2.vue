<template>
  <h1 class="h1 text-3xl pb-2">
    <slot></slot>
  </h1>
</template>
<script>
  export default {};
</script>
<style lang="scss" scoped>
  .h1 {
    line-height: 42px;
    padding-bottom: 23px;
    margin: 10px 0px;
    border-bottom: 1px solid #dadada;
  }
</style>
