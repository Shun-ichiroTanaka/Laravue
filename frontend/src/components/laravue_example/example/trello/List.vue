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

      <card-add :listIndex="listIndex"/>

    </draggable>


  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import Card from '@/components/laravue_example/example/trello/Card'
  import CardAdd from '@/components/laravue_example/example/trello/CardAdd'
  // icon
  import { XIcon } from 'vue-feather-icons'
  export default {
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
        this.$store.dispatch('removelist',{listIndex:this.listIndex})
      }
    },
  }
}
</script>