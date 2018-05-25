<template>
  <div class="blog-item">
    {{content}}
  </div>
</template>

<script>
import api from '../api/api'
export default {
	data () {
		return {
			content: ''
		}
	},
	name: 'item',
	methods: {
		blogItem: async function (key) {
			let blogs = this.$store.state.blog.blogs['backend'][key]['content']
			const res = await api.parseMarkDown(blogs)
			this.data.content = res.data
		}
	},
	created () {
		this.blogItem()
	}
}
</script>

<style scoped>
  .blog-item{
    width: 660px;
    margin-top: 10px;
    margin-left: 16px;
    clear:both;
    height:300px;
  }

</style>
