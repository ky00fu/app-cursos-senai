import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import logo from '../../assets/logo/senai.png'

export default function CategoriaScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Cursos FIC', { name: 'Cursos FIC'})}
            >
                <Text style={styles.btnText}>FORMAÇÃO INICIAL E CONTINUADA</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Cursos CAI', { name: 'Cursos CAI'})}
            >
                <Text style={styles.btnText}>APRENDIZAGEM INDUSTRIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Cursos Técnicos', { name: 'Cursos Técnicos'})}
            >
                <Text style={styles.btnText}>CURSO TÉCNICO</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    btn: {
        backgroundColor: '#E30613',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: 300,
        borderRadius: 50,
        margin: 10,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Segoe UI',
        fontWeight: '600'
    },
})