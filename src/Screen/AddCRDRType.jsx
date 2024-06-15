import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { globalStyle } from '../common/style'
import { Dropdown } from 'react-native-element-dropdown'
import { Button, Input, Icon } from '@rneui/base'
import { DaliyExpenseContext } from '../context/dailyExpense'
import { addFund } from '../common/daliyExpenseControl'
const AddCRDRType = () => {
  const accountType = [
    { label: "Saving Account", value: "Saving Account" },
    { label: "Current Account", value: "Current Account" },
    { label: "Other", value: "Other" },
  ]
  const [fundname, setFundName] = useState();
  const [initval, setInitVal] = useState();
  const [fundtype, setFundtype] = useState();
  const { expenseType, fundType,userData,getUserData } = useContext(DaliyExpenseContext)
  const submitFund=()=>{
    console.log({fundname,initval,fundtype,id:userData.id});
    addFund({fundname,initval,fundtype},userData.id,getUserData)
    setFundName()
    setInitVal()
    setFundtype()
  }
  return (
    <View style={styles.container}>
      <View style={globalStyle.dorodownContainer}>
        <Text style={globalStyle.boldfont}>Account Type</Text>
        <Dropdown
          style={globalStyle.dropdown}
          data={accountType}
          labelField="label"
          valueField="value"
          placeholder="Select Fund Type"
          value={fundtype}
          onChange={(item) => {
            //console.log("=>", item)
            setFundtype(item.value)
          }}
        />
      </View>
      <View>
        <Input
          placeholder='fund like ICICI,SBI,PNB,cash....'
          value={fundname}
          onChangeText={(text) => setFundName(text)}
          leftIcon={
            <Icon
              type="material-community"
              name="piggy-bank"
              size={30}
            />
          }
        />
      </View>
      <View>
        <Input
          placeholder='initial blance....'
          inputMode='numeric'
          value={initval}
          onChangeText={(text)=>setInitVal(text)}
          leftIcon={
            <Icon
              type="font-awesome"
              name="rupee"

            />
          }
        />
      </View>
      <View>
        <Button title={"Add Fund"} onPress={()=>submitFund()} />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

export default AddCRDRType

const styles = StyleSheet.create({})