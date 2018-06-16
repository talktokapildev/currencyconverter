import React from 'react';
import { View, Image,ImageBackground, Text } from 'react-native';
import styles from "./styles";

const Logo = () => (
    <View style={styles.container}>
        <ImageBackground style={styles.containerImage} source={require('./images/background.png')}>
            <Image source={require('./images/logo.png')}/>
        </ImageBackground>
        <Text>Currency Converter1 </Text>
    </View>
);

export default Logo;


