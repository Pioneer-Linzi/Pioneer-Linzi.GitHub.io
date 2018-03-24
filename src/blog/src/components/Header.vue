<template>
	<div id="Header">
		<a href="./page/reactDemo.html">reactDemo</a>
		<img src="./assets/logo.png">
		<router-view/>
	</div>
</template>
<script>
	export default {
		name: ''
	}
</script>
<style lang="less">
@import "ui/test.less";
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
