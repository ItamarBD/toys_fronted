import Vue from 'vue'
import Vuex from 'vuex'
// import toyService from './../services/toy-service.js'
import ToyService from '../services/ToyService.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: 'itamar',
    toys: [],
    currToy: null
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    setToys(state, payload) {
    console.log('333333333333');
      console.log('set toys payload', payload)
      state.toys = payload.toys;
    },
    setToy(state, {toy}) {
      console.log('curr toy', this.state.currToy)
      state.currToy = toy;
    }
  },
  actions: {
    setName(context, user) {
      context.commit('updateUser', user)
    },
    loadToys(context) {
    console.log('2222222222222');
      return ToyService.query()
        .then(toys => {
          context.commit({type: 'setToys', toys})
          console.log('loadToys (store)', toys)
        })
    },
    loadToy(context, {toyId}){
      return ToyService.getById(toyId)
      .then(toy => {
        console.log('toyId555d',toy)
          context.commit({type: 'setToy', toy})
        })
    }
  },

  getters: {
    getName(state) {
      console.log('state',state)
      return state.user
    },
    getToysForShow(state){
      return state.toys
    }
  }
})
