<template>
	<div id="main">
		<v-content></v-content>
		<v-aside></v-aside>
	</div>
</template>
<script>
import Aside from './Aside'
import Content from './Content'
export default {
	name: 'Main',
	components: {
		'v-aside': Aside,
		'v-content': Content
	}
}
</script>
<style lang="less" scope>
@import "../ui/Main.less";
#main{
	width:100%;
	display: flex;
	justify-content: space-between;
}
</style>
