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
│   │               ├── ※ Card.vue...  カード一覧表示
│   │               ├── CardAdd.vue...  カード追加
│   │               ├── List.vue...  リスト一覧表示
│   │               ├── ListAdd.vue...  リスト追加
│   ├── views
│   │   └── laravue_example
│   │       └── example
│   │           └── trello
│   │               ├── Trello.vue...  親コンポーネント

※ = This File(現在のファイル)
=================================================================== -->
<template>
<div class="w-full card relative flex rounded-lg my-3">


  <div>
    <div @click="show = !show" class="close-button m-1 cursor-pointer lv-rounded-lg">
      <XIcon size="14" class=""></XIcon>
    </div>

    <transition name="down">
      <div v-if="show" @click.self="show = !show" class="my-modal fixed w-full flex justify-center items-center">
        <div class="lv-b-transition modal-contents absolute flex flex-col p-6">
          <div class="flex justify-end">
            <p @click="show = !show" class="lv-rounded-lg p-2 border cursor-pointer">
              <XIcon size="14" class=""></XIcon>
            </p>
          </div>

          <div class="flex justify-center p-6">
            本当に削除してよろしいですか？
          </div>

          <div class="flex w-full justify-center">
            <p @click="removeCardFromList" class="delete-btn p-4 lv-rounded-lg cursor-pointer">削除する</p>
          </div>
        </div>
      </div>
    </transition>
  </div>


  <div class="">
    <div @click="open" class="w-full text-base break-words p-4 cursor-pointer">
      {{ body }}

      <!-- <LvDivider></LvDivider> -->
    </div>
    <transition name="down">
      <div @click.self="close" v-if="modal" class="my-modal fixed w-full flex justify-center items-center">
        <div class="lv-b-transition contents absolute">
          <p @click="close" class="absolute z-50 close-btn p-4 rounded-full right-0 cursor-pointer">
            <XIcon size="20" class></XIcon>
          </p>
          {{ body }}
        </div>
      </div>
    </transition>
  </div>

</div>
</template>

<script>
// import DeleteConfirm from '@/components/laravue_example/example/trello/modal/DeleteConfirm';
// import CardDetail from '@/components/laravue_example/example/trello/modal/CardDetail';
import {
  XIcon
} from 'vue-feather-icons';
// import LvDivider from '@/components/laravue_example/object/atoms/divider/LvDivider';

export default {
  components: {
    XIcon,
    // LvDivider,
  },
  data() {
    return {
      show: false,
      modal: false,
    };
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
      this.$store.dispatch('removeCardFromList', {
        cardIndex: this.cardIndex,
        listIndex: this.listIndex,
      });
      this.show = false;
    },
    open() {
      this.modal = true;
    },

    close() {
      this.modal = false;
    },
  }
}
</script>
<style lang="scss" scoped>
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
    width: 60%;
    height: 80%;
    border-radius: 5px;
    background: #fff;
    h2 {
        border-bottom: 1px solid $gray;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
}
.dark {

    .contents {
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 70%;
        height: 70%;
        border-radius: 5px;
        background: #1e2124;
        h2 {
            border-bottom: 1px solid $gray;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }
}

.dark {
    .close-btn {
        color: white !important;
    }
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
.modal-contents {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 60%;
    // height: 80%;
    border-radius: 5px;
    background: #fff;
    h2 {
        border-bottom: 1px solid $gray;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
}
.dark {
    .modal-contents {
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 500px;
        // height: 200px;
        border-radius: 5px;
        background: #1e2124;
        h2 {
            border-bottom: 1px solid $gray;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }
}

.dark {
    .delete-btn {
        color: #fff !important;
    }
}
.delete-btn {
    background-color: #fff;
    color: #FE4757;
    padding: 8px;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #FE4757;
        color: #fff;
    }
}
.dark {
    .delete-btn {
        background-color: #FE4757;
        color: #fff;
        padding: 8px;
        &:focus {
            outline: none;
        }
    }
}
</style>
