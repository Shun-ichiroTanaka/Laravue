<template>
  <div id="app" class="flex flex-col" :class="mode">
    <header-nav :mode="mode" @toggle="toggle" class="header"></header-nav>

    <div class="main w-full flex lg:pl-8 overflow-y-scroll">
      <left-sidebar class="lg:w-1/6"></left-sidebar>

      <div class="container-bg lg:w-5/6 overflow-x-hidden scroll-none flex flex-col lg:mx-4">
          <div class="w-full flex">
                    <main class="lg:w-4/5 main-bg flex-grow py-6 px-12 rounded-lg">
            <transition mode="out-in">
              <router-view :mode="mode"></router-view>
            </transition>

          </main>
                                <div class="lg:w-1/5 py-6 px-4 break-words">
                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          </div>


        <footer-nav class="footer"></footer-nav>


      </div>

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
      background: transparent;
    }
      .container-bg {
        background: #16191b;
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
