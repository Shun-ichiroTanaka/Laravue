<template>
  <div>
    <div class="">
          <div class="w-full h-full laravue-img mx-auto mb-24">
          <img src="@/assets/images/laravue.svg" alt="" class="mx-auto" />
      </div>

      <div class="w-full h-full laravue-img mx-auto mb-24">
        <div class="lv-box rounded-lg p-6">
          <p >
            Laravueとは、PHPフレームワークであるLaravelとJavascriptフレームワークであるVue.jsを用いた
            フロントエンド開発を想定した強力なテンプレートキットです。
          </p>
        </div>
      </div>

      <div class="mb-24">
        <lv-h2>Feature</lv-h2>
        <div class="lv-box rounded-lg p-6">
          <p class="">
            BackendとFrontendを完全に切り分けた構成となっていることにより、
            LaravelプロジェクトだけでなくRuby on Railsプロジェクトや
            純粋なVue.jsプロジェクトとしても採用することができます。
          </p>
        </div>
      </div>

      <div class="mb-24">
        <lv-h2>Development environment</lv-h2>

        <div class="lv-box rounded-lg p-6">
          <p class="mb-4">
            ・Docker --- Apache, MySQL
          </p>
          <p class="mb-4">・Backend --- Laravel API<br /></p>
          <p class="">・Frontend --- Vue CLI<br /></p>
        </div>
      </div>
      <p></p>
    </div>
        <scroll-top></scroll-top>

  </div>
</template>
<script>
  import LvH2 from  "@/components/laravue_template/object/text/LvH2";
import ScrollTop from  "@/components/laravue_template/object/button/ScrollTop"

  export default {
    name: "Laravue",
    components: {
      LvH2,
            ScrollTop

    },
  };
</script>
<style lang="scss" scoped>
  .laravue-img {
    img {
      max-width: 300px;
    }
  }

  .lv-box {
    background: white;
  }
  .dark {
    .lv-box {
      background: transparent;
    }
  }
</style>
