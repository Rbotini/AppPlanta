import React from 'react';
import { Text, Image, View,StyleSheet,TouchableOpacity } from 'react-native';
import x from '../assets/watering.png';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


export function Welcom() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'}
                suas plantas de{'\n'}
                forma fácil
            </Text>
            <Image source={x}style={styles.imagem} />
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.{'\n'} Nós cuidamos de lembrar você{'\n'}
                sempre que precisar. alo 
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.titlebtn}>
                 <Icon name="hand-o-right" size={30} color="#fff" />
                
                </Text>
            </TouchableOpacity>

        </View>

    )
}
const styles = StyleSheet.create({

     container:{
       flex:1,
       justifyContent:'space-between',
       alignItems:'center',
     },
     title:{
         textAlign:'center',
         fontSize:32,
         marginTop:40,
         fontWeight:'bold',
         color:colors.heading,
     },
     subtitle:{
         textAlign:'center',
         fontSize:18,
         paddingHorizontal:20,
         color:colors.heading,
         fontWeight:'bold'

     },
     button:{
         backgroundColor:colors.green,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:16,
         marginBottom:20,
         height:56,
         width:100,
     },
     imagem:{
         height:284,
         width:292,
     },
     titlebtn:{
         fontSize:20,
         padding:20,
        
     }
    

})