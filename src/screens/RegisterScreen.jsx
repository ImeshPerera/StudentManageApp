import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, Avatar } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function RegisterScreen() {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function registerUser() {
        if(!name || !email || !password || !confirmPassword) {
            Alert.alert("Registration Failed", "Please fill in all fields.");
            return;
        }
        
        if (password != confirmPassword) {
            Alert.alert("Registration Failed", "Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post("https://student-api.acpt.lk/api/register", {
                name: name,
                email: email,
                password: password
            });
            Alert.alert("Registration Successful", "Account created successfully.");
        } catch (error) {
            console.error(error);
            Alert.alert("Registration Failed", "An error occurred while creating the account.");
        }
    }

    return (
        <View style={styles.container}>
            <Avatar.Icon size={120} icon="school" color="#3f7af6" style={styles.logo} />
            <Text style={styles.title}>Create Account</Text>
            <TextInput label="Name" mode="outlined" style={styles.input} activeOutlineColor="#3f7af6" value={name} onChangeText={setName} />
            <TextInput label="Email" mode="outlined" style={styles.input} activeOutlineColor="#3f7af6" value={email} onChangeText={setEmail} />
            <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                style={styles.input}
                activeOutlineColor="#3f7af6"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                label="Confirm Password"
                mode="outlined"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                style={styles.input}
                activeOutlineColor="#3f7af6"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button mode="contained" style={styles.mainButton} labelStyle={styles.buttonLabel} onPress={registerUser} buttonColor="#3f7af6">
                Register
            </Button>
            <Text style={styles.footerText}>Already have an account? <Text style={{ color: '#3f7af6' }} onPress={() => navigation.navigate("LoginScreen")}>Login</Text></Text>
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

export default RegisterScreen;