import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                
                <Button
                    title="Register"
                    style={styles.navItem}
                    onPress={() =>
                        navigation.navigate('Register')
                    }
                />
    
                <Button
                    title="Login"
                    style={styles.navItem}
                    onPress={() =>
                        navigation.navigate('Login')
                    }
                />
               
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
        flex: 1,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    }
});
