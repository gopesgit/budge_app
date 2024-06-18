import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Input, Button } from '@rneui/base'
import { formatDate } from '../common/commonFunction';
import DaliyExpense from '../componet/DaliyExpense';
import BankTransfer from '../componet/BankTransfer';
import Income from '../componet/Income';
import DateTimePicker from '@react-native-community/datetimepicker';
const HomeScreen = ({ navigation }) => {
    const [showdatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date())
    const [operationmode, setOperationMode] = useState();
    const onChange = (event, selectedDate) => {
        setShowDatePicker(false);
        const currentDate = new Date(); // Current date
        const minDate = new Date(); // Min date allowed (current date minus 30 days)
        minDate.setDate(currentDate.getDate() - 30);
        if (selectedDate && (selectedDate>currentDate || selectedDate < minDate)) {
            return
        }
        setDate(selectedDate)
    };
    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={styles.container}>
                <View >
                    <Input
                        value={formatDate(date)}
                        placeholder='DD/MM/YYYY'
                        inputStyle={{ textAlign: 'center', fontWeight: 'bold' }}
                        disabled={true}
                        leftIcon={
                            <Icon
                                type="font-awesome"
                                name="calendar"
                                size={30}
                                onPress={() => setShowDatePicker(true)} />
                        }
                    />
                    {showdatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

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
                    {operationmode === 'Expenses' ? <DaliyExpense navigation={navigation} currentDate={formatDate(date)} /> : null}
                    {operationmode === 'Transfer' ? <BankTransfer navigation={navigation} currentDate={formatDate(date)} /> : null}
                    {operationmode === 'Income' ? <Income navigation={navigation} currentDate={formatDate(date)} /> : null}
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