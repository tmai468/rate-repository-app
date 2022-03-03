import { View, StyleSheet, Image, Pressable } from "react-native"
import Text from "./Text"
import Constants from 'expo-constants'
import theme from "../theme"
import StatDescription from "./StatDescription"

const styles = StyleSheet.create({
    mainRepositoryItemContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        flexGrow: 1,
        backgroundColor: "white"
    }
})

const headerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexGrow: 1,
        paddingTop: 15,
        alignItems: "flex-start"
    },
    avatarContainer: {
        flexGrow: 0,
        paddingRight: 15
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 9,
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 10,
        gap: 5,
        flexGrow: 0

    },
    repoName: {
        marginBottom: 2
    },
    languageTag: {
        alignSelf: "flex-start",
        backgroundColor: theme.colors.primary,
        borderRadius: 2,
    }

})

const statsStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexGrow: 2,
        gap: 40
    },

})

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.mainRepositoryItemContainer}>
            {/* <Text>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text> */}
            <View style={headerStyles.container}>
                <View style={headerStyles.avatarContainer}>
                    <Image style={headerStyles.avatar} source={item.ownerAvatarUrl}/>
                </View>
                <View style={headerStyles.infoContainer}>
                    <Text fontWeight="bold" fontSize="subheading" style={headerStyles.repoName}>{item.fullName}</Text>
                    <Text>{item.description}</Text>
                    <View style={headerStyles.languageTag}>
                        <Text style={{color: "white", margin: 5}} fontWeight="bold">{item.language}</Text>
                    </View>
                </View>
            </View>

            <View style={statsStyles.container}>
                <StatDescription count={item.stargazersCount} description="Stars"></StatDescription>
                <StatDescription count={item.forksCount} description="Forks"></StatDescription>
                <StatDescription  count={item.reviewCount} description="Reviews"></StatDescription>
                <StatDescription  count={item.ratingAverage} description="Rating"></StatDescription>
            </View>
        </View>
    )
}

export default RepositoryItem