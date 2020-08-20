<template>
  <div class="main w-full flex lg:pl-8 overflow-y-scroll">
    <LeftSidebar class="lg:w-1/6"></LeftSidebar>

    <div
      class="container-bg lg:w-5/6 overflow-x-hidden scroll-none flex flex-col lg:mx-4"
    >
      <div class="w-full flex">
        <main class="lg:w-4/5 main-bg flex-grow py-6 px-12 rounded-lg">
          <h1 class="text-3xl pb-6">Profile</h1>
          <div class="">
            <HeaderProfile></HeaderProfile>

            <CodeView>
              <iframe
                src="https://codesandbox.io/embed/9owjzmoj24?fontsize=14&hidenavigation=1&theme=dark"
                style="
                  width: 100%;
                  height: 500px;
                  border: 0;
                  border-radius: 4px;
                  overflow: hidden;
                "
                title="Modal Sample"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            </CodeView>
          </div>
        </main>

        <div class="lg:w-1/5 py-6 px-4 break-words">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </div>
      <FooterNav class="footer"></FooterNav>
    </div>
  </div>
</template>
<script>
import HeaderProfile from '@/components/laravue_example/object/profile/HeaderProfile';
import CodeView from '@/components/laravue_example/object/button/CodeView';
import FooterNav from '@/components/laravue_example/layout/footer/FooterNav';
import LeftSidebar from '@/components/laravue_example/layout/sidebar/LeftSidebar';

export default {
  components: {
    HeaderProfile,
    CodeView,
    FooterNav,
    LeftSidebar
  }
};
</script>
<style lang="scss" scoped></style>
