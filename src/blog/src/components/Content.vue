<template>
  <div id="Content" class="content">
    <vue-markdown :source="source">
    </vue-markdown>
  </div>
</template>
<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import VueMarkdown from 'vue-markdown'
export default {
	name: 'Content',
	data () {
	 return {
	    source: ''
		}
	},
	components: {
		VueMarkdown
	}
}
</script>
<style lang="less" scope>
  @import "../ui/Content.less";

  #Content {
    width: 660px;
    height: 500px;
    margin-top: 10px;
    margin-left: 16px;
  }
</style>
