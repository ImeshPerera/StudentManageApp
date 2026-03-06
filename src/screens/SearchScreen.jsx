import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Appbar, Searchbar, IconButton } from 'react-native-paper';
import CardComponent from '../components/CardComponent';

function SearchScreen() {

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

                <CardComponent studentName="John Doe" phone="+04 712345678" email="jondoe@email.com" icon="chevron-right" />
                <CardComponent studentName="Jane Smith" phone="+04 712345679" email="janesmith@email.com" icon="chevron-right" />
                <CardComponent studentName="Michael Brown" phone="+04 712345680" email="michaelbrown@email.com" icon="chevron-right" />

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