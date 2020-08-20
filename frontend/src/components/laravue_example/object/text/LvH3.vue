<template>
  <h2 class="h3 pb-2">
    <slot></slot>
  </h2>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.h2 {
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin: 1.25rem 0;
  // border-bottom: 1px solid #dadada;
}
.dark {
  .h3 {
    // border-bottom: 1px solid #8e8f91;
  }
}
</style>
