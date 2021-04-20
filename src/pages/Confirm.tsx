import React from 'react';
import { View, StyleSheet, Text,TextInput,TouchableOpacity } from 'react-native';
import Emoji from 'react-native-emoji';
import colors from '../styles/colors';

export function Confirm() {
    return (
        <View style={styles.container}>

            <Emoji name="smiley" style={{ fontSize: 56,marginBottom:30 }} />
            <Text style={styles.title}>
                Como podemos{'\n'}
                chamar você?
            </Text>
            <TextInput placeholder='Digite um nome'
             style={styles.inputname}/>

             <TouchableOpacity style={styles.btnConfirmar}>
                 <Text style={styles.titlebtn}>
                     Confirmar
                 </Text>
             </TouchableOpacity>




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    title:{
        
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        color:colors.heading,
        marginBottom:30,
    },
    inputname:{
        fontSize:17,
        textAlign:'center',
        borderBottomWidth:2,
        width:263,
        paddingBottom:10,
        marginBottom:30
        
    },
    btnConfirmar:{
        marginTop:30,
        width:231,
        height:56,
        backgroundColor:colors.green,
        borderRadius:16,
        justifyContent:'center'
    },
    titlebtn:{
        textAlign:'center',
        fontSize:20,
        color:'#FFFFFF',
        fontWeight: 'bold'
        
    }
    

})