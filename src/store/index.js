import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    url:''
}

const getters = {   
    isShow(state) {  
       return state.url
    },
    getChangedNum(){  
       return state.url
    }
};

const mutations = {
    changeUrl(data){
        url = data;
    }
}
const store = new Vuex.Store({
    state,
    mutations
})

export default store;