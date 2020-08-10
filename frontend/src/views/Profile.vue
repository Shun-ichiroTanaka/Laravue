<template>
  <div>
    <h1 class="text-3xl  pb-6">Profile</h1>

    <div class="">
      <header-profile></header-profile>

      <code-view>
        <iframe
          src="https://codesandbox.io/embed/9owjzmoj24?fontsize=14&hidenavigation=1&theme=dark"
          style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          title="Modal Sample"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </code-view>
    </div>
  </div>
</template>
<script>
  import HeaderProfile from "@/components/object/profile/HeaderProfile";
  import CodeView from "@/components/object/button/CodeView";
  export default {
    components: {
      HeaderProfile,
      CodeView,
    },
  };
</script>
<style lang="scss" scoped></style>
