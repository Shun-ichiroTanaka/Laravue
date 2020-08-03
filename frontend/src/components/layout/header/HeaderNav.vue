<template>
  <div>
    <!-- END NAV -->
    <!-- Desktop Header -->
    <header class="w-full flex items-center bg-white py-2 px-6 hidden sm:flex">
      <div class="w-1/2"></div>
      <div x-data="" class="relative w-1/2 flex justify-end">
        <button
          class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        >
          <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
          <toggle :mode="mode" @toggle="$emit('toggle')"></toggle>
        </button>
        <button
          x-show=""
          class="h-full w-full fixed inset-0 cursor-default"
        ></button>
        <div
          x-show=""
          class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
        >
          <a href="#" class="block px-4 py-2 account-link hover:text-white"
            >Account</a
          >
          <a href="#" class="block px-4 py-2 account-link hover:text-white"
            >Support</a
          >
          <a href="#" class="block px-4 py-2 account-link hover:text-white"
            >Sign Out</a
          >
        </div>
      </div>
    </header>

    <!-- Mobile Header & Nav -->
    <header x-data="{ : false }" class="w-full bg-sidebar py-5 px-6 sm:hidden">
      <div class="flex items-center justify-between">
        <a
          href="index.html"
          class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >Admin</a
        >
        <button class="text-white text-3xl focus:outline-none">
          <i x-show="!" class="fas fa-bars"></i>
          <i x-show="" class="fas fa-times"></i>
        </button>
      </div>

      <!-- Dropdown Nav -->
      <nav class="flex flex-col pt-4">
        <a
          href="index.html"
          class="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
        >
          <i class="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="blank.html"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-sticky-note mr-3"></i>
          Blank Page
        </a>
        <a
          href="tables.html"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-table mr-3"></i>
          Tables
        </a>
        <a
          href="forms.html"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-align-left mr-3"></i>
          Forms
        </a>
        <a
          href="tabs.html"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-tablet-alt mr-3"></i>
          Tabbed Content
        </a>
        <a
          href="calendar.html"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-calendar mr-3"></i>
          Calendar
        </a>
        <a
          href="#"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-cogs mr-3"></i>
          Support
        </a>
        <a
          href="#"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-user mr-3"></i>
          My Account
        </a>
        <a
          href="#"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        >
          <i class="fas fa-sign-out-alt mr-3"></i>
          Sign Out
        </a>
        <button
          class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center"
        >
          <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
        </button>
      </nav>
    </header>
  </div>
</template>
<script>
  import Toggle from "@/components/object/button/Toggle";

  export default {
    name: "HeaderNav",
    data() {
      return {
        logo: require("@/assets/images/bulma.png"),
      };
    },
    components: {
      Toggle,
    },
    props: ["mode"],
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
