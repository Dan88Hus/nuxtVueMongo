export const state = () => ({
    user: null
})

export const getters = { //getters are function to access state
    authUser(state) {
        return state.user || null 
    },
    isAuthenticated(state){
        return !!state.user // if(state.user) {return true} else{ return false}

    },
    isAdmin(state){
        return state.user && state.user.role && state.user.role === "admin"
    }
}

export const mutations = {
    setAuthUser(state, user){
        console.log("setAuthUset")
        console.log(user)
        state.user = user
    }
}

export const actions = {
    login({ commit, state }, loginData) {
        // debugger
        return this.$axios.$post('/api/v1/users/login', loginData)
        .then((user)=>{
            console.log("fetched users")
            // debugger
            commit('setAuthUser', user)
            return state.user
        })
        .catch((err)=>{
            return Promise.reject(err)
        })
    }
}