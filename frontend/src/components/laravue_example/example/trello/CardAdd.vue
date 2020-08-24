<template>
<form :class="classList" @submit.prevent="addCardToList">
  <textarea v-model="body" type="text" class="text-input px-4 pb-4 pt-16" placeholder="Add new card" @focusin="startEditing" @focusout="finishEditing"></textarea>

  <transition name="down">
    <button @click="close" v-if="isEditing || bodyExists" type="submit" class="lv-b-transition add-button">
      Add
    </button>
  </transition>
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
      isEditing: false
    };
  },
  computed: {
    classList() {
      const classList = ['addcard'];
      if (this.isEditing) {
        classList.push('active');
      }
      if (this.bodyExists) {
        classList.push('addable');
      }
      return classList;
    },
    bodyExists() {
      return this.body.length > 0;
    }
  },
  methods: {
    startEditing: function() {
      this.isEditing = true;
    },
    finishEditing: function() {
      this.isEditing = false;
    },
    addCardToList: function() {
      this.$store.dispatch('addCardToList', {
        body: this.body,
        listIndex: this.listIndex
      });
      this.body = '';
    },
    close() {
      this.modal = false;
      this.$emit('aaa', this.modal);
    }
  }
};
</script>
<style lang="scss" scoped>
textarea {
    color: #333;
    width: 500px;
    height: 500px;
    background: #fff;
    resize: none;
}
.dark {
    textarea {
        color: #fff;
        background: #1e2124;
        width: 500px;
        height: 500px;
        resize: none;
    }
}
</style>
