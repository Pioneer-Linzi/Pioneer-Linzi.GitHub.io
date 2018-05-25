/* eslint-disable no-unused-vars */
import Vue from 'vue'

const api = {
	parseMarkDown: function (data) {
		return Vue.http.post('https://api.github.com/markdown', {text: data, mode: 'gfm'})
	}
}
export default api
