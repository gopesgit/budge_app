import { useContext, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { DaliyExpenseContext } from '../context/dailyExpense'
import { delExpense } from '../common/daliyExpenseControl'
import TansactionItem from '../componet/TansactionItem'
import { Button, Icon } from '@rneui/base'

const ExpenseScreen = () => {
    const { expens, userData, getUserData } = useContext(DaliyExpenseContext)
    const deleteExpense = (item) => {
        //console.log("delete",item);
        delExpense(item, userData.id, getUserData)

    }
    //console.log("lki",expens);
    return (
        <View style={styles.container}>
            <ScrollView>
                {expens &&
                    expens.map((item, index) =>
                        <View style={{borderWidth:1,marginVertical:2,paddingHorizontal:8,paddingBottom:4,borderRadius:4}}>
                            <TansactionItem item={item} key={index} deleteExpense={deleteExpense}/>                            
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

// {/* <View key={index} style={{ flexDirection: 'row' }}>
// <Text>{item.expense_type}</Text>
// <Text>Rs. {item.ammout}</Text>
// <Text>Rs. {item.debit_by}</Text>
// {/* <Text>Rs. {item.description}</Text>
// <Text>Rs. {item.date}</Text> */}
// {item.expense_type==='Opening Blance'?null:
// <Icon
//     color="#ff0000"
//     type="material-community"
//     name="delete-forever"
//     onPress={() => deleteExpense(item)}
// />
// }
// </View> */}