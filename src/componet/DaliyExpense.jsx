import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Button, Icon, Input } from '@rneui/base';
import { globalStyle } from '../common/style';
import { expenseTypes } from '../common/commonFunction';
export default function DaliyExpense({ navigation }) {   
    const [crdrType, setcrdrTypeType] = useState([{label:'Lable' ,value:1}])
    return (
       (crdrType) ?
       <View>
            <View style={globalStyle.dorodownContainer}>
                <Text style={globalStyle.boldfont}>Expense Type </Text>
                <Dropdown
                    style={globalStyle.dropdown}
                    data={expenseTypes}
                    labelField="label"
                    valueField="value"
                    placeholder="Select"
                    onChange={(item) => {
                        console.log("=>", item)
                        //setToUser(item)
                    }}
                />
            </View>
            <View >
                <Input
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
                    placeholder='Rs.'
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
                        data={crdrType}
                        labelField="label"
                        valueField="value"
                        placeholder="Select"
                        onChange={(item) => {
                            console.log("=>", item)
                            //setToUser(item)
                        }}
                    />
               
            </View>
        </View>
        :
        <View style={{gap:8}}>
            {!crdrType &&   
            <Button 
            title={"Add Cr. & Dr. Type"} 
            size='sm'           
            onPress={()=>navigation.navigate('Cr. & Dr. Type')}
            /> }
            
           
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