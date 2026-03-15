import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, Avatar } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateEmail, validatePassword } from "../utils/validation";

function LoginScreen() {

    const navigation = useNavigation();

    const checklogin = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                navigation.replace("MainApp");
            }
        } catch (e) {
            Alert.alert("Error", "An error occurred while checking login status.");
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        checklogin();
    }, []);

    async function loginuser() {

        if (!email || !password) {
            Alert.alert("Login Failed", "Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            Alert.alert("Login Failed", "Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert("Login Failed", "Please enter a valid password (at least 3 characters).");
            return;
        }

        try {
            const response = await axios.post("https://student-api.acpt.lk/api/login", {
                email: email,
                password: password
            });
            console.log(response);
            Alert.alert("Login Successful", `Welcome back, ${response.data.user.name}!`);
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
            navigation.replace("MainApp");
        } catch (error) {
            console.error(error);
            Alert.alert("Login Failed", "Invalid email or password.");
        }
    }

    return (
        <View style={styles.container}>
            <Avatar.Icon size={120} icon="school" color="#3f7af6" style={styles.logo} />
            <Text style={styles.title}>Login</Text>
            <TextInput
                label="Email"
                mode="outlined"
                style={styles.input}
                activeOutlineColor="#3f7af6"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
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
            <Button mode="contained" style={styles.mainButton} labelStyle={styles.buttonLabel} onPress={loginuser} buttonColor="#3f7af6">
                Login
            </Button>
            <Button mode="text" uppercase={false} labelStyle={styles.forgotButton} onPress={() => { }}>
                Forgot password?
            </Button>
            <Text style={styles.footerText}>Don't have an account? <Text style={{ color: '#3f7af6' }} onPress={() => navigation.navigate("RegisterScreen")}>Register</Text></Text>
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
        marginBottom: 10,
    },
    forgotButton: {
        fontSize: 15,
        alignSelf: 'flex-end',
        marginTop: 20,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#777',
    },
});

export default LoginScreen;