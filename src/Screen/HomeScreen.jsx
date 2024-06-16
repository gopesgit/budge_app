import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox, Icon, Input } from '@rneui/base'
import { formatDate } from '../common/commonFunction';
import DaliyExpense from '../componet/DaliyExpense';
import BankTransfer from '../componet/BankTransfer';
import Income from '../componet/Income';
import { Button } from 'react-native-elements';


const HomeScreen = ({ navigation }) => {
    const [currentDate, setCurrentdate] = useState();
    const [operationmode, setOperationMode] = useState();
    const showDatePicker = () => {
        setCurrentdate(formatDate(new Date()));
    }
    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.container}>
                <View >
                    <Input
                        value={currentDate ? currentDate : ''}
                        placeholder='DD/MM/YYYY'
                        inputStyle={{ textAlign: 'center',fontWeight:'bold'}}
                        disabled={true}
                        leftIcon={
                            <Icon
                                type="font-awesome"
                                name="calendar"
                                onPress={() => showDatePicker()} />
                        }
                    />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <Button
                        title="Transfer"
                        onPress={() => setOperationMode("Transfer")}
                        type={operationmode === 'Transfer' ? 'solid' : 'outline'}
                    />
                    <Button
                        title="Expenses"
                        onPress={() => setOperationMode("Expenses")}
                        type={operationmode === 'Expenses' ? 'solid' : 'outline'}
                    />
                    <Button
                        title="Income"
                        onPress={() => setOperationMode("Income")}
                        type={operationmode === 'Income' ? 'solid' : 'outline'}
                    />
                </View>
                <View style={{ marginVertical: 8 }}>
                    {operationmode === 'Expenses' ? <DaliyExpense navigation={navigation} currentDate={currentDate} /> : null}
                    {operationmode === 'Transfer' ? <BankTransfer navigation={navigation} currentDate={currentDate} /> : null}
                    {operationmode === 'Income' ? <Income navigation={navigation} /> : null}
                </View>
                <StatusBar style='auto' />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 8,
        justifyContent: 'center',
    },
})