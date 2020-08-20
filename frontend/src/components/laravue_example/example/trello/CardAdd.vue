<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <textarea
      v-model="body"
      type="text"
      class="text-input px-4 pb-4 pt-16"
      placeholder="Add new card"
      @focusin="startEditing"
      @focusout="finishEditing"
    ></textarea>

    <transition>
      <button v-if="isEditing || bodyExists" type="submit" class="add-button">
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
  data: function () {
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
    startEditing: function () {
      this.isEditing = true;
    },
    finishEditing: function () {
      this.isEditing = false;
    },
    addCardToList: function () {
      this.$store.dispatch('addCardToList', {
        body: this.body,
        listIndex: this.listIndex
      });
      this.body = '';
    }
  }
};
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active > .contents,
.v-leave-active > .contents {
  transition: all 0.3s ease;
}
.v-enter > .contents {
  transform: translateY(-100%);
}
.v-leave-to > .contents {
  transform: translateY(-100%);
}
</style>
