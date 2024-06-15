import { ActivityIndicator, Alert, KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Button, Icon, Input } from '@rneui/base';
import { globalStyle } from '../common/style';
import { DaliyExpenseContext } from '../context/dailyExpense';
import { addExpense } from '../common/daliyExpenseControl';

export default function DaliyExpense({ navigation, currentDate }) {
    const { expenseType, fundType,userData,getUserData } = useContext(DaliyExpenseContext)
    const [expense, setExpense] = useState();
    const [fund, setFund] = useState();
    const [desExpense, setdesExpense] = useState();
    const [cost, setCost] = useState();    
    const submitExpense=()=>{
        if(!fund || !expense || !currentDate || !desExpense || !cost){
            Alert.alert("Please fill all field")
            return
        }
        //console.log({ fund, expense, currentDate, desExpense,cost,id:userData.id });
        const data={
            expense_type:expense,
            date:currentDate,
            description:desExpense,
            ammout:cost,           
            debit_by:fund,
            credit_to:null 
        }        
        setCost()
        setFund()
        setExpense()
        setdesExpense()
        addExpense(data,userData.id,getUserData);     
         
    }
    //console.log("hgg",expens);
    return (
        !expenseType ? <ActivityIndicator /> :
            (fundType) ?
                <KeyboardAvoidingView>
                <View>
                    <View style={globalStyle.dorodownContainer}>
                        <Text style={globalStyle.boldfont}>Expense Type </Text>
                        <Dropdown
                            style={globalStyle.dropdown}
                            data={expenseType}
                            labelField="label"
                            valueField="value"
                            placeholder="Select expense..."
                            search
                            value={expense}
                            onChange={(item) => {
                                setExpense(item.label)
                            }}
                        />
                    </View>
                    <View >
                        <Input
                            value={desExpense}
                            onChangeText={(text) => setdesExpense(text)}
                            placeholder='Description of Expense'
                            leftIcon={
                                <Icon
                                    type="material-community"
                                    name="note-text-outline"
                                />
                            }
                        />
                    </View>
                    <View >
                        <Input
                            value={cost}
                            onChangeText={(text) => setCost(text)}
                            placeholder='Rs.'
                            inputMode='numeric'
                            leftIcon={
                                <Icon
                                    type="font-awesome"
                                    name="rupee"
                                    
                                />
                            }
                        />
                    </View>
                    <View style={globalStyle.dorodownContainer}>
                        <Text style={globalStyle.boldfont}>From </Text>

                        <Dropdown
                            style={globalStyle.dropdown}
                            data={fundType}
                            labelField="fundname"
                            valueField="fundname"
                            placeholder="Select"
                            value={fund}
                            search
                            onChange={(item) => {
                                setFund(item.fundname)
                            }}
                        />
                    </View>
                    <View>
                        <Button title="Add" onPress={()=>submitExpense()}/>
                    </View>
                </View>
                </KeyboardAvoidingView>
                :
                <View style={{ gap: 8 }}>
                    {!fundType &&
                        <Button
                            title={"Add Fund Type"}
                            size='sm'
                            onPress={() => navigation.navigate('Add Fund Type')}
                        />}
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

})