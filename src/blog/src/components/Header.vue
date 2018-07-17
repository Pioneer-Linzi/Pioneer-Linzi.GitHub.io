<template>
	<div id="Header">
		<header>
			<div class="header">
				<div class="logo">
				</div>
        <div class="nav">
          <router-link to="/" class="nav-item item-activity">首页</router-link>
          <router-link to="/blogList" class="nav-item " v-for="(value ,key) in navList" v-bind:key="key" >{{key}}</router-link>
          <!--<a href="./page/reactDemo.html"  class="nav-item"  v-for="(value ,key) in navList" v-bind:key="key" >{{key}}</a>-->
          <a href="./page/reactDemo.html" class="nav-item">工具</a>
          <a href="./page/reactDemo.html" class="nav-item">实验室</a>
        </div>
			</div>
		</header>
	</div>
</template>
<script>
/* eslint-disable no-mixed-spaces-and-tabs */
export default {
	name: 'Header',
	computed: {
	  navList: function () {
	    return this.$store.state.blog.blogs
		}
	}
}
</script>
<style lang="less" scope>
@import "../ui/Header.less";
#Header{
	width:100%;
}
</style>
