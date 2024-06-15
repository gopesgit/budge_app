import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox, Icon, Input} from '@rneui/base'
import { formatDate } from '../common/commonFunction';
import DaliyExpense from '../componet/DaliyExpense';
import BankTransfer from '../componet/BankTransfer';
import Income from '../componet/Income';


const HomeScreen = ({ navigation }) => {
    const [currentDate, setCurrentdate] = useState();
    const [operationmode, setOperationMode] = useState();
    const showDatePicker = () => {           
        setCurrentdate(formatDate(new Date()));
    }
    return (
        <View style={styles.container}>
            <View >
                <Input
                    value={currentDate ? currentDate : ''}
                    placeholder='DD/MM/YYYY'
                    inputStyle={{textAlign:'center'}}                    
                    disabled={true}
                    leftIcon={
                        <Icon
                            type="font-awesome"
                            name="calendar"
                            onPress={() => showDatePicker()} />
                    }
                />
            </View>
            <View style={{ flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                <CheckBox
                    checked={operationmode === 'Transfer'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title="Transfer"
                    onPress={() => setOperationMode("Transfer")}
                />
                <CheckBox
                    checked={operationmode === 'Expenses'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title="Expenses"
                    onPress={() => setOperationMode("Expenses")}

                />
                <CheckBox
                  checked={operationmode === 'Income'}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title="Income"
                    onPress={() => setOperationMode("Income")}
                />
            </View>
            {operationmode==='Expenses'?<DaliyExpense navigation={navigation} currentDate={currentDate}/>:null}
            {operationmode==='Transfer'?<BankTransfer navigation={navigation}/>:null}
            {operationmode==='Income'?<Income navigation={navigation}/>:null}
            <StatusBar style='auto'/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:8,       
        justifyContent: 'center',
    },
})