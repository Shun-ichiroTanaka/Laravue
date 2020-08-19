<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <textarea v-model="body"
           type="text"
           class="text-input p-4"
           placeholder="Add new card"
           @focusin="startEditing"
           @focusout="finishEditing"
    ></textarea>
    <button type="submit"
            class="add-button"
            v-if="isEditing || bodyExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      body: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if(this.isEditing) {
        classList.push('active')
      }
      if(this.bodyExists) {
        classList.push('addable')
      }
      return classList;
    },
    bodyExists() {
      return this.body.length > 0
    }
  },
  methods: {
    startEditing: function() {
      this.isEditing = true
    },
    finishEditing: function() {
      this.isEditing = false
    },
    addCardToList: function() {
      this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex })
      this.body = ''
    }
  }
}
</script>
<style lang="scss" scoped>
  textarea {
    color: #333;
    width: 500px;
    height: 500px;
    background: white;
    resize: none;
  }
  .dark {
    textarea {
      color: white;
      background: #1e2124;
      width: 500px;
      height: 500px;
      resize: none;
    }
  }
</style>