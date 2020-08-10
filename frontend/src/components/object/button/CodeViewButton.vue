<template>
  <div class="">
    <code-icon @click="open" size="20" class="mt-4 cursor-pointer"></code-icon>
    <transition>
      <div
        class="my-modal fixed w-full flex justify-center items-center"
        v-if="modal"
        @click.self="close"
      >
        <p @click="close" class="">
          <x-icon size="20" class="cursor-pointer"></x-icon>
        </p>
        <div class="contents">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { CodeIcon, XIcon } from "vue-feather-icons";

  export default {
    data() {
      return {
        modal: false,
      };
    },
    components: {
      CodeIcon,
      XIcon,
    },
    methods: {
      open() {
        this.modal = true;
      },
      close() {
        this.modal = false;
      },
    },
  };
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
  .contents {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 500px;
    height: 500px;
    position: fixed;
    color: #333;
    background: aqua;
    border-radius: 5px;
    -webkit-box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    h2 {
      border-bottom: 1px solid $gray;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active > .contents,
  .v-leave-active > .contents {
    transition: all 0.3s;
  }
  .v-enter > .contents {
    transform: translateY(-100%);
  }
  .v-leave-to > .contents {
    transform: translateY(-100%);
  }
</style>
