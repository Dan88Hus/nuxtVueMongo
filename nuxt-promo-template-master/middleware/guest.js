
export default function({store, redirect}) {
    // console.log("store", store)
    const isAuth = store.getters["auth/isAuthenticated"]
    if(isAuth){
        return redirect("/")
    }

    
};

