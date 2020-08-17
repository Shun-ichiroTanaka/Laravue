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

      <header-nav :mode="mode" @toggle="toggle" class="header"></header-nav>

      <transition mode="out-in">
        <router-view :mode="mode"></router-view>
      </transition>

    </div>

  </div>
</template>
<script>
import Loading from '@/components/laravue_example/object/atoms/Loading'
import HeaderNav from "@/components/laravue_example/layout/header/HeaderNav";

export default {
  data() {
    return {
      mode: "dark",
      loading: true,
    };
  },
  components: {
    Loading,
    HeaderNav
  },
  created() {
    window.addEventListener("keyup", this.keyPress);
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
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
  transition: all .3s 0s ease;
}
</style>
