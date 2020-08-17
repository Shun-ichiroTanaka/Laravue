<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex"
    />
    <card-add :listIndex="listIndex" />
  </div>
</template>

<script>
import Card from '@/components/laravue_example/example/trello/Card'
import CardAdd from '@/components/laravue_example/example/trello/CardAdd'
export default {
components:{
Card,
CardAdd
},
props:{
title:{
type:String,
required:true
},
listIndex:{
type:Number,
required:true
}
},
methods:{
removeList:function(){
if(confirm('本当にこのリストを削除しますか？')){
this.$store.dispatch('removelist',{listIndex:this.listIndex})
}
},
}
}
</script>