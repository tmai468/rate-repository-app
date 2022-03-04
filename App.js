// import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';
// import { Alert, Text } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar';
// export default function App() {
//   console.log("testing log")
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app right now!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const HelloWorld = props => {
//   return (<Text>Hello world!</Text>)
// };

// const PressableText = props => {
//   return (
//     <Pressable onPress={() => Alert.alert('You pressed the text!')}>
//       <Text>You can press me</Text>
//     </Pressable>
//   )
// }

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>

      <StatusBar style='auto'/>
    </>
  )
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
