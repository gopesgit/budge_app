import { StyleSheet, View,KeyboardAvoidingView,TextInput, TouchableOpacity,Text, Alert } from "react-native"
import { globalStyle } from "../common/style"
import { useContext, useState } from "react"
import { Icon } from "@rneui/base"
import { login } from "../common/daliyExpenseControl"
import { AuthContext } from "../context/authContex"
export default function Login({ navigation }) {
    //global state
    const {user,setUser}=useContext(AuthContext)
    const [email,setEmail]=useState()
    const [showpass,setShowPass]=useState(true)
    const [password,setPassword]=useState()
    const [loading,setLoading]=useState(false)
    const handelSubmit=async ()=>{
        setLoading(true)
        if(!email || !password){
            Alert.alert("Please fill field")
            return
        }
       await login({email,password,setUser})
       setLoading(false)
    }
    return (        
        <View style={globalStyle.container}>
            <View style={{ flex: 1, }}>
               
            </View>           
            <View style={{ flex: 1, marginHorizontal: 20 }}>
            <KeyboardAvoidingView>
                    <TextInput
                        placeholder='Enter your email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={globalStyle.inputBox}
                    />               
                <View style={[globalStyle.inputBox,{flexDirection:'row',gap:150}]}>
                    <TextInput
                        placeholder='Enter your password'
                        secureTextEntry={showpass}
                        value={password}
                        onChangeText={(text) => setPassword(text)}                        
                    />
                <Icon name="remove-red-eye" size={40} color={"#dddddd"} 
                style={{justifyContent:'flex-end'}} 
                onPress={()=>setShowPass(!showpass)}
                />                   
                </View>
                <TouchableOpacity style={[globalStyle.submitBtn, { marginVertical: 8 }]} onPress={handelSubmit}>
                    <Text style={globalStyle.btnText}>
                        {!loading ? "Login" : "Please wait...."}
                    </Text>
                </TouchableOpacity>
                <Text style={[globalStyle.linkText, { marginTop: 4 }]}>
                    Your have not Register Please{" "}
                    <Text style={globalStyle.link} onPress={() => navigation.navigate("Register")}>
                        Register
                    </Text>{" "}
                </Text>
                </KeyboardAvoidingView>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({})