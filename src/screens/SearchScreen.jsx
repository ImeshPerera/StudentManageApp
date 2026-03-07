import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Appbar, Searchbar, IconButton } from 'react-native-paper';
import CardComponent from '../components/CardComponent';
import axios from 'axios';

function SearchScreen() {

    const [data, setData] = useState([]);

    async function loadstudents() {
        try {
            const response = await axios.get("https://student-api.acpt.lk/api/student/getAll", {
                headers: {
                    Authorization: `Bearer 6095|fH1tyVmUmDPpTFu7doKXWb4Zoj99KkKk3VxA8gGV0f345408`
                }
            });
            setData(response.data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadstudents();
    }, []);

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Search" titleStyle={styles.headerTitle} />
                <Appbar.Action icon="tune-variant" onPress={() => { }} />
            </Appbar.Header>

            <View style={styles.content}>
                <Searchbar
                    placeholder="Search students..."
                    onChangeText={() => { }}
                    value={''}
                    style={styles.searchBar}
                    iconColor="#3f7af6"
                    right={() => <IconButton icon="filter-variant" size={20} />}
                />

                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={({ item }) => (
                        <CardComponent studentName={item.student_name} phone={item.student_contact} email={item.student_address} icon="chevron-right" />
                    )}
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