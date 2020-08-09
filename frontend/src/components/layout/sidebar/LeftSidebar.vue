<template>
  <div class="relative bg-sidebar hidden sm:block px-2">
    <nav class="text-base font-semibold pt-3 ">
      <left-sidebar-item></left-sidebar-item>

      <router-link
        to="/setting"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
      >
        <settings-icon size="20" class="mr-3"></settings-icon>
        Setting
      </router-link>
      <router-link
        to="/tables"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
      >
        <tablet-icon size="20" class="mr-3"></tablet-icon>
        Tables
      </router-link>
      <router-link
        to="/form"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
      >
        <grid-icon size="20" class="mr-3"></grid-icon>
        Form
      </router-link>
      <router-link
        to="/darkmode"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
      >
        <circle-icon size="20" class="mr-3"></circle-icon>
        Darkmode
      </router-link>
      <router-link
        to="/calendar"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
      >
        <calendar-icon size="20" class="mr-3"></calendar-icon>
        Calendar
      </router-link>
      <router-link
        to="/info"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
      >
        <info-icon size="20" class="mr-3"></info-icon>
        F&Q
      </router-link>
      <router-link
        to="/chart"
        class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
      >
        <bar-chart-icon size="20" class="mr-3"></bar-chart-icon>
        Chart
      </router-link>
    </nav>
  </div>
</template>
<script>
  import LeftSidebarItem from "@/components/layout/sidebar/LeftSidebarItem";

  // icon
  import {
    TabletIcon,
    CalendarIcon,
    SettingsIcon,
    GridIcon,
    InfoIcon,
    BarChartIcon,
    CircleIcon,
  } from "vue-feather-icons";
  export default {
    name: "LeftSidebar",
    data() {
      return {
        show: false,
      };
    },
    components: {
      TabletIcon,
      CalendarIcon,
      SettingsIcon,
      GridIcon,
      InfoIcon,
      BarChartIcon,
      CircleIcon,
      LeftSidebarItem,
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
    color: #333;
    transition: 0.2s ease-in;
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
