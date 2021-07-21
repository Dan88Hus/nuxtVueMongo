


export const mutations = {
  setItems(state, {resource, items}) {
    // debugger
    
    state[resource].items = items
    // debugger
  }
}

// export const actions = {
//   async nuxtServerInit({commit, dispatch}) {
//     await dispatch('auth/getAuthUser').catch(() => console.log('Not Authenticated!'))
//     await dispatch('hero/fetchHero').catch(() => console.log('Cannot fetch page data'))
//   }
// }
