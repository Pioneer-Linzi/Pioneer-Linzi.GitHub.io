import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content'
import BlogList from '../components/BlogList'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', component: Content },
		{path: '/blogList', component: BlogList}
	]
})
