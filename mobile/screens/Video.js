import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Video({ navigation }) {

    let auth_token =  '';
    
    async function getAuthToken(){
        auth_token = await AsyncStorage.getItem('auth_token');
    }

    getAuthToken();

    return (
        <WebView 
            source={{ 
                uri: 'https://widgets.bingewave.com/webrtc/xxxxxx',
                headers: { Authorization: auth_token }, 
            }} 
            style={{flex:1}}
            javaScriptEnabled={true}    
            allowsInlineMediaPlayback={true}
        />
    );
  }
  