import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { Input, Icon,Button } from '@rneui/base';
import { globalStyle } from '../common/style';

const BankTransfer = ({ navigation }) => {
    const [crdrType, setcrdrTypeType] = useState([{label:'Lable' ,value:1}])    
    return (
        crdrType ?
        <View>
             <View style={globalStyle.dorodownContainer}>
                <Text style={globalStyle.boldfont}>From </Text>                
                <Dropdown
                    style={globalStyle.dropdown}
                    data={crdrType}
                    labelField="label"
                    valueField="value"
                    placeholder="Select from fund....."
                    onChange={(item) => {
                        console.log("=>", item)
                        //setToUser(item)
                    }}
                />

            </View>
            <View >
                <Input
                    placeholder='Description of Transfer'
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
                    inputMode='numeric'
                />
            </View>
           
            <View style={globalStyle.dorodownContainer}>
                <Text style={globalStyle.boldfont}>To </Text>
                <Dropdown
                    style={globalStyle.dropdown}
                    data={crdrType}
                    labelField="label"
                    valueField="value"
                    placeholder="Select to fund....."
                    onChange={(item) => {
                        console.log("=>", item)
                        //setToUser(item)
                    }}
                />

            </View>
        </View>:
        <View>
        {!crdrType &&   
            <Button 
            title={"Add Cr. & Dr. Type"} 
            size='sm' 
            style={{marginVertical:4}}
            onPress={()=>navigation.navigate('Cr. & Dr. Type')}
            /> 
            
        }
        </View>
    )
}

export default BankTransfer

const styles = StyleSheet.create({})