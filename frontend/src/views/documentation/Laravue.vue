<template>
  <div>
    <lv-h1>What is Laravue?</lv-h1>
    <div class="">
      <div class="w-full h-full laravue-img mx-auto my-16">
        <img src="@/assets/images/laravue.svg" alt="" class="mx-auto" />
      </div>

      <div class="my-24">
        <lv-h2>Overview</lv-h2>
        <p class="mb-4">
          Laravueとは、PHPフレームワークであるLaravelとJavascriptフレームワークであるVue.jsを用いた
          フロントエンド開発を想定した強力なテンプレートキットです。
        </p>
      </div>

      <div class="my-24">
        <lv-h2>Feature</lv-h2>
        <div class="">
          <p class="mb-4">
            BackendとFrontendを完全に切り分けた構成となっていることにより、
            LaravelプロジェクトだけでなくRuby on Railsプロジェクトや
            純粋なVue.jsプロジェクトとしても採用することができます。
          </p>
        </div>
      </div>

      <div class="my-24">
        <lv-h2>Development environment</lv-h2>

        <div class="">
          <p class="mb-4">
            ・Docker --- Apache, MySQL
          </p>
          <p class="mb-4">・Backend --- Laravel API<br /></p>
          <p class="mb-4">・Frontend --- Vue CLI<br /></p>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>
<script>
  import LvH1 from "@/components/object/text/LvH1";
  import LvH2 from "@/components/object/text/LvH2";

  export default {
    name: "Laravue",
    components: {
      LvH1,
      LvH2,
    },
  };
</script>
<style lang="scss" scoped>
  .laravue-img {
    img {
      max-width: 300px;
    }
  }
</style>
