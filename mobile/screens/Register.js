import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {

    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    function attemptRegister() {

        fetch('http://localhost:3500/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                first_name: first_name,
                last_name: last_name,
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
        <Text>Register Page</Text>
        <SafeAreaView>
            <Text style={styles.label} >Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter The Email Address"
                onChangeText={newText => setEmail(newText)}
            />

            <Text style={styles.label} >First Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter A First Name"
                onChangeText={newText => setFirstName(newText)}
            />

            <Text style={styles.label} >Last Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter A Last Name"
                onChangeText={newText => setLastName(newText)}
            />

            <Button 
                 title="Register"
                 onPress={() =>
                    attemptRegister()
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
  