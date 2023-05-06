import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'

import CursosCAI from '../mocks/cursosCAIMock'
import CAILista from '../components/CAILista'

export default function CAIScreen({ navigation }) {
    const abrirCursos = (dados) => {
        navigation.navigate('CAI Detalhes', { dados })
    }

    return (
        <View>
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