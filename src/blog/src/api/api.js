/* eslint-disable no-unused-vars */
import Vue from 'vue'

const api = {
	parseMarkDown: async function (data) {
		let param
		param = {
			method: 'post',
			headers: {
				'Accept': 'application/json;charset=UTF-8'
			},
			data: {text: data, mode: 'gfm'}
		}
		let res = await fetch('https://api.github.com/markdown', param)
		return res.json()
	}
}
export default api
