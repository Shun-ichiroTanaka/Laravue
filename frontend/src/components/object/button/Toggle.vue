<template>
  <div>
    <label for="time"></label>
    <div class="toggle-btn" id="toggle-btn">
      <input
        type="checkbox"
        @change="$emit('toggle')"
        :checked="mode === 'dark' ? 'checked' : false"
      />
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["mode"],
  };
</script>
<style lang="scss" scoped>
  body {
    margin: 0px;
    background-color: #f8f8f8;
  }

  h1 {
    font-family: Segoe UI;
    text-align: center;
    line-height: 42px;
    padding-bottom: 23px;
    margin: 10px 0px;
    border-bottom: 1px solid #dadada;
  }

  #hash-symbol {
    color: #484848;
    font-size: 42px;
    position: relative;
    top: 4px;
  }

  #app-name {
    color: #f19000;
  }

  section {
    width: 250px;
    margin: 100px auto;
    padding: 60px;
    background-color: #fff;
    border-radius: 35px;
  }

  .toggle-btn {
    position: relative;
    width: 70px;
    height: 30px;
    margin: 0 auto;
    border-radius: 40px;
  }

  input[type="checkbox"] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #toggle-btn span {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    opacity: 1;
    background-color: #f2f4f5;
    border-radius: 40px;
    transition: 0.2s ease background-color, 0.2s ease opacity;
  }

  #toggle-btn span:before,
  #toggle-btn span:after {
    content: "";
    position: absolute;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  #toggle-btn span:before {
    background-color: #f2f4f5;
    transform: translate(-42px, 0px);
    z-index: 1;
  }

  #toggle-btn span:after {
    background-color: #01b6ad;
    transform: translate(8px, 0px);
    z-index: 0;
  }

  #toggle-btn input[type="checkbox"]:checked + span {
    background-color: #000;
  }

  #toggle-btn input[type="checkbox"]:active + span {
    opacity: 0.5;
  }

  #toggle-btn input[type="checkbox"]:checked + span:before {
    background-color: #000;
    transform: translate(36px, -7px);
  }

  #toggle-btn input[type="checkbox"]:checked + span:after {
    background-color: #fff;
    transform: translate(42px, 0px);
  }
</style>
