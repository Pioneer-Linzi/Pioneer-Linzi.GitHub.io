<template>
	<div id="app">
		<v-header>
		</v-header>
	</div>
</template>

<script>
import Header from './components/Header'
export default {
	name: 'App',
	components: {
		'v-header': Header
	}
}
</script>

<style lang="less">
@import 'normalize.css/normalize.css';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
