import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home";

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF'
})
export default () => <Home/>;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Lets build a currency converter from app/index.js!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
