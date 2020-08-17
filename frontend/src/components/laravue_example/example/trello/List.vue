<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total:{{totalCardInList}}</p>
      <div class="deletelist" @click="removeList">×</div>
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
  export default {
    components:{
      draggable,
      Card,
      CardAdd
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