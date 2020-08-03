<template>
  <div>
    <!-- END NAV -->
    <!-- Desktop Header -->
    <header
      class="w-full flex items-center bg-white py-2 px-6 hidden sm:flex"
    ></header>

    <!-- Mobile Header & Nav -->
    <header class="w-full bg-sidebar py-5 px-6 sm:hidden"></header>
  </div>
</template>
<script>
  // import Toggle from "@/components/object/button/Toggle";

  export default {
    name: "HeaderNav",
    data() {
      return {
        logo: require("@/assets/images/bulma.png"),
      };
    },
    components: {
      // Toggle,
    },
    // props: ["mode"],
  };
</script>
<style lang="scss" scoped>
  nav.navbar {
    top: 0;
    position: fixed !important;
    width: 100%;
    height: 6rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .navbar-brand {
    align-items: center !important;
  }
</style>
