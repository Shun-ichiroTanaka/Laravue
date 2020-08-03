<template>
  <div class="relative bg-sidebar w-64 hidden sm:block shadow-xl px-2">
    <div class="p-6">
      <a href="/" class="text-3xl font-semibold uppercase cursor-pointer"
        >Laravue</a
      >
    </div>
    <nav class="text-base font-semibold pt-3 ">
      <router-link
        to="/documentation"
        class="flex items-center hover-left active-nav-link py-3 px-2 rounded-lg pl-4 nav-item text-gray"
      >
        <book-icon size="20" class="mr-3 active-icon"></book-icon>
        Documentation</router-link
      >

      <router-link
        to="/profile"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-lg pl-4 nav-item text-gray"
      >
        <user-icon size="20" class="mr-3"></user-icon>
        Profile
      </router-link>

      <router-link
        to="/setting"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-lg pl-4 nav-item text-gray"
      >
        <settings-icon size="20" class="mr-3"></settings-icon>
        Setting
      </router-link>
      <router-link
        to="/tables"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-lg pl-4 nav-item text-gray"
      >
        <tablet-icon size="20" class="mr-3"></tablet-icon>
        Tables
      </router-link>
      <router-link
        to="/forms"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-lg pl-4 nav-item text-gray"
      >
        <grid-icon size="20" class="mr-3"></grid-icon>
        Forms
      </router-link>
      <router-link
        to="/calendar"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-lg pl-4 nav-item text-gray"
      >
        <calendar-icon size="20" class="mr-3"></calendar-icon>
        Calendar
      </router-link>
    </nav>
    <a
      href="#"
      class="absolute w-full bottom-0 account-link flex items-center hover-left justify-center py-3 px-2 rounded-lg"
    >
      <i class="fas fa-arrow-circle-up mr-3"></i>
      Upgrade to Pro!
    </a>
  </div>
</template>
<script>
  // icon
  import {
    BookIcon,
    TabletIcon,
    UserIcon,
    CalendarIcon,
    SettingsIcon,
    GridIcon,
  } from "vue-feather-icons";
  export default {
    name: "LeftSidebar",
    components: {
      BookIcon,
      TabletIcon,
      UserIcon,
      CalendarIcon,
      SettingsIcon,
      GridIcon,
    },
  };
</script>
<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");

  .font-family-karla {
    font-family: karla;
  }

  .bg-sidebar {
    background: #fff;
    height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .active-nav-link {
    color: white !important;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    background: #f857a6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ff5858,
      #f857a6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff5858, #f857a6);
  }

  .nav-item {
    color: #333;
    transition: 0.2s ease-in;
  }

  .account-link {
    color: white;
    background: #f857a6;
    background: -webkit-linear-gradient(to right, #ff5858, #f857a6);
    background: linear-gradient(to right, #ff5858, #f857a6);
  }
  .hover-left:hover {
    transform: translateX(3px);
    transition: 0.2s ease-in-out;
  }
</style>
