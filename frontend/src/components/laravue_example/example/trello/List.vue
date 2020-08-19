<template>
  <div class="list relative inline-block flex flex-col items-start rounded-lg align-top p-4 my-0 mx-1">
    

    <div class="w-full listheader inline-flex justify-between">
      <div class="list-title flex justify-center items-center">
        {{ title }}
        <span class="block list-counter rounded-full lv-shadow w-6 h-6 flex items-center justify-center lg:ml-2 text-base">
          {{totalCardInList}}
        </span>
      </div>

      <div class="flex justify-center items-center cursor-pointer">
        <x-icon @click="removeList" size="14" class=""></x-icon>
      </div>
    </div>

    <draggable group="cards"
              :list="cards"
              @end="$emit('change')">
      <card v-for="(item, index) in cards"
            :body="item.body"
            :key="item.id"
            :cardIndex="index"
            :listIndex="listIndex"
      />

<div @click="open">jjjjjjjjjjjjjjj</div>

    </draggable>

    <transition>
      <div
        class="my-modal fixed w-full flex justify-center items-center"
        v-if="modal"
        @click.self="close"
      >
        <!-- 
        <p @click="close" class="">
          <x-icon size="20" class="cursor-pointer"></x-icon>
        </p>
       -->
        <div class="contents absolute">
          <card-add :listIndex="listIndex"/>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import Card from '@/components/laravue_example/example/trello/Card'
  import CardAdd from '@/components/laravue_example/example/trello/CardAdd'
  // icon
  import { XIcon } from 'vue-feather-icons'
  export default {
      data() {
      return {
        modal: false,
      };
    },
    components:{
      draggable,
      Card,
      CardAdd,
      XIcon
    },
    // propsには、親コンポーネントから受け取るデータを定義できます
    // 受け取ったデータはdataプロパティと同じようにアクセスでき
    // テンプレートで直接呼び出すこともできます
    props:{
      // propsでデータを受け取る時は、型などの条件を指定できます
      title:{
        type:String,
        required:true
      },
      cards: {
        type: Array,
        required: true
      },
      listIndex:{
        type:Number,
        required:true
      }
    },
    computed: {
      totalCardInList() {
        return this.cards.length
      }
    },
    methods:{
      // リストの削除
      removeList:function(){
        if(confirm('本当にこのリストを削除しますか？')){
          this.$store.dispatch('removelist',{listIndex:this.listIndex});
        }
      },

      open(){
        this.modal = true;
      },

      close(){
        this.modal = false;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .code-bg {
    background: white;
  }
  .dark {
    .code-bg {
      background: #1e2124;
    }
  }
  .my-modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: 1000 !important;
  }
  .contents {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 80%;
    max-height: 80%;
    border-radius: 5px;
    h2 {
      border-bottom: 1px solid $gray;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active > .contents,
  .v-leave-active > .contents {
    transition: all 0.3s;
  }
  .v-enter > .contents {
    transform: translateY(-100%);
  }
  .v-leave-to > .contents {
    transform: translateY(-100%);
  }

</style>