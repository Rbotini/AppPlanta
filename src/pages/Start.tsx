import React from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import Emoji from 'react-native-emoji';
import colors from '../styles/colors';

export function Start() {

    return (

        <View style={styles.container}>
            <Emoji name="smile" 
            style={{ fontSize: 80,marginBottom:50 }} />
            <Text style={styles.title}>
                Prontinho
            </Text>
            <Text style={styles.subtitle}>
                Agora vamos começar a cuidar das suas{'\n'}
                plantinhas com muito cuidado
            </Text>
            <TouchableOpacity style={styles.btnConfirmar}>
                 <Text style={styles.titlebtn}>
                     Começar
                 </Text>
             </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: colors.heading,
        marginBottom:30
    },
    subtitle:{
        fontSize:17,
        textAlign:'center'
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