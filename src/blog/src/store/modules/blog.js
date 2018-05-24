import data from '../../../static/data'
// initial state
// shape: [{ id, quantity }]
const state = {
	blogs: data
}

// getters
const getters = {
	getBlog: state => state.data
}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
	state,
	getters,
	actions,
	mutations
}
