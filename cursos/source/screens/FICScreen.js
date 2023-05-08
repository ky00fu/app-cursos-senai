import React from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import CursosFIC from '../mocks/cursosFICMock'
import FICLista from '../components/FICLista'

export default function FICScreen({ navigation }) {
    const abrirCursos = (dados) => {
        navigation.navigate('FIC Detalhes', { dados })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CursosFIC}

                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => abrirCursos(item)}
                    >
                        <FICLista item={item} />
                    </TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
    }
})