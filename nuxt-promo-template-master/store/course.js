


export const state = () => ({
  items: [],
})

export const actions = {
  fetchCourses({commit}) {
    
    return this.$axios.$get('/api/v1/products')
    .then(courses => {
        // debugger
        
        commit('setItems', {resource: 'course', items: courses}, {root: true})
        return state.items
      }) // setItems commit name and its wriiten in store/index,js but we have not immorted as no need it for vuex bunun icin root:true dedik
  },

  // fetchCourseBySlug({commit, state}, courseSlug) {
  //   return this.$axios.$get(`/api/v1/products/s/${courseSlug}`)
  //     .then(course => {
  //       commit('setCourse', course)
  //       return state.course
  //     })
  //     .catch(error => Promise.reject(error))
  // }
}

// export const mutations = {
//   setCourse(state, course) {
//     state.item = course
//   }
// }


