<template>
<div class="lg:w-2/3 mx-4">
  <form class="relative flex w-full h-full items-center">
    <input type="text" name="" placeholder="Search for..." class="w-full h-full search-box  lv-rounded-lg " />
    <button type="submit" class="search-btn absolute top-auto flex items-center justify-center">
      <SearchIcon size="20" class="search-icon"></SearchIcon>
    </button>
  </form>
</div>
</template>
<script>
import {
  SearchIcon
} from 'vue-feather-icons';

export default {
  name: 'HeaderSearch',
  components: {
    SearchIcon
  }
};
</script>
<style lang="scss" scoped>
.search {
    &-box {
        padding: 3px 10px 3px 40px;
        overflow: hidden;
        height: 3rem !important;
        border: none;
        background: #edf2f7;
        transition: 0.25s ease;

        &:focus {
            outline: 0;
            background: white;
            border: 1px solid #bac2c6;
            transition: 0.25s ease;
        }
    }
    &-btn {
        left: 10px;
    }
    &-icon {
        stroke: #8b8b8b;
    }
}
.dark {
    .search {
        &-box {
            background: #16191b;
            &:focus {
                background: #16191b;
                border: none;
            }
            &::placeholder {
                color: white;
            }
        }
        &-icon {
            stroke: white;
        }
    }
}
</style>
