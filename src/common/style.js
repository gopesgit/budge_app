import { StyleSheet } from "react-native"

export const globalStyle = StyleSheet.create({
    dropdown: {  
        width:'100%',    
        borderWidth:1,  
        borderColor:"#999",     
        paddingLeft:8,
        color: "#af9f85",
        paddingVertical:2,                
    },
    dorodownContainer:{
        flexDirection:'column',       
        paddingHorizontal:8,
        justifyContent:'center',
        marginVertical:2,
        gap:8,
        
    },
    boldfont:{
        fontWeight:'bold'
    }
})