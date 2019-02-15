import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as types from './mutation-types';

const savedLists = localStorage.getItem('nonainkaigi-lists');

const state = {
  lists: savedLists ? JSON.parse(savedLists) : [
    {
      title: 'Keys',
      cards: [
        { body: 'matter 01' },
        { body: 'matter 02' },
        { body: 'matter 03' }
      ]
    },
    {
      title: 'What',
      cards: [
        { body: 'hoge' },
        { body: 'hogehoge' },
      ]
    },
    {
      title: 'Why',
      cards: []
    },
    {
      title: 'When',
      cards: []
    },
    {
      title: 'Where',
      cards: []
    },
    {
      title: 'Who',
      cards: []
    },
    {
      title: 'How',
      cards: []
    },
  ]
};

const mutations = {
  [types.ADD_LIST](state, { title }) {
    state.lists.push({ title, cards: [] });
  },
  [types.REMOVE_LIST](state, { listIndex }) {
    state.lists.splice(listIndex, listIndex);
  },
  [types.ADD_CARD_TO_LIST](state, { to, body }) {
    state.lists[to].cards.push({ body });
  },
  [types.REMOVE_CARD_FROM_LIST](state, { from, cardIndex }) {
    state.lists[from].cards.splice(cardIndex, 1);
  },
  [types.MOVE_CARD_TO_LIST](state, { from, to }) {
    const targetCard = state.lists[from.listIndex].cards[from.cardIndex];
    state.lists[from.listIndex].cards.splice(from.cardIndex, 1);
    if (to.cardIndex !== null) {
      state.lists[to.listIndex].cards.splice(to.cardIndex, 0, targetCard);
    } else {
      state.lists[to.listIndex].cards.push(targetCard);
    }
  },
};

const getters = {
  listsCount: (state) => state.lists.length
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
});

store.subscribe((mutation, { lists }) => {
  localStorage.setItem('nonainkaigi-lists', JSON.stringify(lists));
});

export default store;

// document.querySelector(".delete").onclick = function() {
//   alert();
// localStorage.clear();
// };
