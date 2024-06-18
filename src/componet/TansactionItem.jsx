import { Icon, ListItem, Button } from '@rneui/base'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../common/style'
import { Collapse, CollapseBody, CollapseHeader } from 'accordion-collapse-react-native'
const TansactionItem = ({ item, deleteExpense }) => {
    const [expan, setExpan] = useState(false)
    return (
        <Collapse style={styles.collapscontainer}>
            <CollapseHeader>
                <View style={styles.collaps}>
                    <View>
                    <Text style={globalStyle.boldfont}>{item.expense_type}</Text>
                    <Text>{item.date}</Text>
                    </View>
                    {item.expense_type === 'Opening Blance' ?
                        <Icon
                            color="#ddd"
                            type="material-community"
                            name="delete-off"
                            size={30}                            
                        />
                        :
                        <Icon
                            color="#ff0000"
                            type="material-community"
                            name="delete"
                            size={30}
                            onPress={() => deleteExpense(item)}

                        />

                    }
                </View>
                
            </CollapseHeader>
            <CollapseBody>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.description}</Text>
                    <Text>Rs. {item.ammout}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.debit_by && `Debit from:${item.debit_by}`}</Text>
                    <Text>{item.credit_to && `Credit To:${item.credit_to}`}</Text>
                </View>
            </CollapseBody>
        </Collapse>
    )
}
export default TansactionItem
const styles = StyleSheet.create({
    collaps:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems:'center',
      
    },
    collapscontainer:{
        borderBottomColor:"#ddd",
        borderBottomWidth:1,
        borderTopColor:"#ddd",
        borderTopWidth:1,
        marginVertical:2
    }
})

{/* <ListItem.Accordion
        bottomDivider
            content={
                <>
                    {item.expense_type === 'Opening Blance' ?
                        <Icon
                            color="#ddd"
                            type="material-community"
                            name="delete-off"
                            size={35}                            
                        />
                        :
                        <Icon
                            color="#ff0000"
                            type="material-community"
                            name="delete"
                            size={40}
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
                        {item.credit_to && `Credit To:${item.credit_to}`}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </ListItem.Accordion> */}