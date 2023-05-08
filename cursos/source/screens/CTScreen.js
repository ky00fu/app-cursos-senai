import React from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import CursosCT from '../mocks/cursosCTMock'
import CTLista from '../components/CTLista'

export default function CTScreen({ navigation }) {
    const abrirCursos = (dados) => {
        navigation.navigate('CT Detalhes', { dados })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CursosCT}

                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => abrirCursos(item)}
                    >
                        <CTLista item={item} />
                    </TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        height: '100%'
    }
})