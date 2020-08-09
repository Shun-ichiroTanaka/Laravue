<template>
  <div class="relative" @mouseover="mouseover" @mouseleave="mouseleave">
    <router-link
      to="/documentation"
      class="flex items-center hover-left py-3 px-2 rounded-full pl-6 nav-item text-gray"
    >
      <book-icon size="20" class="mr-3 active-icon"></book-icon>
      Documentation</router-link
    >
    <transition>
      <div v-if="show" @close="show = false">
        <div class="leftside-bg z-50 absolute w-64 h-screen overflow-hidden">
          <router-link
            to="/about"
            class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
          >
            <code-icon size="20" class="mr-3"></code-icon>
            What is Laravue?
          </router-link>
          <router-link
            to="/profile"
            class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full pl-6 nav-item text-gray"
          >
            <user-icon size="20" class="mr-3"></user-icon>
            Profile
          </router-link>

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
        </div>
      </div>
    </transition>
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
    InfoIcon,
    BarChartIcon,
    CircleIcon,
    CodeIcon,
  } from "vue-feather-icons";
  export default {
    name: "LeftSidebarItem",
    data() {
      return {
        show: false,
      };
    },
    components: {
      BookIcon,
      TabletIcon,
      UserIcon,
      CalendarIcon,
      SettingsIcon,
      GridIcon,
      InfoIcon,
      BarChartIcon,
      CircleIcon,
      CodeIcon,
    },
    methods: {
      mouseover() {
        this.show = true;
      },
      mouseleave() {
        this.show = false;
      },
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
  .leftside-bg {
    background: white;
  }
  .dark {
    .leftside-bg {
      background: #1e2124;
    }
  }

  .v-enter-active {
    transition: all 0.3s ease-in-out;
  }
  .v-leave-active {
    transition: all 0.2s ease;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
</style>
