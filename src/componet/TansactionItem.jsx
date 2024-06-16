import { Icon, ListItem } from '@rneui/base'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../common/style'
import { Button } from 'react-native-elements'
const TansactionItem = ({ item, deleteExpense }) => {
    const [expan, setExpan] = useState(false)

    return (
        <ListItem.Accordion
            content={
                <>
                    {item.expense_type === 'Opening Blance' ?
                        <Icon
                            color="#ddd"
                            type="material-community"
                            name="delete-off"
                            size={35}
                            onPress={() => deleteExpense(item)}

                        />
                        :
                        <Icon
                            color="#ff0000"
                            type="material-community"
                            name="delete"
                            size={35}
                            onPress={() => deleteExpense(item)}

                        />

                    }
                    <ListItem.Content>
                        <ListItem.Title style={globalStyle.boldfont}>{item.expense_type}</ListItem.Title>
                        <ListItem.Subtitle>{item.date}</ListItem.Subtitle>

                    </ListItem.Content>
                </>

            }

            isExpanded={expan}
            onPress={() => setExpan(!expan)}
        >
            <ListItem >
                <ListItem.Content>
                    <ListItem.Title style={globalStyle.redfontbold}>{item.description},Rs. {item.ammout}</ListItem.Title>
                    <ListItem.Subtitle style={globalStyle.redfont}>
                        {item.debit_by && `Debit from:${item.debit_by},`}
                        {item.credit_to && `Debit from:${item.credit_to}`}

                    </ListItem.Subtitle>


                </ListItem.Content>
            </ListItem>
        </ListItem.Accordion>
    )
}
export default TansactionItem
const styles = StyleSheet.create({})

