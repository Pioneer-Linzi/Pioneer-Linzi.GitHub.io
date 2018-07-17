<template>
  <div id="Content" class="content">
    <div class="markdown-body" v-html="renderedMarkdown">
    </div>
  </div>
</template>
<script>
/* eslint-disable no-mixed-spaces-and-tabs */
export default {
	name: 'Content',
	data: function () {
		return {
			renderedMarkdown: ''
		}
	},
	created () {
	  let data = this.$store.state.blog.blogs['backend'][0]['content']
		console.log(data)
		console.log(2)
		this.$http.post('https://api.github.com/markdown', {text: data, mode: 'gfm'}).then(function (response) {
			// success callback
			this.renderedMarkdown = response.data
		}, function (response) {
			// error callback
			console.log(response.data)
		})
	},
	computed: {
	}
}
</script>
<style lang="less" scope>
  @import "../ui/Content.less";

  #Content {
    width: 660px;
    margin-top: 10px;
    margin-left: 16px;
    clear:both;
  }
  .markdown-body{
    text-align: left;
    margin:20px;
  }
</style>
