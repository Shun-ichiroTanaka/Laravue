<template>
  <div class="w-full h-full cursor-pointer" @click="toTop">
    <transition name="anime">
      <div
        v-show="scY > 300"
        id="pagetop"
        class="fixed rounded-full shaodw flex items-center justify-center"
      >
        <ChevronUpIcon size="2x" class=""></ChevronUpIcon>
      </div>
    </transition>
  </div>
</template>
<script>
import { ChevronUpIcon } from 'vue-feather-icons';

export default {
  name: 'ScrollTop',
  components: {
    ChevronUpIcon
  },
  data() {
    return {
      scTimer: 0,
      scY: 0
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#pagetop {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  bottom: 170px;
  right: 30px;
  z-index: 100;
  width: 50px;
  height: 50px;
  background: $btn-white;
  color: $black;
  &:hover {
    background: $btn-hover-white;
  }
}
.anime-enter-active,
.anime-leave-active {
  transition: all 0.5s ease;
}
.anime-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.dark {
  #pagetop {
    -webkit-box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    color: $white;
    background: $third-black;

    &:hover {
      background: $btn-gray-hover;
    }
  }
}
</style>
