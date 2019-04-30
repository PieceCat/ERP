import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    url: '',
    linkData: {}
}

const getters = {
    isShow(state) {
        return state.url
    },
    getChangedNum() {
        return state.url
    }
};

const mutations = {
    showLinkdetail(state, data) {
        state.data = data
    }
}
const store = new Vuex.Store({
    state,
    mutations
})

export default store;