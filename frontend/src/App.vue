<template>
  <div id="app" class="flex flex-col" :class="mode">
    <header-nav :mode="mode" @toggle="toggle" class="header"></header-nav>

    <div class="main w-full flex lg:px-24 overflow-y-scroll">
      <left-sidebar class="w-1/5"></left-sidebar>

      <div class=" w-3/5 overflow-x-hidden scroll-none flex flex-col mx-4">
        <main class="main-bg w-full flex-grow p-6 rounded-lg">
          <transition mode="out-in">
            <router-view :mode="mode"></router-view>
          </transition>
        </main>

        <footer-nav class="footer"></footer-nav>
      </div>

      <div class="w-1/5"></div>
    </div>
  </div>
</template>
<script>
  import HeaderNav from "@/components/layout/header/HeaderNav";
  import FooterNav from "@/components/layout/footer/FooterNav";
  import LeftSidebar from "@/components/layout/sidebar/LeftSidebar";

  export default {
    data() {
      return {
        mode: "dark",
      };
    },
    components: {
      HeaderNav,
      FooterNav,
      LeftSidebar,
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
      },
    },
  };
</script>
<style lang="scss" scoped>
  .main-bg {
    background: #eff2f6;
  }
  .dark {
    .main-bg {
      background: #151518;
    }
  }
  .header {
    height: 6rem;
  }
  .main {
    height: calc(100vh - 6rem);
  }
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
