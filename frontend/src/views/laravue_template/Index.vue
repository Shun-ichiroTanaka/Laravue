<!-- =========================================================================================
    File Name: Index.vue
    Description: Laravue template Top Page.
========================================================================================== -->

<template>
  <div class="main w-full flex lg:pl-8 overflow-y-scroll">
    <left-sidebar class="lg:w-1/6"></left-sidebar>

    <div class="container-bg lg:w-5/6 overflow-x-hidden scroll-none flex flex-col lg:mx-4">
      <div class="w-full flex">
        <main class="lg:w-4/5 main-bg flex-grow py-6 px-12 rounded-lg">
          <h1>jijojgaio</h1>
        </main>

        <div class="lg:w-1/5 py-6 px-4 break-words">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      </div>
      <footer-nav class="footer"></footer-nav>
    </div>
  </div>
</template>
<script>
  import FooterNav from  "@/components/laravue_template/layout/footer/FooterNav";
  import LeftSidebar from  "@/components/laravue_template/layout/sidebar/LeftSidebar";

  export default {
    name: "Index",
    components: {
      FooterNav,
      LeftSidebar,
    },
    props: ["mode"],
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
