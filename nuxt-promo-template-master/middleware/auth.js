
export default function({store, redirect}) {
    const isAuth = store.getters["auth/isAuthenticated"]
    if(!isAuth){
        return redirect("/notauthenticated")
    }
    if(isAuth){
        console.log("isAuth middleware")
    }
};

