import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return(
        <View>
            <Text style={styles.primario}>SPACE QUIZ</Text>
            <Text style={styles.secundario}>Perguntas Alem do Raciocinio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: 'SOLARSPACEDEMO-Regular',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    secundario: {
        fontFamily: 'SPACEMISSION',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
})
