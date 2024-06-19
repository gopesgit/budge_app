import { getDocs, arrayRemove, arrayUnion, collection, doc, getFirestore, query, updateDoc, where, addDoc } from "firebase/firestore";
import { firebaseapp } from "../firebase/configurFirebase";
import { formatDate } from "./commonFunction";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
export const addFund = async (data, id, getUserData) => {
  //console.log({data,id});
  //const index=expens.length
  const funddata = { fundname: data.fundname, fundtype: data.fundtype }
  const fundinit = {
    expense_type: "Opening Blance",
    date: formatDate(new Date()),
    description: "Opening Blance",
    ammout: data.initval,
    debit_by: null,
    credit_to: data.fundname
  }
  try {
    const userRef = doc(db, 'User', id)
    await updateDoc(userRef, {
      funds: arrayUnion(funddata),
      expenses: arrayUnion(fundinit),
    })
  } catch (error) {
    console.log("Error", error);
  }
  getUserData()
}
export const login = async (data) => {
  //console.log(data);     
  try {
    const userRef = await collection(db, "User")
    const q = await query(userRef, where("userId", "==", data.email), where("password", "==", data.password))
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      await AsyncStorage.setItem('auth', JSON.stringify(userData[0]))
      data.setUser(userData[0])
    }
  } catch (error) {
    console.log(error);

  }
}
export const register = async (data) => {
  console.log(data);
  try {
    const userRef = await collection(db, "User")
    const q = await query(userRef, where("userId", "==", data.userId))
    const querySnapshot = await getDocs(q)
    console.log(querySnapshot.empty);
    if (querySnapshot.empty) {
      const docRef = await addDoc(userRef,data)
      return true
      //login({email:data.userID,password:data.password,fun})
    }else{
      return false
    }
  } catch (error) {
    console.log(error);

  }
}