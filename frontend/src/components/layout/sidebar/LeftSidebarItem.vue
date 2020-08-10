<template>
  <div class="relative" @mouseover="mouseover" @mouseleave="mouseleave">
    <router-link
      to="/documentation"
      class="flex items-center hover-left py-3 px-2 rounded-full pl-6 nav-item text-gray"
    >
      <slot></slot>
    </router-link>
    <transition>
      <div v-if="show" @close="show = false">
        <div class="leftside-bg z-50 absolute w-64 overflow-hidden">
          <slot name="docume" v-if="this.$slots.docume"></slot>
          <slot name="compo" v-if="this.$slots.compo"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: "LeftSidebarItem",
    data() {
      return {
        show: false,
      };
    },
    components: {},
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
