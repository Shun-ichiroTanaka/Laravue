<template>
  <div id="app" class="flex flex-col">
    <header-nav class="sticky"></header-nav>

    <div class="w-full flex lg:py-8 lg:px-24">
      <left-sidebar class="w-1/5 shadow-xl"></left-sidebar>

      <div
        class="w-3/5 overflow-x-hidden flex flex-col px-4 rounded-lg shadow-xl"
      >
        <main class="w-full flex-grow p-6 bg-white">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </main>
      </div>

      <div class="w-1/5 shadow-xl"></div>
    </div>

    <footer-nav></footer-nav>
  </div>
</template>
<script>
  import HeaderNav from "@/components/layout/header/HeaderNav";
  import FooterNav from "@/components/layout/footer/FooterNav";
  import LeftSidebar from "@/components/layout/sidebar/LeftSidebar";

  export default {
    components: {
      HeaderNav,
      FooterNav,
      LeftSidebar,
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
    transition: all 0.3s 0s ease;
  }
</style>
