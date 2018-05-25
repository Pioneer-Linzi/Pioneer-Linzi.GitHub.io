<template>
  <div id="blog-list">
    <!--<v-item v-for="item in blogList" v-bind:key="item.createTime">-->
      <!--{{item.title}}-->
    <!--</v-item>-->
    <p v-for="(item,key) in blogList" v-bind:key="key">
      {{blogItem(key)}}
    </p>
  </div>
</template>

<script>
/* eslint-disable no-mixed-spaces-and-tabs */
import Item from './Item'
import api from '../api/api'
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
	methods: {
		blogItem: function (key) {
			let blogs = this.$store.state.blog.blogs['backend'][key]['content']
			const res = api.parseMarkDown(blogs)
			console.log(res)
			return res.data
		}
	}
}
</script>
<style scoped>
  #blog-list{
    width:600px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>
