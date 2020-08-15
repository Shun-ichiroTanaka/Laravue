<template>
  <div>
    <header
      class="w-full lg:h-20 flex items-center py-2 lg:pl-8 hidden sm:flex"
    >
      <router-link
        to="/"
        class="lg:w-1/6 text-2xl font-semibold uppercase cursor-pointer"
      >
        Laravue</router-link
      >

      <header-search></header-search>

      <div class="lg:w-1/6 text-primary flex items-center justify-start">
        <div class="ml-4 mr-8">v.1.0.0</div>
        <toggle :mode="mode" @toggle="$emit('toggle')"></toggle>
      </div>
    </header>

    <!-- Mobile Header & Nav -->
    <header class="w-full bg-sidebar py-5 px-6 sm:hidden"></header>
  </div>
</template>
<script>
  import HeaderSearch from  "@/components/laravue_template/object/search/HeaderSearch";
  import Toggle from  "@/components/laravue_template/object/button/Toggle";

  export default {
    name: "HeaderNav",
    data() {
      return {
        show: false,
      };
    },
    components: {
      HeaderSearch,
      Toggle,
    },
    methods: {},
    props: ["mode"],
  };
</script>
<style lang="scss" scoped></style>
