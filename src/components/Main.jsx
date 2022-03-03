import { View, StyleSheet } from "react-native"
import Constants from 'expo-constants'
import RepositoryList from "./RepositoryList"
import FlexboxExample from "./FlexboxExample";
import Text from "./Text";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "#e1e4e8"
    },
    containerBigBlueText: {
        padding: 20
    },
    text: {
        color: 'blue',
        fontSize: 24,
        fontWeight: '700'
    }
})

// const stylesFancyText = StyleSheet.create({
//     text: {
//         color: 'grey',
//         fontSize: 14
//     },
//     blueText: {
//         color: 'blue'
//     },
//     bigText: {
//         fontSize: 24,
//         fontWeight: '700'
//     }
// })

// const BigBlueText = () => {
//     return (
//         <View style={styles.containerBigBlueText}>
//             <Text style={styles.text}>
//                 Big blue text
//             </Text>
//         </View>
//     )
// }

// const FancyText = ({ isBlue, isBig, children }) => {
//     const textStyles = [
//         stylesFancyText.text,
//         isBlue && stylesFancyText.blueText,
//         isBig && stylesFancyText.bigText
//     ]

//     return <Text style={textStyles}>{children}</Text>
// }

// const MainFancyText = () => {
//     return (
//         <>
//             <FancyText>Simple text</FancyText>
//             <FancyText isBlue>Blue text</FancyText>
//             <FancyText isBig>Big text</FancyText>
//             <FancyText isBig isBlue>Big blue text</FancyText>
//         </>
//     )
// }

const Main = () => {
    return (
        <View style={styles.container}>
            {/* <Text>Rate Repository Application</Text> */}
            <AppBar />
            <RepositoryList />
        </View>
    )
}

// const Main = () => {
//     return (
//         // <>
//         //     <Text>Simple text</Text>
//         //     <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
//         //     <Text fontWeight="bold" fontSize="subheading">
//         //         Bold subheading
//         //     </Text>
//         //     <Text color="textSecondary">Text with secondary color</Text>
//         // </>
//         <FlexboxExample />
//     )
// }

export default Main;