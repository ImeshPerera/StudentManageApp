import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, Avatar } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateEmail, validatePassword, validateUsername } from "../utils/validation";

function RegisterScreen() {

    const navigation = useNavigation();

    const checklogin = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                navigation.replace("MainApp");
            }
        } catch (e) {
            console.log(e);
            Alert.alert("Error", "An error occurred while checking login status.");
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        checklogin();
    }, []);

    async function registerUser() {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert("Registration Failed", "Please fill in all fields.");
            return;
        }

        if (!validateUsername(name)) {
            Alert.alert("Registration Failed", "Username must be at least 3 characters long.");
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert("Registration Failed", "Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert("Registration Failed", "Please enter a valid password (at least 3 characters).");
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
            Alert.alert("Registration Successful", "Account created successfully. Please login.");
            navigation.navigate("LoginScreen");
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
            <TextInput label="Email" mode="outlined" style={styles.input} activeOutlineColor="#3f7af6" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry={!showPassword}
                right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
                style={styles.input}
                activeOutlineColor="#3f7af6"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                label="Confirm Password"
                mode="outlined"
                secureTextEntry={!showPassword}
                right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
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