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
        fontSize:18,
        fontWeight:'bold'
    },
    boldfontW:{
        fontSize:20,
        fontWeight:'bold',
        color:"#fff",
    },
    redfontbold:{
        fontSize:14,
        fontWeight:'bold',
        color:"#ff0000",
    },
    redfont:{
        fontSize:14,
        color:"#ff0000",
    }


})