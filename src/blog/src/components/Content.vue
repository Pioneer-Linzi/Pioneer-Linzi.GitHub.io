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
		}
	},
	components: {
		VueMarkdown
	},
	created () {
		console.log(this.$store.state.blog)
		this.setData()
	},
	computed: {
		source: function () {
		  return this.$store.state.blog.blogs['backend'][0]['content']
		}
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
