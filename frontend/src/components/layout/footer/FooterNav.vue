<template>
  <footer class="w-full bg-white text-right p-4">
    Built by
    <a target="_blank" href="https://twitter.com/tana_fe" class="underline"
      >Shun-ichiro Tanaka</a
    >.
  </footer>
</template>
<script>
  // import Toggle from "@/components/object/button/Toggle";

  export default {
    name: "FooterNav",
    components: {
      // Toggle,
    },
    // props: ["mode"],
  };
</script>
<style lang="scss" scoped>
  .dark {
    footer {
      background: #181a1b;
      box-shadow: 1px 0 0 0 rgba(255, 255, 255, 0.8);
    }
  }
</style>
