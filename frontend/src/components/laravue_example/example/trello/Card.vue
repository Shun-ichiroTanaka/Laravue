<template>
  <div class="card relative flex rounded-lg my-3">
    <button @click="removeCardFromList" class="close-button m-1 cursor-pointer lv-shadow">
      <x-icon size="14" class=""></x-icon>
    </button>
    <div class="body text-base w-full break-words p-4">
      {{ body }}
      <lv-divider></lv-divider>
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
import LvDivider from '@/components/laravue_example/object/atoms/divider/LvDivider'

export default {
  components: {
    XIcon,
    LvDivider
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