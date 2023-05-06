import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'

import CursosCT from '../mocks/cursosCTMock'
import CTLista from '../components/CTLista'

export default function CTScreen({ navigation }) {
    const abrirCursos = (dados) => {
        navigation.navigate('CT Detalhes', { dados })
    }

    return (
        <View>
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