<template>
  <div class="card relative flex rounded-lg my-3">
    <button class="close-button cursor-pointer btn-shadow" @click="removeCardFromList">
      <x-icon size="14" class="custom-class"></x-icon>
    </button>
    <div class="body text-base w-full break-words p-4">
      {{ body }}
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
export default {
  components: {
    XIcon
  },
  props: {
    body: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeCardFromList() {
      if(confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardFromList', { cardIndex: this.cardIndex, listIndex: this.listIndex })
      }
    }
  },
}
</script>