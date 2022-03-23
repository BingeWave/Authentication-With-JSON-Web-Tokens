import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {

    const [email, setEmail] = useState('');

    function attemptLogin() {

        fetch('http://localhost:3500/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then((response) => response.json())
            .then(async (json) => {
              if(json.status=='success'){

                await AsyncStorage.setItem('auth_token', json.data.auth_token)

                navigation.navigate('Video')

              } else {
                  alert("There was an error!");
              }
            })
            .catch((error) => {
              console.error(error)
        });

    }

    return (
      <View >
        <Text>Login Page</Text>

        <SafeAreaView>
            <Text style={styles.label} >Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter The Email Address"
                onChangeText={newText => setEmail(newText)}
            />
            <Button 
                 title="Login"
                 onPress={() =>
                    attemptLogin()
                 }
            />
        </SafeAreaView>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    label : {
        marginLeft: 10,
        fontWeight: 'bold', 
        fontSize: 15, 
        marginBottom: 5
    }
  });