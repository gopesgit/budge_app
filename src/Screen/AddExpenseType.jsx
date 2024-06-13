import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../common/style'
import { Dropdown } from 'react-native-element-dropdown'
const AddExpenseType = () => {
  const expseType=[
    {label:"Label-1",value:1},
  ]
  return (
    <View style={styles.container}>
      <View style={globalStyle.dorodownContainer}>
        <Text style={globalStyle.boldfont}>From </Text>
        <Dropdown
          style={globalStyle.dropdown}
          data={expseType}
          labelField="label"
          valueField="value"
          placeholder="Select"
          onChange={(item) => {
            console.log("=>", item)
            //setToUser(item)
          }}
        />

      </View>
      <StatusBar style='auto' />
    </View>
  )
}

export default AddExpenseType

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})