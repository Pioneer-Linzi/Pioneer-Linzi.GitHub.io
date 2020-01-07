//@ts-ignore
import loadable from "@loadable/component";
import Loading from "./components/Loading";
import React = require('react');
export default [
	{
		path: '/',
		exact: true,
		component: loadable(()=>import('./pages/css/index'), { fallback: <Loading></Loading>}), // 组件需要你自己准备
		name: 'css', // 自定义属性
		title: 'css' // 自定义属性
	},{
		path: '/scss',
		exact: true,
		component: loadable(()=> import('./pages/scss/index'), {fallback: <Loading></Loading>}),
		name: 'scss',
		title: 'scss'
	},
	{
		path: '/tank',
		exact: true,
		component: loadable(()=>import('./game/tank/Panel'), { fallback: <Loading></Loading>}), // 组件需要你自己准备
			name: 'tank',
		title: 'tank'
	},
	// 404 Not Found
	{
		path: '*',
		exact: true,
		component: loadable(()=>import('./pages/css/index'), { fallback: <Loading></Loading>}), // 组件需要你自己准备
			name: '404',
		title: '404'
	}
];
