<template>
	<div id="Header">
		<header>
			<div class="header">
				<div class="logo">
				</div>
        <div class="nav">
          <a href="./page/reactDemo.html" class="nav-item item-activity">首页</a>
          <a href="./page/reactDemo.html" class="nav-item">前端</a>
          <a href="./page/reactDemo.html" class="nav-item">后端</a>
          <a href="./page/reactDemo.html" class="nav-item">服务器</a>
          <a href="./page/reactDemo.html" class="nav-item">工具</a>
          <a href="./page/reactDemo.html" class="nav-item">实验室</a>
        </div>
			</div>
		</header>
	</div>
</template>
<script>
export default {
	name: 'Header'
}
</script>
<style lang="less" scope>
@import "../ui/Header.less";
#Header{
	width:100%;
}
</style>
