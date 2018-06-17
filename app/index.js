import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";

import Navigator from "./config/routes";

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979', 
  $darkText: '#343434',
})
export default () => <Navigator/>;

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
