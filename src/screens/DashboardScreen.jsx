import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Appbar, Card, Text, Avatar } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function DashboardScreen() {

    const navigation = useNavigation();
    const [userdata, setUserdata] = useState(null);
    const [studentCount, setStudentCount] = useState(0);

    const checklogin = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                navigation.navigate("LoginScreen");
            } else {
                const user = await AsyncStorage.getItem('user');
                const userdata = user ? JSON.parse(user) : null;
                setUserdata(userdata);
                fetchStudentCount(token);
            }
        } catch (e) {
            Alert.alert("Error", "An error occurred while checking login status.");
            console.log(e);
        }
    }

    const fetchStudentCount = async (token) => {
        try {
            const response = await axios.get("https://student-api.acpt.lk/api/student/getAll", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStudentCount(response.data.length);
        } catch (error) {
            console.error("Failed to fetch student count", error);
        }
    }

    useEffect(() => {
        checklogin();
    }, []);

    useFocusEffect(
        useCallback(() => {
            const updateCount = async () => {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    fetchStudentCount(token);
                }
            };
            updateCount();
        }, [])
    );

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: '#fff' }}>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="Dashboard" />
                <Appbar.Action icon="logout" onPress={() => {
                    AsyncStorage.clear();
                    navigation.navigate("LoginScreen");
                }} />
            </Appbar.Header>
            <View style={styles.content}>
                <Card style={styles.dashCard}>
                    <Card style={styles.colorcard1}>
                        <Card.Content style={styles.usercard}>
                            <Avatar.Icon color="white" size={45} icon="account" style={{ backgroundColor: 'gray' }} />
                            <Text style={[styles.cardText, styles.userText]}>{userdata ? userdata.name.toUpperCase() : 'User Not Found'}</Text>
                        </Card.Content>
                    </Card>
                </Card>

                <Card style={styles.dashCard}>
                    <Card style={styles.colorcard1} onPress={() => navigation.navigate("SearchScreen")}>
                        <Card.Content style={styles.cardInner}>
                            <Avatar.Icon color="white" size={75} icon="magnify" style={{ backgroundColor: '#87b9f4' }} />
                            <Text style={styles.cardText}>Search Student</Text>
                        </Card.Content>
                    </Card>
                </Card>

                <Card style={styles.dashCard}>
                    <Card style={styles.colorcard2} onPress={() => navigation.navigate("AddStudentScreen", { student: null })}>
                        <Card.Content style={styles.cardInner}>
                            <Avatar.Icon color="white" size={75} icon="account-plus" style={{ backgroundColor: '#9a8fe6' }} />
                            <Text style={styles.cardText}>Add Student</Text>
                        </Card.Content>
                    </Card>
                </Card>

                <Card style={styles.dashCard}>
                    <Card style={styles.colorcard3} onPress={() => navigation.navigate("StudentListScreen")}>
                        <Card.Content style={styles.cardInner}>
                            <Avatar.Icon color="white" size={75} icon="format-list-bulleted" style={{ backgroundColor: '#91c8f5' }} />
                            <View>
                                <Text style={styles.cardText}>Student List</Text>
                                <Text>Total: {studentCount} Students</Text>
                            </View>
                        </Card.Content>
                    </Card>
                </Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 15,
    },
    searchBar: {
        marginBottom: 20,
        elevation: 2,
        backgroundColor: 'white',
    },
    dashCard: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 5,
        elevation: 2,
        borderWidth: 20,
        borderColor: 'white',
        shadowColor: '#72a5f2',
    },
    cardInner: {
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
    },
    usercard: {
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-around',
    },
    colorcard1: {
        backgroundColor: '#ebf0fa',
    },
    colorcard2: {
        backgroundColor: '#ebebfa',
    },
    colorcard3: {
        backgroundColor: '#e6eefa',
    },
    cardText: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    userText: {
        marginTop: 0,
    }
});


export default DashboardScreen;