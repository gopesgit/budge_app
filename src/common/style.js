import { StyleSheet } from "react-native"

export const globalStyle = StyleSheet.create({
    dropdown: {  
        width:'85%',           
        paddingLeft:20,
        color: "#af9f85",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    dorodownContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30,
        justifyContent:'center',
        marginVertical:1,
        
    },
    boldfont:{
        fontWeight:'bold'
    }
})