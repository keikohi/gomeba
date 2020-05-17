import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      width: 800,
      svg: null,
      packageList: [],
      packageTree: `{ "name":"now laoding", "showName": "now loading","childs": []}`,
      showPackages: []
    },
    mutations: {
      updateWidth(state, width) {
        state.width = width;
      },
      setSVGDOM(state, svg){
        state.svg = svg
      },
      setPackageList(state, list){
        state.packageList = list
      },
      setPackageTree(state, tree){
        state.packageTree = tree
      },
      addShowPackages(state, packageName){
        if(state.showPackages.includes(packageName)){
          return 
        }
        state.showPackages.push(packageName)
      },
      removeShowPackages(state, packageName){
        state.showPackages = state.showPackages.filter(e => e !== packageName)
        console.log(state.showPackages);
        
      }
    },
    getters:{
      width(state){
        return state.width
      },
      svg(state){
        return state.svg
      },
      packageList(state){
        return state.packageList
      },
      packageTree(state){
        return state.packageTree
      },
      showPackages(state){
        return state.showPackages
      }
    },
    actions: {

    }
  })