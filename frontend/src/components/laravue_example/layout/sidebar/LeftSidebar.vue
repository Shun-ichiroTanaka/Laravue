<template>
<div class="relative bg-sidebar hidden sm:block">
  <nav class="text-base font-semibold pt-3">
    <p class="text-lg flex items-center cursor-default py-3 px-2 rounded-full">
      Documentation
    </p>
    <router-link to="/about" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <CodeIcon size="14" class="mr-3"></CodeIcon>
      What is Laravue?
    </router-link>

    <h3 class="text-lg flex items-center cursor-default py-3 px-2 rounded-full">
      Components
    </h3>

    <router-link to="/profile" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <UserIcon size="14" class="mr-3"></UserIcon>
      Profile
    </router-link>

    <router-link to="/setting" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <SettingsIcon size="14" class="mr-3"></SettingsIcon>
      Setting
    </router-link>
    <router-link to="/tables" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <TabletIcon size="14" class="mr-3"></TabletIcon>
      Tables
    </router-link>
    <router-link to="/form" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <GridIcon size="14" class="mr-3"></GridIcon>
      Form
    </router-link>
    <router-link to="/darkmode" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <CircleIcon size="14" class="mr-3"></CircleIcon>
      Darkmode
    </router-link>
    <router-link to="/calendar" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <CalendarIcon size="14" class="mr-3"></CalendarIcon>
      Calendar
    </router-link>
    <router-link to="/info" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <InfoIcon size="14" class="mr-3"></InfoIcon>
      F&Q
    </router-link>
    <router-link to="/chart" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <BarChartIcon size="14" class="mr-3"></BarChartIcon>
      Chart
    </router-link>

    <h3 class="text-lg flex items-center cursor-default py-3 px-2 rounded-full">
      Examples
    </h3>
    <router-link to="/trello" class="flex items-center hover-left opacity-75 hover:opacity-100 py-3 px-2 rounded-full nav-item text-sm">
      <TrelloIcon size="13" class="mr-3"></TrelloIcon>
      Trello
    </router-link>
  </nav>
</div>
</template>
<script>
// import LeftSidebarItem from  "@/components/laravue_example/layout/sidebar/LeftSidebarItem";
// import LvH3 from  "@/components/laravue_example/object/text/LvH3";

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
  TrelloIcon
} from 'vue-feather-icons';
export default {
  name: 'LeftSidebar',
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
    TrelloIcon
  },
  data() {
    return {
      show: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

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

.router-link-active {
    color: #23b5af;
    transition: 0.2s ease;
}
.dark .router-link-active {
    color: white;
    transition: 0.2s ease;
}

.hover-left:hover {
    transform: translateX(7px);
    transition: 0.2s ease-in;
}
</style>
