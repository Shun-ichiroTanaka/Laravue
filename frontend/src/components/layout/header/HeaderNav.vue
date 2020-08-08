<template>
  <div>
    <header
      class=" w-full lg:h-20 flex items-center bg-white py-2 lg:px-24 hidden sm:flex"
    >
      <router-link
        to="/"
        class="lg:w-1/5 text-3xl font-semibold uppercase cursor-pointer"
      >
        Laravue</router-link
      >
      <form class="lg:w-3/5 px-4">
        <div class="relative flex w-full h-full py-4 items-center">
          <input
            type="text"
            name=""
            placeholder="Search for..."
            class="w-full h-full search-box rounded-lg"
          />
          <button
            type="submit"
            class="search-btn absolute top-auto flex items-center justify-center"
          >
            <search-icon size="20" class=""></search-icon>
          </button>
        </div>
      </form>
      <div class="lg:1-1/5"></div>
    </header>

    <!-- Mobile Header & Nav -->
    <header class="w-full bg-sidebar py-5 px-6 sm:hidden"></header>
  </div>
</template>
<script>
  import { SearchIcon } from "vue-feather-icons";

  export default {
    name: "HeaderNav",
    data() {
      return {
        show: false,
      };
    },
    components: {
      SearchIcon,
    },
    methods: {},
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
  .search {
    &-box {
      padding: 3px 10px 3px 40px;
      overflow: hidden;
      height: 3rem;
      border: none;
      background: #edf2f7;
      &:focus {
        outline: 0;
        background: white;
        border: 1px solid #bac2c6;
        transition: 0.1s ease;
      }
    }
    &-btn {
      left: 10px;
    }
  }
</style>
