import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      avatarUrl: '',
      name: '',
      score: 0,
    },
    clothes: [{
      id: 0,
      mainImage: '',
      isNew: Boolean,
      price: 0,
      title: '',
      sizes: [],
    }],
    accesses: [{
      id: 0,
      mainImage: '',
      isNew: Boolean,
      price: 0,
      title: '',
      sizes: [],
    }],
    searchStr: '',
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },
    updateClothesData(state, response) {
      state.clothes = response;
    },
    updateAccessesData(state, response) {
      state.accesses = response;
    },
    setSearchStr(state, newSearchStr) {
      state.searchStr = newSearchStr;
    },
  },
  actions: {
    fetchUserInfo(
      { commit },
    ) {
      axios.get('templates/7ZW3y5GAuIge/data')
        .then(({ data }) => {
          if (data && Object.keys(data).length) {
            commit('updateUserInfo', data);
          }
        });
    },
    fetchClothesData(
      { commit },
    ) {
      axios.get('templates/-_RLsEGjof6i/data')
        .then(({ data }) => {
          if (data && Object.keys(data).length) {
            commit('updateClothesData', data);
          }
        });
    },
    fetchAccessesData(
      { commit },
    ) {
      axios.get('templates/q3OPxRyEcPvP/data')
        .then(({ data }) => {
          if (data && Object.keys(data).length) {
            commit('updateAccessesData', data);
          }
        });
    },
    fetchSearch({ commit }) {
      commit('setSearchStr');
    },
  },
  modules: {
  },
});
