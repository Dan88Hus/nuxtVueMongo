


export const mutations = {
  setItems(state, { resource, items }) {
    // debugger

    state[resource].items = items
    // debugger
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    //this function is called on server before component is rendered
    // Use fetch/asyncData when a specific page is accessed and you need to fill the vuex store (or the page data object) for this page specifically. nuxtServerInit: it is used to fetch some data you work with a lot (such as userInfo in the session), only once, then you can use it in all the components.
    await dispatch('auth/getAuthUser').catch(() => console.log('Not Authenticated!'))
    // await dispatch('hero/fetchHero').catch(() => console.log('Cannot fetch page data'))
  }
}
