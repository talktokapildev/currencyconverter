import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "./styles";


const Container = ({children, backgroundColor}) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  return (
    <View style={containerStyles}>
    {children}
    </View>
  )
}

// (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     <View style={styles.container}>
//       {children}
//     </View>
//   </TouchableWithoutFeedback>
// )

Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string
}

export default Container;