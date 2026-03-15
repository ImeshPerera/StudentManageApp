import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Appbar, FAB, } from 'react-native-paper';
import CardComponent from '../components/CardComponent';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function StudentListScreen() {

    const navigation = useNavigation();
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.get("https://student-api.acpt.lk/api/student/getAll", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStudents(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to fetch students.");
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchStudents();
        }, [])
    );

    const handleDelete = (id) => {
        Alert.alert(
            "Delete Student",
            "Are you sure you want to delete this student?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            const token = await AsyncStorage.getItem('token');
                            await axios.delete(`https://student-api.acpt.lk/api/student/delete/${id}`, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            Alert.alert("Success", "Student deleted successfully.");
                            fetchStudents();
                        } catch (error) {
                            console.error(error);
                            Alert.alert("Error", "Failed to delete student.");
                        }
                    }
                }
            ]
        );
    };

    const handleEdit = (student) => {
        navigation.navigate("AddStudentScreen", { student });
    };

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Student List" />
            </Appbar.Header>

            <FlatList
                data={students}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardComponent
                        studentName={item.student_name}
                        phone={item.student_contact}
                        address={item.student_address}
                        age={item.student_age}
                        icon="pencil-outline"
                        onEdit={() => handleEdit(item)}
                        onDelete={() => handleDelete(item.id)}
                    />
                )}
                onRefresh={fetchStudents}
                refreshing={loading}
            />

            <FAB icon="plus" style={styles.fab} onPress={() => navigation.navigate("AddStudentScreen", { student: null })} />
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#3f7af6',
  },
});

export default StudentListScreen;