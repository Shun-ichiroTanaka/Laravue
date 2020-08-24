<!-- ===================================================================
# frontend
├── src
│   ├── assets
│   │   └── sass
│   │       └── laravue_example
│   │           └── atom
│   │               └── _trello.scss...  全体のスタイルを管理
│   │
│   ├── components
│   │   └── laravue_example
│   │       └── example
│   │           └── trello
│   │               ├── Board.vue...  trello componentを集約
│   │               ├── Card.vue...  カード一覧表示
│   │               ├── CardAdd.vue...  カード追加
│   │               ├── ※ List.vue...  リスト一覧表示
│   │               ├── ListAdd.vue...  リスト追加
│   ├── views
│   │   └── laravue_example
│   │       └── example
│   │           └── trello
│   │               ├── Trello.vue...  親コンポーネント

※ = This File(現在のファイル)
=================================================================== -->
<template>
<div class="list relative inline-block flex flex-col items-start rounded-lg align-top p-4 my-0 mx-1">
  <div class="w-full listheader inline-flex justify-between">
    <div class="list-title flex justify-center items-center">
      {{ title }}
      <span class="block list-counter rounded-full lv-shadow w-6 h-6 flex items-center justify-center lg:ml-2 text-base">{{ totalCardInList }}</span>
    </div>

    <div class="flex justify-center items-center cursor-pointer">
      <XIcon size="14" class @click="removeList"></XIcon>
    </div>
  </div>

  <div @click="open" @close="aaa" class="add-card list-border-doted rounded-lg py-3 px-4 w-full cursor-pointer flex justify-center items-center">
    <PlusIcon size="1.5x" class></PlusIcon>
  </div>
  <transition name="down">
    <div v-if="modal" class="my-modal fixed w-full flex justify-center items-center">
      <div class="lv-b-transition contents absolute">
        <p class="absolute z-50 close-btn p-4 rounded-full right-0 cursor-pointer" @click="close">
          <XIcon size="20" class></XIcon>
        </p>
        <CardAdd :list-index="listIndex" />
      </div>
    </div>
  </transition>

  <draggable group="cards" :list="cards" class="aaa scroll-none relative w-full overflow-y-scroll" @end="$emit('change')">
    <Card v-for="(item, index) in cards" :key="item.id" :body="item.body" :card-index="index" :list-index="listIndex" class="w-full" />
  </draggable>

</div>
</template>

<script>
import draggable from 'vuedraggable';
import Card from '@/components/laravue_example/example/trello/Card';
import CardAdd from '@/components/laravue_example/example/trello/CardAdd';
// icon
import {
  XIcon,
  PlusIcon
} from 'vue-feather-icons';
export default {
  components: {
    draggable,
    Card,
    CardAdd,
    XIcon,
    PlusIcon
  },
  // propsには、親コンポーネントから受け取るデータを定義できます
  // 受け取ったデータはdataプロパティと同じようにアクセスでき
  // テンプレートで直接呼び出すこともできます
  props: {
    // propsでデータを受け取る時は、型などの条件を指定できます
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      modal: false
    };
  },
  computed: {
    totalCardInList() {
      return this.cards.length;
    }
  },
  methods: {
    // リストの削除
    removeList: function() {
      if (confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removelist', {
          listIndex: this.listIndex
        });
      }
    },

    open() {
      this.modal = true;
    },

    close() {
      this.modal = false;
    },
    aaa(aaa) {
      this.modal = aaa;
    },
  }
};
</script>
<style lang="scss" scoped>
.code-bg {
    background: #fff;
}
.dark {
    .code-bg {
        background: #1e2124;
    }
}

.aaa {
    height: calc(100vh - 16rem);
}
.my-modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: 1000 !important;
}
.contents {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 500px;
    max-height: 500px;
    border-radius: 5px;
    h2 {
        border-bottom: 1px solid $gray;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
}

.dark {
    .close-btn {
        color: white !important;
    }
}
</style>
