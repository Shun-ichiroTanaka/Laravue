
<template>
  <form 
  @submit.prevent="addList"
  class="addlist flex inline-block flex-col items-start"
  >
    <input 
    v-model="title"
    type="text"
    class="text-input"
    placeholder="Add new list"
    >
    <plus-icon size="1.5x" class=""></plus-icon>
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>
<script>
export default {
  data: function() {
    return {
      title: '',
    }
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
  }
}
</script>