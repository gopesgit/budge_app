import { arrayRemove, arrayUnion, doc, getFirestore, updateDoc } from "firebase/firestore";
import { firebaseapp } from "../firebase/configurFirebase";
import { formatDate } from "./commonFunction";

const db = getFirestore(firebaseapp)
export const addExpense = async (data, id, getUserData) => {
  //console.log(data);
  //const index=expens.length
  try {
    const userRef = doc(db, 'User', id)
    await updateDoc(userRef, {
      expenses: arrayUnion(data), //     
    })
  } catch (error) {
    console.log("Error", error);
  }
  getUserData()

}
export const delExpense = async (data, id, getUserData) => {
  //console.log({data,id});
  //const index=expens.length
  try {
    const userRef = doc(db, 'User', id)
    await updateDoc(userRef, {
      expenses: arrayRemove(data), //     
    })
  } catch (error) {
    console.log("Error", error);
  }
  getUserData()
}
export const addFund=async (data,id,getUserData)=>{
  //console.log({data,id});
  //const index=expens.length
  const funddata={fundname:data.fundname,fundtype:data.fundtype}
  const fundinit={
    expense_type:"Opening Blance",
    date:formatDate(new Date()),
    description:"Opening Blance",
    ammout:data.initval,           
    debit_by:null,
    credit_to:data.fundname 
  }
  try {
      const userRef = doc(db, 'User',id)
      await updateDoc(userRef, {
        funds:arrayUnion(funddata), 
        expenses: arrayUnion(fundinit),      
      })
    } catch (error) {
      console.log("Error", error);
    }
    getUserData()
    
  }