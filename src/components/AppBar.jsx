import { View, StyleSheet, Pressable } from "react-native"
import Constants from 'expo-constants'
import { Appbar } from 'react-native-paper'
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: "flex"
    },
    appBar: {
        backgroundColor: "#24292e"
    },
    appBarTitle: {
        color: "white",
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold
    }
})

const AppBar = () => {
    return (
    <View style={styles.container}>
        <Appbar style={styles.appBar} dark={true}>
            <Appbar.Header style={{backgroundColor: "#24292e"}}>
                <Pressable>
                    <Appbar.Content
                    title="Repositories"
                    titleStyle={
                        styles.appBarTitle
                    }
                    />
                </Pressable>
            </Appbar.Header>
        </Appbar>
    </View>
    )
}           

export default AppBar