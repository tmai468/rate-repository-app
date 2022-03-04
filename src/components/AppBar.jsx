import { View, StyleSheet, Pressable, ScrollView } from "react-native"
import Constants from 'expo-constants'
import { Appbar } from 'react-native-paper'
import Text from "./Text"
import theme from "../theme"
import { Link } from "react-router-native"

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
        <ScrollView horizontal>
            <Appbar style={styles.appBar} dark={true}>
                <Appbar.Header style={{backgroundColor: "#24292e"}}>
                    <Link to="/">
                        <Appbar.Content
                        title="Repositories"
                        titleStyle={
                            styles.appBarTitle
                        }
                        />
                    </Link>
                </Appbar.Header>
                <Appbar.Header style={{backgroundColor: "#24292e"}}>
                    <Link to="/signin">
                        <Appbar.Content
                        title="Sign In"
                        titleStyle={
                            styles.appBarTitle
                        }
                        />
                    </Link>
                </Appbar.Header>
            </Appbar>
        </ScrollView>
    </View>
    )
}           

export default AppBar