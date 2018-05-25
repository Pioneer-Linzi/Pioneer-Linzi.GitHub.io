<template>
  <div id="Content" class="content">
    <article class="markdown-body">
      {{renderedMarkdown}}
    </article>
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
		this.$http({
			url: 'https://api.github.com/markdown',
			method: 'POST',
			data: {text: data, mode: 'gfm'}
		}).then(function (response) {
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
    height: 500px;
    margin-top: 10px;
    margin-left: 16px;
  }
</style>
