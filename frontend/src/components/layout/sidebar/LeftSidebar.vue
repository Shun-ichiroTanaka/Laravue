<template>
  <div class="relative bg-sidebar hidden sm:block">
    <nav class="text-base font-semibold pt-3 ">
      <p
        class="text-lg flex items-center  cursor-default py-3 px-2 rounded-full"
      >
        Documentation
      </p>
      <router-link
        to="/about"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <code-icon size="14" class="mr-3"></code-icon>
        What is Laravue?
      </router-link>

      <h3
        class="text-lg flex items-center cursor-default py-3 px-2 rounded-full"
      >
        Components
      </h3>

      <router-link
        to="/profile"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <user-icon size="14" class="mr-3"></user-icon>
        Profile
      </router-link>

      <router-link
        to="/setting"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <settings-icon size="14" class="mr-3"></settings-icon>
        Setting
      </router-link>
      <router-link
        to="/tables"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <tablet-icon size="14" class="mr-3"></tablet-icon>
        Tables
      </router-link>
      <router-link
        to="/form"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <grid-icon size="14" class="mr-3"></grid-icon>
        Form
      </router-link>
      <router-link
        to="/darkmode"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <circle-icon size="14" class="mr-3"></circle-icon>
        Darkmode
      </router-link>
      <router-link
        to="/calendar"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <calendar-icon size="14" class="mr-3"></calendar-icon>
        Calendar
      </router-link>
      <router-link
        to="/info"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <info-icon size="14" class="mr-3"></info-icon>
        F&Q
      </router-link>
      <router-link
        to="/chart"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm"
      >
        <bar-chart-icon size="14" class="mr-3"></bar-chart-icon>
        Chart
      </router-link>
    </nav>
  </div>
</template>
<script>
  // import LeftSidebarItem from "@/components/layout/sidebar/LeftSidebarItem";
  // import LvH3 from "@/components/object/text/LvH3";

  // icon
  import {
    UserIcon,
    TabletIcon,
    CalendarIcon,
    SettingsIcon,
    GridIcon,
    InfoIcon,
    BarChartIcon,
    CircleIcon,
    // BookIcon,
    CodeIcon,
    // CloudIcon,
  } from "vue-feather-icons";
  export default {
    name: "LeftSidebar",
    data() {
      return {
        show: false,
      };
    },
    components: {
      // BookIcon,
      TabletIcon,
      CalendarIcon,
      SettingsIcon,
      GridIcon,
      InfoIcon,
      BarChartIcon,
      CircleIcon,
      // LeftSidebarItem,
      CodeIcon,
      UserIcon,
      // LvH3,
      // CloudIcon,
    },
  };
</script>
<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");

  .font-family-karla {
    font-family: karla;
  }

  .bg-sidebar {
    // background: #fff;
    // height: calc(100vh - 6rem);
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .nav-item {
    transition: 0.2s ease-in;
    color: #959ea7;
    &:hover {
      color: #1e2124;
    }
  }
  .dark {
    .nav-item {
      color: #8e9091;
      &:hover {
        color: white;
      }
    }
  }

  // .router-link-active {
  //   color: white;
  //   background: #23b5af;
  // }
  .hover-left:hover {
    transform: translateX(7px);
    transition: 0.2s ease-in;
  }
</style>
