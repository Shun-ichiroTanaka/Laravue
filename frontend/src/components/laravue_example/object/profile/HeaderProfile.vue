<template>
  <div class="relative header-profile rounded-lg flex justify-end">
    <div
      class="flex justify-end items-center cursor-pointer pr-4"
      @click="show = !show"
    >
      Justin Bieber
      <button
        class="user-img ml-2 z-10 w-12 h-12 rounded-full overflow-hidden focus:outline-none"
      >
        <img
          src="@/assets/images/user.png"
          class="w-full h-full object-cover"
          alt=""
        />
      </button>
    </div>

    <transition>
      <div v-if="show">
        <div
          class="dropdown-menu absolute max-w-xs z-50 rounded-lg shadow-lg right-0 py-2 mr-4"
        >
          <a
            href="#"
            class="flex justify-start items-center block px-4 py-2 rounded-lg account-link whitespace-no-wrap cursor-pointer"
            ><UserIcon size="1x" class="mr-2"></UserIcon> Profile</a
          >
          <a
            href="#"
            class="flex justify-start items-center block px-4 py-2 rounded-lg account-link whitespace-no-wrap cursor-pointer"
            ><MailIcon size="1x" class="mr-2"></MailIcon>Mail</a
          >
          <a
            href="#"
            class="flex justify-start items-center block px-4 py-2 rounded-lg account-link whitespace-no-wrap cursor-pointer"
            ><LogOutIcon size="1x" class="mr-2"></LogOutIcon>Sign Out</a
          >
        </div>
      </div>
    </transition>
    <div v-if="show" class="dropdown-bg" @click="show = false"></div>
  </div>
</template>
<script>
// import Toggle from  "@/components/laravue_example/object/button/Toggle";
import { UserIcon, MailIcon, LogOutIcon } from 'vue-feather-icons';

export default {
  name: 'HeaderProfile',
  components: {
    // Toggle,
    MailIcon,
    UserIcon,
    LogOutIcon
  },
  data() {
    return {
      show: false,
      logo: require('@/assets/images/bulma.png')
    };
  },
  methods: {
    click() {
      this.show = !this.show;
    }
  }
  // props: ["mode"],
};
</script>
<style lang="scss" scoped>
.dropdown-menu {
  top: 60px;
  background: #fff;
}
.dark {
  .dropdown-menu {
    background: #1e2124;
  }
}
.header-profile {
  height: 4rem;
  background: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.dark {
  .header-profile {
    background: #1e2124;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
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
