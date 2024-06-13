import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { Input, Icon, Button } from '@rneui/base'
import { globalStyle } from '../common/style'
const Income = ({ navigation }) => {
    const [incomeType, setIncomeType] = useState()
    const [crdrType, setcrdrTypeType] = useState()
    return (
        (crdrType && incomeType) ?
            <View>
                <View style={globalStyle.dorodownContainer}>
                    <Text style={globalStyle.boldfont}>Income Source</Text>
                    <Dropdown
                        style={globalStyle.dropdown}
                        data={incomeType}
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
                        placeholder='Description of Income'
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
                    <Text style={globalStyle.boldfont}>Cr. To</Text>
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
            </View> :
            <View>               
                {!crdrType &&
                    <Button
                        title={"Add Cr. & Dr. Type"}
                        size='sm'
                        style={{ marginVertical: 4 }}
                        onPress={() => navigation.navigate('Cr. & Dr. Type')}
                    />}
            </View>
    )
}
export default Income
const styles = StyleSheet.create({})