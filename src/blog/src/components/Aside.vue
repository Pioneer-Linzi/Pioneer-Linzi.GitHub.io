<template>
	<div id="Aside" class='aside'>
    <div class="aside-header">

    </div>
	</div>
</template>
<script>
export default {
	name: 'Aside'
}
</script>
<style lang="less" scope>
@import "../ui/Aside.less";
#Aside{
  width:300px;
  height:351px;
  margin-top:10px;
  margin-right:16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .aside-header{
    position: absolute;
    left:0px;
    right:0px;
    margin:auto;
    top:28px;
    width:138px;
    height:138px;
  }
}
</style>
