export const state = () => ({
    user: null
})

export const getters = { //getters are function to access state
    authUser(state) {
        console.log("authUser", state)
        return state.user || null 
    },
    isAuthenticated(state){
        console.log("isAuthenticated ")
        console.log(state)
        return !!state.user // if(state.user) {return true} else{ return false}

    },
    isAdmin(state){
        console.log("isAdmin")
        console.log(state)

        return state.user && state.user.role && state.user.role === "admin"
    }
}

export const mutations = {
    setAuthUser(state, user){
        // console.log("setAuthUset")
        // console.log(user)
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
    },
    register(context, registerData){// if arg required but will not be used, _ is helpfull istead of arg
        return this.$axios.$post("/api/v1/users/register", registerData)
        .catch(error => Promise.reject(error))
    },
    logout({commit}){
        this.$axios.$post("/api/v1/users/logout")
        .then(()=>{
            commit("setAuth", null)
            return true
        })
        .catch((error)=>{
            return Promise.reject(error)
        })
    },
    getAuthUser({commit, getters}){
        const authUser = getters.authUser
        if(authUser){
            return Promise.resolve(authUser)
        }
        return this.$axios.$get("/api/v1/users/me")
        .then(()=>{
            commit("setAuthUser", user)
            return state.user
        })
        .catch((err)=>{
            commit("setAuthUser", null)
            // console.log(err)
            return Promise.reject(err)
        })

    }
}