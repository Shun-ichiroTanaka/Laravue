import Vue from "vue";
import Vuex from "vuex";
// import T
// trello from './laravue_example/trello';

Vue.use(Vuex);

// export default new Vuex.Store({
//   laravue_example: {
//     Trello
//   },
// });

const savedLists = localStorage.getItem('trello-lists');

if (localStorage.getItem('trello-lists')) {
  try {
      this.savedLists = JSON.parse(localStorage.getItem('trello-lists'));
  } catch(e) {
      localStorage.removeItem('trello-lists');
  }
}


const store =  new Vuex.Store({

  // アプリケーション全体のデータの状態を管理
  // 現在のデータの状態を確認したり、特定のデータの状態を見つけるために役立つ
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      }
    ],
  },

  // stateの更新だけを行う. 更新が行えるのはmutationsだけ
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload)
    },
    updateList(context, payload) {
      context.commit('updateList', payload)
    }
  },

  // stateの値を算出したものを返す場合に役立つ(Vueのcomputedと同様の動き)
  // 値がキャシュされ、そのgettersが依存しているstateが更新されない限り再評価しない
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store