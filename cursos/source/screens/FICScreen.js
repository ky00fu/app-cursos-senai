import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'

import CursosFIC from '../mocks/cursosFICMock'
import FICLista from '../components/FICLista'

export default function FICScreen({ navigation }) {
    const abrirCursos = (dados) => {
        navigation.navigate('FIC Detalhes', { dados })
    }

    return (
        <View>
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