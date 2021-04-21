import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
            Gerencie{'\n'} suas plantas {'\n'}de forma fácil
            </Text>


            <Image source={wateringImg} style={styles.image}/>

            <Text style={styles.subTitle}>
            Não esqueça de regar suas plantas. 
            Nós cuidamos de lembrar voçê sempre que precisar
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>
                    k
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {

        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38

    },

    subTitle: {

        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading

    },
    button: {

        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom:10,
        height:56,
        width:56
    },
     
    image: {
        width: 292,
        height: 284,

    },
    
    buttonText: {
        color: colors.white,
        fontSize: 24,

    }

})