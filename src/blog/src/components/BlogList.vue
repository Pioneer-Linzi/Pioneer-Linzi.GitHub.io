<template>
  <div id="blog-list">
    <v-item v-for="(item,key) in blogList" v-bind:key="key" :classify="item" :itemkey=key>
    </v-item>
  </div>
</template>

<script>
/* eslint-disable no-mixed-spaces-and-tabs */
import Item from './Item'

export default {
	name: 'blog-list',
	components: {
	  'v-item': Item
	},
	computed: {
		blogList: function () {
			// let blogs = this.$store.state.blog.blogs['backend'][0]['content']
			// const res = api.parseMarkDown(blogs)
			return this.$store.state.blog.blogs['backend']
		}
	},
	watch: {

	}
}
</script>
<style scoped>
  #blog-list{
    margin-left:16px;
    width:660px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>
