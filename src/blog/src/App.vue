<template>
	<div id="app">
		<v-header>
		</v-header>
		<div class="blog-main">
		<v-main>
		</v-main>
		</div>
	</div>
</template>
<script>
import Header from './components/Header'
import Main from './components/Main'
export default {
	name: 'App',
	components: {
		'v-header': Header,
		'v-main': Main
	}
}
</script>
<style lang="less">
@import 'normalize.css/normalize.css';
*{
  font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
}
body{
	color: #2c3e50;
	background : rgba(225, 225, 225, 1);
	display: flex;
	justify-content: center;
}
#app {
	width:100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
.blog-main{
	width:1000px;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
}
</style>
