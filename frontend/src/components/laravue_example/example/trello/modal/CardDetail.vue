<template>
<div class="">
  <div @click="open" class="w-full text-base break-words p-4 cursor-pointer">
    {{ body }}

    <LvDivider></LvDivider>
  </div>
  <transition>
    <div @click.self="close" v-if="modal" class="my-modal fixed w-full flex justify-center items-center">
      <div class="contents absolute">
        <p @click="close" class="absolute z-50 close-btn p-4 rounded-full right-0 cursor-pointer">
          <XIcon size="20" class></XIcon>
        </p>
        {{ body }}
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
    LvDivider,
  },
  data() {
    return {
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
</style>
