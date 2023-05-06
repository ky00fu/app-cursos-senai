import { View, Text, StyleSheet } from 'react-native'

export default function CTLista({ item }) {
    return (
        <View style={styles.item}>
            <View style={styles.container}>
                <Text style={styles.curso}>{item.nome}</Text>
                <Text style={styles.text}>Área: {item.area}</Text>
                <Text style={styles.text}>Duração: {item.duracao}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2',
        borderRadius: 10,
        padding: 10
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    curso: {
        fontSize: 18,
        fontWeight: '700',
        margin: 8,
    },
    text: {
        fontSize: 16,
        margin: 6,
    }
})