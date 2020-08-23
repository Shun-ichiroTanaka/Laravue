<template>
<div>
  <button @click="open" class="close-button m-1 cursor-pointer lv-rounded-lg">
    <XIcon size="14" class=""></XIcon>
  </button>

  <transition>
    <div v-if="modal" @click.self="close" class="my-modal fixed w-full flex justify-center items-center">
      <div class="modal-contents absolute flex flex-col p-6">
        <div class="flex justify-end">
          <p @click="close" class="lv-rounded-lg p-2 border cursor-pointer">
            <XIcon size="14" class=""></XIcon>
          </p>
        </div>

        <div class="flex justify-center p-6">
          本当に削除してよろしいですか？
        </div>

        <LvDivider></LvDivider>
        <div class="flex w-full justify-center">
          <p @click="removeCardFromList" class="delete-btn p-4 lv-rounded-lg cursor-pointer">削除する</p>
        </div>
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
