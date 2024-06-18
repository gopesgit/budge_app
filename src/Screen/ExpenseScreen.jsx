import { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { DaliyExpenseContext } from '../context/dailyExpense'
import { delExpense } from '../common/daliyExpenseControl'
import TansactionItem from '../componet/TansactionItem'
import { Button, Icon } from '@rneui/base'
import { globalStyle } from '../common/style'
import { Dropdown } from 'react-native-element-dropdown'

const ExpenseScreen = () => {
    const { expens, userData, getUserData } = useContext(DaliyExpenseContext)
    const deleteExpense = (item) => {
        //console.log("delete",item);
        delExpense(item, userData.id, getUserData)

    }
    const [uniqueTran,setuniqueTran]=useState([])
    const [tran,setTrantype]=useState("")
    useEffect(()=>{
        setuniqueTran()
        if(expens){
            const uniqueTran = [...new Set(expens.map(item => item.expense_type))].map(item => ({ label: item, value: item }));
            setuniqueTran(uniqueTran)
        }
       
       
    },[expens])
    //console.log(expens.filter((item)=>item.expense_type===tran));    
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                {expens &&                 
                <View style={globalStyle.dorodownContainer}>
                    <Dropdown
                        style={globalStyle.dropdown}
                        data={uniqueTran}
                        labelField="label"
                        valueField="value"
                      
                        placeholder="Select Transaction Type"                        
                        onChange={(item) => {
                            console.log("=>", item)
                            setTrantype(item.value)
                        }}
                    />
                </View>
                }
            </KeyboardAvoidingView>
            <ScrollView style={{padding:8}}>
                {expens &&
                    tran &&
                    (expens.filter((item)=>item.expense_type===tran)).map((item, index) =>
                        <View>
                            <TansactionItem item={item} key={index} deleteExpense={deleteExpense} />
                        </View>
                    ).reverse()
                    
                }
            </ScrollView>
            <StatusBar style='auto' />
        </View>
    )
}
export default ExpenseScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 8,
        justifyContent: 'center',
    },
})

