import { useContext } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { DaliyExpenseContext } from '../context/dailyExpense'
import { Icon } from '@rneui/base'
import { delExpense } from '../common/daliyExpenseControl'
const ExpenseScreen = () => {
    const { expens, userData,getUserData } = useContext(DaliyExpenseContext)
    const deleteExpense = (item) => {
        //console.log("delete",item);
        delExpense(item, userData.id,getUserData)
        
    }
    //console.log("lki",expens);
    return (
        <View style={styles.container}>
            {expens &&
                expens.map((item, index) =>
                    <View key={index} style={{ flexDirection: 'row' }}>
                        <Text>{item.expense_type}</Text>
                        <Text>Rs. {item.ammout}</Text>
                        <Text>Rs. {item.debit_by}</Text>
                        {/* <Text>Rs. {item.description}</Text>
                        <Text>Rs. {item.date}</Text> */}
                        <Icon
                            color="#ff0000"
                            type="material-community"
                            name="delete-forever"
                            onPress={() => deleteExpense(item)}
                        />
                    </View>
                )
            }
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