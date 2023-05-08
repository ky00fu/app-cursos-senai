import React from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import CursosCAI from '../mocks/cursosCAIMock'
import CAILista from '../components/CAILista'

export default function CAIScreen({ navigation }) {
    const abrirCursos = (dados) => {
        navigation.navigate('CAI Detalhes', { dados })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CursosCAI}

                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => abrirCursos(item)}
                    >
                        <CAILista item={item} />
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