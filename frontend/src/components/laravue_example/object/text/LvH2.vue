<template>
  <h2 class="h2 pb-2">
    <slot></slot>
  </h2>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.h2 {
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 1.5rem 0;
  border-bottom: 1px solid #dadada;
}
.dark {
  .h2 {
    border-bottom: 1px solid #8e8f91;
  }
}
</style>
