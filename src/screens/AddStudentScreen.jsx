import React, { useEffect, useState, useCallback } from 'react'
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button, Card, Text } from 'react-native-paper';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateStudent } from '../utils/validation';

function AddStudentScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [studentToEdit, setStudentToEdit] = useState(null);

    useFocusEffect(
        useCallback(() => {
            const student = route.params?.student;
            if (student) {
                setStudentToEdit(student);
                setName(student.student_name);
                setAge(student.student_age?.toString());
                setContact(student.student_contact);
                setAddress(student.student_address);
            } else {
                setStudentToEdit(null);
                setName('');
                setAge('');
                setContact('');
                setAddress('');
            }
        }, [route.params?.student])
    );

    async function handleSave() {
        const validation = validateStudent({ name, age, address, contact });
        if (!validation.valid) {
            Alert.alert("Error", validation.message);
            return;
        }

        try {
            const token = await AsyncStorage.getItem('token');
            const url = studentToEdit 
                ? `https://student-api.acpt.lk/api/student/update/${studentToEdit.id}`
                : "https://student-api.acpt.lk/api/student/save";
            const method = studentToEdit ? 'put' : 'post';

            const response = await axios({
                method: method,
                url: url,
                data: {
                    "student_name": name,
                    "student_age": age,
                    "student_address": address,
                    "student_contact": contact
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            Alert.alert("Success", studentToEdit ? "Student updated successfully." : "Student added successfully.");
            
            // Explicitly clear params when going back or reset state if needed
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert("Error", `An error occurred while ${studentToEdit ? 'updating' : 'adding'} the student.`);
        }
    }

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={studentToEdit ? "Update Student" : "Add Student"} titleStyle={styles.headerTitle} />
            </Appbar.Header>

            <ScrollView contentContainerStyle={styles.Contentbox}>
                <Card style={styles.formSection}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput mode="outlined" placeholder="Name" style={styles.input} outlineColor="#e0e0e0" activeOutlineColor="#3f7af6" value={name} onChangeText={setName} />
                    <Text style={styles.label}>Phone</Text>
                    <TextInput mode="outlined" placeholder="Phone" style={styles.input} outlineColor="#e0e0e0" activeOutlineColor="#3f7af6" value={contact} onChangeText={setContact} keyboardType="phone-pad" />
                    <Text style={styles.label}>Age</Text>
                    <TextInput mode="outlined" placeholder="Age" style={styles.input} outlineColor="#e0e0e0" activeOutlineColor="#3f7af6" value={age} onChangeText={setAge} keyboardType="numeric" />
                </Card>

                <Card style={styles.formSection}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        mode="outlined"
                        placeholder="Street Address"
                        multiline
                        numberOfLines={3}
                        style={[styles.input, { minHeight: 120, textAlignVertical: 'top' }]}
                        outlineColor="#e0e0e0"
                        activeOutlineColor="#3f7af6"
                        value={address}
                        onChangeText={setAddress}
                    />
                </Card>
            </ScrollView>
            <View style={styles.footerContainer}>
                <View style={styles.buttonRow}>
                    <Button mode="outlined" style={styles.cancelBtn} labelStyle={styles.cancelLabel} onPress={() => navigation.goBack()}>
                        Cancel
                    </Button>
                    <Button mode="contained" style={styles.saveBtn} labelStyle={styles.saveLabel} onPress={handleSave}>
                        {studentToEdit ? "Update" : "Save"}
                    </Button>
                </View>
            </View>
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f8f9fb'
        },
        header: {
            backgroundColor: '#f8f9fb',
            elevation: 0
        },
        headerTitle: {
            fontWeight: 'bold',
            fontSize: 22
        },
        Contentbox: {
            padding: 16
        },
        footerContainer: {
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
        },
        formSection: {
            backgroundColor: '#fff',
            padding: 16,
            borderRadius: 15,
            marginBottom: 16,
            elevation: 0,
            borderWidth: 1,
            borderColor: '#f0f0f0',
        },
        label: {
            fontSize: 16,
            color: '#7b8794',
            marginBottom: 8,
            fontWeight: '500'
        },
        input: {
            backgroundColor: '#fff',
            color: 'gray',
            marginBottom: 12,
            height: 50
        },
        buttonRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            paddingBottom: 30,
            position: 'relative',
            bottom: 0,
        },
        cancelBtn: {
            flex: 1,
            marginRight: 8,
            borderRadius: 10,
            borderColor: '#ccc'
        },
        saveBtn: {
            flex: 1,
            marginLeft: 8,
            borderRadius: 10,
            backgroundColor: '#3f7af6'
        },
        cancelLabel: {
            color: '#666',
            fontSize: 18,
            fontWeight: '600'
        },
        saveLabel: {
            color: '#fff',
            fontSize: 18,
            fontWeight: '600'
        },
    });

    export default AddStudentScreen;