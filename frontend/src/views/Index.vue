<template>
  <div id="app" class="bg-gray-100 font-family-karla flex">
    <left-sidebar></left-sidebar>
    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <header-nav></header-nav>

      <div class="w-full overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6">
          <h1 class="text-3xl text-black pb-6">Dashboard</h1>
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
    name: "Index",
    components: {
      HeaderNav,
      FooterNav,
      LeftSidebar,
    },
    // props: ["mode"],
  };
</script>
