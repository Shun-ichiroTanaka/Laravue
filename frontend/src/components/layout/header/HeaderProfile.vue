<template>
  <div>
    <div class="relative">
      <div
        @click="show = !show"
        class="flex justify-end items-center cursor-pointer"
      >
        Justin Bieber
        <button
          class="ml-2 z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        >
          <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
        </button>
      </div>

      <transition>
        <div v-if="show">
          <div
            class="dropdown-menu absolute max-w-xs z-50 rounded-lg shadow-lg right-0"
          >
            <div class="py-2">
              <a
                href="#"
                class="flex justify-start items-center block px-4 py-2 rounded-lg account-link whitespace-no-wrap cursor-pointer"
                ><user-icon size="1x" class="mr-2"></user-icon> Profile</a
              >
              <a
                href="#"
                class="flex justify-start items-center block px-4 py-2 rounded-lg account-link whitespace-no-wrap cursor-pointer"
                ><mail-icon size="1x" class="mr-2"></mail-icon>Mail</a
              >
              <a
                href="#"
                class="flex justify-start items-center block px-4 py-2 rounded-lg account-link whitespace-no-wrap cursor-pointer"
                ><log-out-icon size="1x" class="mr-2"></log-out-icon>Sign Out</a
              >
            </div>
          </div>
        </div>
      </transition>
      <div class="dropdown-bg" @click="show = false" v-if="show"></div>
    </div>

    <!-- Mobile Header & Nav -->
    <header class="w-full bg-sidebar py-5 px-6 sm:hidden"></header>
  </div>
</template>
<script>
  // import Toggle from "@/components/object/button/Toggle";
  import { UserIcon, MailIcon, LogOutIcon } from "vue-feather-icons";

  export default {
    name: "HeaderNav",
    data() {
      return {
        show: false,
        logo: require("@/assets/images/bulma.png"),
      };
    },
    components: {
      // Toggle,
      MailIcon,
      UserIcon,
      LogOutIcon,
    },
    methods: {
      click() {
        this.show = !this.show;
      },
    },
    // props: ["mode"],
  };
</script>
<style lang="scss" scoped>
  .dropdown-bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease;
  }

  .v-enter {
    transform: translateY(-10px);
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }
</style>
