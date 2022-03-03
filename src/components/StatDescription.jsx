import { View, StyleSheet } from "react-native"
import Text from "./Text"
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

    }
})

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

const StatDescription = ({ count, description }) => {
    
    return (
        <View style={styles.container}>
            <Text fontWeight="bold">{kFormatter(count)}</Text>
            <Text>{description}</Text>
        </View>
    )
}

export default StatDescription