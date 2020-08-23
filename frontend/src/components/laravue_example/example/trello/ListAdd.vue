<!-- ===================================================================
# frontend
├── src
│   ├── assets
│   │   └── sass
│   │       └── laravue_example
│   │           └── atom
│   │               └── _trello.scss...  全体のスタイルを管理
│   │
│   ├── components
│   │   └── laravue_example
│   │       └── example
│   │           └── trello
│   │               ├── Board.vue...  trello componentを集約
│   │               ├── Card.vue...  カード一覧表示
│   │               ├── CardAdd.vue...  カード追加
│   │               ├── List.vue...  リスト一覧表示
│   │               ├── ※ ListAdd.vue...  リスト追加
│   ├── views
│   │   └── laravue_example
│   │       └── example
│   │           └── trello
│   │               ├── Trello.vue...  親コンポーネント

※ = This File(現在のファイル)
=================================================================== -->
<template>
<!-- .preventはVueのイベント修飾詞であり、サブミット時にリロードされるのを防ぐ -->
<form @submit.prevent="addList" class="addlist flex inline-block flex-col items-start">
  <!-- v-modelにtitleを定義することで、dataプロパティとバインド -->
  <input v-model="title" type="text" class="text-input" placeholder="Add new list" />

  <button type="submit" class="add-button">
    Add
  </button>
</form>
</template>
<script>
export default {
  data: function() {
    return {
      title: ''
    };
  },
  methods: {
    addList: function() {
      // this.$store.dispatch('アクション名')でactionsを実行できる
      // 第二引数にオブジェクト型でdataプロパティのtitleを渡す
      this.$store.dispatch('addlist', {
        title: this.title
      });
      this.title = '';
    }
  }
};
</script>
