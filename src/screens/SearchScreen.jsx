import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Appbar, Searchbar, IconButton } from 'react-native-paper';
import CardComponent from '../components/CardComponent';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SearchScreen() {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    async function loadstudents() {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.get("https://student-api.acpt.lk/api/student/getAll", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to fetch students.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadstudents();
    }, []);

    const onChangeSearch = query => {
        setSearchQuery(query);
        if (query) {
            const newData = data.filter(item => {
                const itemData = item.student_name ? item.student_name.toUpperCase() : ''.toUpperCase();
                const textData = query.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
        } else {
            setFilteredData(data);
        }
    };

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
                            loadstudents();
                        } catch (error) {
                            console.error(error);
                            Alert.alert("Error", "Failed to delete student.");
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Search" titleStyle={styles.headerTitle} />
            </Appbar.Header>

            <View style={styles.content}>
                <Searchbar
                    placeholder="Search students..."
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchBar}
                    iconColor="#3f7af6"
                />

                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={filteredData}
                    renderItem={({ item }) => (
                        <CardComponent 
                            studentName={item.student_name} 
                            phone={item.student_contact} 
                            address={item.student_address} 
                            age={item.student_age}
                            icon="pencil-outline"
                            onEdit={() => navigation.navigate("AddStudentScreen", { student: item })}
                            onDelete={() => handleDelete(item.id)}
                        />
                    )}
                    onRefresh={loadstudents}
                    refreshing={loading}
                />
            </View>
        </View>
    );
};

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
    content: {
        flex: 1,
        paddingHorizontal: 16
    },
    searchBar: {
        borderRadius: 25,
        backgroundColor: '#fff',
        marginBottom: 10,
        elevation: 2,
    },
});

export default SearchScreen;