import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'

export default function FICDetalhesScreen({ route }) {
    const curso = route.params.dados

    return (
        <View style={styles.item}>
            <View style={styles.container}>
                <Text style={styles.curso}>{curso.nome}</Text>
                <Text style={styles.h3}>{curso.area}</Text>
                <Text style={styles.text}>Duração: {curso.duracao}</Text>
                <Text style={styles.text}>{curso.resumo}</Text>
                <Text style={styles.text}>{curso.requesito}</Text>
                <Text style={styles.h3}>Unidade</Text>
                <Text style={styles.text}>{curso.unidade}</Text>
                <Text style={styles.text}>{curso.endereco}</Text>
                <Text style={styles.text}>{curso.cep}</Text>
                <Text style={styles.h3}>Contatos</Text>
                <Text style={styles.text}>{curso.telefone}</Text>
                <Text style={styles.text}>{curso.email}</Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => Linking.openURL(curso.link)}
                    >
                        <Text style={styles.btnText}>Mais detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
    },
    curso: {
        fontSize: 18,
        fontWeight: '700',
        margin: 10
    },
    h3: {
        fontSize: 16,
        fontWeight: '600',
        margin: 10
    },
    text: {
        fontSize: 16,
        margin: 8,
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#E5E4E2',
        padding: 10,
        width: 150,
        borderRadius: 50,
        marginTop: 30
    },
    btnText: {
        fontFamily: 'Segoe UI',
    }
})