<template>
  <div id="app" class="flex">
    <left-sidebar></left-sidebar>
    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <header-nav></header-nav>

      <div class="w-full overflow-x-hidden flex flex-col">
        <main class="w-full flex-grow p-6">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </main>
        <footer-nav></footer-nav>
      </div>
    </div>
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
    transform: translate(-50px, 0);
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
    transform: translate(100px, 0);
    opacity: 0;
  }
  .v-leave-active {
    transition: all 0.5s 0s ease;
  }
</style>
