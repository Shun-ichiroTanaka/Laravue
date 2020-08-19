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
│   │               ├── ListAdd.vue...  リスト追加
│   ├── views
│   │   └── laravue_example
│   │       └── example
│   │           └── trello
│   │               ├── ※ Trello.vue...  親コンポーネント

※ = This File(現在のファイル)
=================================================================== -->
<template>
  <div class="main w-full flex lg:pl-8 overflow-y-scroll">
    <left-sidebar class="lg:w-1/6"></left-sidebar>

    <div class="container-bg lg:w-5/6 overflow-x-hidden scroll-none flex flex-col lg:mx-4">
      <main class="lg:w-full main-bg flex-grow py-6 px-12 rounded-lg">
        <Board/>
      </main>
      <footer-nav class="footer"></footer-nav>
    </div>
  </div>
</template>
<script>
import FooterNav from  "@/components/laravue_example/layout/footer/FooterNav";
import LeftSidebar from  "@/components/laravue_example/layout/sidebar/LeftSidebar";
import Board from '@/components/laravue_example/example/trello/Board'
export default {
  components: {
    FooterNav,
    LeftSidebar, 
    Board
  }
}
</script>