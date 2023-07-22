import {useState, createContext} from "react";


export const AuthContext = createContext({
    authUser: null, setAuthUser: () => {
    }
})


function AuthContextProvider({children}) {
    const [authUser, setAuthUser] = useState(null);

    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
    )

}

export default AuthContextProvider