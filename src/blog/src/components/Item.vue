<template>
  <div class="blog-item" >
    <div class="content markdown-body" v-html="content">
    </div>
  </div>
</template>

<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import api from '../api/api'
export default {
	data: function () {
		return {
		  content: ''
		}
	},
	props: ['itemkey', 'classify'],
	name: 'item',
	methods: {
		blogItem: async function () {
		  if (this.classify) {
				const res = await api.parseMarkDown(this.classify.content)
				this.content = res.data
			}
		}
	},
	created () {
		this.blogItem()
	}
}
</script>

<style lang="less" scoped>
  .blog-item{
    width: 100%;
    margin-top: 10px;
    clear:both;
    height:300px;
    text-align: left;
    background : rgba(255, 255, 255, 1);
    border-radius : 2px;
    -moz-border-radius : 2px;
    -webkit-border-radius : 2px;
    box-shadow : 0px 1px 3px rgba(26, 26, 26, 0.1);
    filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=0, OffY=1, Color='#1A1A1A');
    .content{
      margin:20px;
      overflow: hidden;
    }
  }

</style>
