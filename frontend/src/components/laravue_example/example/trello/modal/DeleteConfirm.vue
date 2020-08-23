<template>
<div class="">
  <button @click="open" class="close-button m-1 cursor-pointer lv-rounded-lg">
    <XIcon size="14" class=""></XIcon>
  </button>

  <transition>
    <div @click.self="close" v-if="modal" class="my-modal fixed w-full flex justify-center items-center">
      <div class="modal-contents absolute">
        本当に削除してよろしいですか？
        <LvDivider></LvDivider>
        <p @click="close" class="absolute z-50 close-btn p-4 rounded-full right-0 cursor-pointer">キャンセル</p>
        <p @click="removeCardFromList">消す</p>
      </div>
    </div>
  </transition>
</div>
</template>
<script>
import {
  XIcon
} from 'vue-feather-icons';
import LvDivider from '@/components/laravue_example/object/atoms/divider/LvDivider';
export default {
  components: {
    XIcon,
    LvDivider
  },
  data() {
    return {
      modal: false
    };
  },
  methods: {
    removeCardFromList() {
      this.$store.dispatch('removeCardFromList', {
        cardIndex: this.cardIndex,
        listIndex: this.listIndex
      });
    },
    open() {
      this.modal = true;
    },
    close() {
      this.modal = false;
    }
  }

}
</script>
<style lang="scss" scoped>
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
    height: 80%;
    border-radius: 5px;
    background: white;
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

.dark {
    .close-btn {
        color: white !important;
    }
}
</style>
