export const state = () => ({
    user: null
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    setAuthUser(state, user){
        state.user = user
    }
}

export const actions = {
    login({ commit }, loginData) {
        debugger
        return this.$axios.$post("/api/v1/users/login", loginData)
        .then((user)=>{
            console.log("fetched users")
            debugger
            commit('setAuthUser', user)
        })
        .catch((err)=>{
            return Promise.reject(err)
        })
    }
}