import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { ListItem, Separator } from "../components/List";

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component{
    handleThemesPress = () => {
        console.log('themes pressed');
    }

    handleSitePress = () => {
        console.log('press site');
    }

    render(){
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"></StatusBar>
                <ListItem
                text="Themes"
                onPress={this.handleThemesPress}
                customIcon={
                    <Ionicons name={`${ICON_PREFIX}-arrow-forward`} 
                    color={ICON_COLOR} size={ICON_SIZE}/>
                }
                >
                </ListItem>
                <Separator/>
                <ListItem
                text="Fixer.io"
                onPress={this.handleSitePress}
                customIcon={
                    <Ionicons name={`${ICON_PREFIX}-link`} 
                    color={ICON_COLOR} size={ICON_SIZE}/>
                }>
                </ListItem>
                <Separator/>
            </ScrollView>
        )
    }
};

export default Options;