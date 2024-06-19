import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext("")
export const AuthProvider = ({ children }) => {
    //define auth state
    const [user, setUser] = useState({ name: null, email: null, password: null, })
    useEffect(() => {
        getLocalStorageData()
    }, [])
    const getLocalStorageData = async () => {
        let data = await AsyncStorage.getItem('auth')
        let logindata = JSON.parse(data)
        if (logindata) {
            setUser(logindata)
            //getUserRoutineData(logindata)
        }
    }
    return (<AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>)

}