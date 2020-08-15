<!-- =========================================================================================
    File Name: Loading.vue
    Description:ローディング画面のコンポーネント
========================================================================================== -->
<template>
  <div v-show="loading" class="container z-10">
    <div class="box--container">
      <div class="box box--1">
        <div class="circle circle--1 z-50"></div>
      </div>

      <div class="box box--2">
        <div class="circle circle--2 z-50"></div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss" scoped>
.bg {
  // background:#000;
  }
.container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	height: 100vh;
  background-color: #1F2225 !important;
	display: flex;
	justify-content: center;
	align-items: center;
  background: transparent;
}

.container .box--container {
	width: 50%;
	height: 80%;
	display: grid;
	grid-template-rows: 1fr 1fr;
	animation: rotate 1s ease infinite;
}
.container .box--container .box {
	/* background: #fff; */
	/* overflow: hidden; */
	position: relative;
}
.container .box--container .box .circle {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 50px;
	width: 50px;
	background: #222;
	border-radius: 50%;
}
.container .box--container .box .circle--1 {
	animation: circle--1 ease 5s infinite;
  background: #01b6ad;
	/* animation: rotate 1s ease infinite; */
}
.container .box--container .box .circle--2 {
	background: #fff;
	animation: circle--2 ease 5s infinite;
}
@keyframes circle--1 {
	0% {
		top: 50%;
	}
	50% {
		top: 120%;
	}
	100% {
		top: 50%;
	}
}
@keyframes circle--2 {
	0% {
		top: 50%;
	}
	50% {
		top: -50%;
	}
	100% {
		top: 50%;
	}
}

@keyframes rotate {
	to {
		transform: rotate(360deg);
	}
}
</style>