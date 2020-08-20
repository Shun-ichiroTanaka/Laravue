<template>
  <div class="w-full card relative flex rounded-lg my-3">
    <button
      class="close-button m-1 cursor-pointer lv-rounded-lg"
      @click="removeCardFromList"
    >
      <XIcon size="14" class=""></XIcon>
    </button>
    <div class="w-full text-base break-words p-4">
      {{ body }}

      <LvDivider></LvDivider>
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons';
import LvDivider from '@/components/laravue_example/object/atoms/divider/LvDivider';

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
      if (confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardFromList', {
          cardIndex: this.cardIndex,
          listIndex: this.listIndex
        });
      }
    }
  }
};
</script>
