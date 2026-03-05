import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";
import { Avatar } from "react-native-paper";

export default function RegisterScreen() {

    return (
        <View style={styles.container}>
            <Avatar.Icon size={120} icon="school" color="#3f7af6" style={styles.logo} />
            <Text style={styles.title}>Create Account</Text>
            <TextInput label="Name" mode="outlined" style={styles.input} activeOutlineColor="#3f7af6"/>
            <TextInput label="Email" mode="outlined" style={styles.input} activeOutlineColor="#3f7af6"/>
            <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                style={styles.input}
                activeOutlineColor="#3f7af6"
            />
            <TextInput
                label="Confirm Password"
                mode="outlined"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                style={styles.input}
                activeOutlineColor="#3f7af6"
            />
            <Button mode="contained" style={styles.mainButton} labelStyle={styles.buttonLabel} onPress={() => { }} buttonColor="#3f7af6">
                Register
            </Button>
            <Text style={styles.footerText}>Already have an account? <Text style={{ color: '#3f7af6' }}>Login</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        height: 70,
        width: 70,
        marginBottom: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    mainButton: {
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#777',
    },
});