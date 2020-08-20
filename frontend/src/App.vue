<!-- =========================================================================================
    File Name: App.vue
    Description: App.vue

    Item Name: Laravue - Vuejs & Laravel Components Template
    Author: Shun-ichiro Tanaka
    Author URL: https://github.com/Shun-ichiroTanaka
========================================================================================== -->
<template>
  <div id="app" class="flex flex-col h-screen overflow-hidden" :class="mode">
    <Loading v-show="loading" />

    <div v-show="!loading">
      <HeaderNav :mode="mode" class="header" @toggle="toggle"></HeaderNav>

      <transition mode="out-in">
        <router-view :mode="mode"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import Loading from '@/components/laravue_example/object/atoms/Loading';
import HeaderNav from '@/components/laravue_example/layout/header/HeaderNav';

export default {
  components: {
    Loading,
    HeaderNav
  },
  data() {
    return {
      mode: 'dark',
      loading: true
    };
  },
  created() {
    window.addEventListener('keyup', this.keyPress);
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    toggle() {
      if (this.mode === 'dark') {
        this.mode = 'light';
      } else {
        this.mode = 'dark';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.v-enter {
  transform: translate(0, -30px);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(0, 30px);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.3s 0s ease;
}
</style>
