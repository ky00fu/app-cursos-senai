import { View, Text, StyleSheet } from 'react-native'

export default function CAILista({ item }) {
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
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    },    
    curso: {
        color: '#E30613',
        fontSize: 18,
        fontWeight: '700',
        margin: 8,
    },
    text: {
        fontSize: 16,
        margin: 6,
    }
})