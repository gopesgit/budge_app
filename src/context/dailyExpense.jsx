import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";
import { firebaseapp } from "../firebase/configurFirebase";
import { AuthContext } from "./authContex";
export const DaliyExpenseContext=createContext("")
export const DaliyExpenseProvide=({children})=>{
    const [expenseType,setExpenseType]=useState()
    const [incomeType,setIncomeType]=useState()
    const [fundType, setfundType] = useState()
    const [expens,setExpense]=useState();
    const [userData,setUserData]=useState();
    const {user}=useContext(AuthContext);
    const db=getFirestore(firebaseapp)
    useEffect(()=>{
        //console.log("Use Effect",user);
        getExpenseTypeList()
        getIncomeTypeList()
        getUserData()
    },[])
    const getExpenseTypeList=async ()=>{
        //console.log("Inside getExpense List");
        try {
            const expenseRef=await collection(db,"expenseTypes")
            const q = await query(expenseRef, orderBy("label","asc"))
            const querySnapdhot = await getDocs(q)
            if (!querySnapdhot.empty) {
                setExpenseType([])
                const expenseItem=querySnapdhot.docs.map(doc => ({ id: doc.id, ...doc.data() }))  
                setExpenseType(expenseItem);        
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getIncomeTypeList=async ()=>{
        //console.log("Inside getExpense List");
        try {
            const expenseRef=await collection(db,"incomeTypes")
            const q = await query(expenseRef, orderBy("label","asc"))
            const querySnapdhot = await getDocs(q)
            if (!querySnapdhot.empty) {
                setIncomeType([])
                const expenseItem=querySnapdhot.docs.map(doc => ({ id: doc.id, ...doc.data() }))  
                setIncomeType(expenseItem);        
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getUserData=async ()=>{
        try {
            const expenseRef=await collection(db,"User")
            const q = await query(expenseRef, where("userId","==",user.userId))
            const querySnapdhot = await getDocs(q)
            if (!querySnapdhot.empty) {
                setfundType([])
                setExpense([])
                setUserData()
                const userdata=querySnapdhot.docs.map(doc => ({ id: doc.id, ...doc.data() }))  
                //console.log("gg",userdata[0]);
                const expenseItem=userdata[0].expenses
                //console.log("gg",expenseItem);
                const fundItem=userdata[0].funds;
                setUserData(userdata[0])
                setfundType(fundItem)
                setExpense(expenseItem)        
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <DaliyExpenseContext.Provider value={{expenseType,fundType,expens,userData,getUserData,incomeType}}>
            {children}                                                                                          
        </DaliyExpenseContext.Provider>
    )
}