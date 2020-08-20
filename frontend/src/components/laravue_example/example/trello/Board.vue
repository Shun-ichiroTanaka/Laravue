<template>
  <div>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <draggable
        :list="lists"
        :options="options"
        class="flex w-full overflow-scroll scroll-none"
        @end="movingList"
      >
        <!--
          # Listコンポーネントを呼び出し、propsのデータを受け取ります
          # 受け渡すリストの配列データlistsをv-forディレクティブを使って展開
          # v-forはlistsから展開された、現在の値itemとそのインデックスindexを受け取る
          # itemからさらにlistsで定義されたオブジェクトのキーで値にアクセス
          # v-forを使うとき、key属性を与えることが必須
          # v-bindディレクティブを使ってバインド
         -->
        <List
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :cards="item.cards"
          :list-index="index"
          @change="movingCard"
        />

        <ListAdd />
      </draggable>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import List from '@/components/laravue_example/example/trello/List';
import ListAdd from '@/components/laravue_example/example/trello/ListAdd';
import { mapState } from 'vuex';

export default {
  components: {
    ListAdd,
    List,
    draggable
  },
  computed: {
    ...mapState(['lists']),
    totalCardCount() {
      return this.$store.getters.totalCardCount;
    }
  },
  methods: {
    movingCard: function () {
      this.$store.dispatch('updateList', { lists: this.lists });
    },
    movingList: function () {
      this.$store.dispatch('updateList', { lists: this.lists });
    }
  }
};
</script>
