import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Appbar, Searchbar, Card, Text, Avatar } from 'react-native-paper';

function DashboardScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: '#fff' }}>
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Dashboard" />
                <Appbar.Action icon="cog" />
            </Appbar.Header>
            <View style={styles.content}>
                <Searchbar placeholderTextColor={'gray'} placeholder="Search students..." style={styles.searchBar} />

                <Card style={styles.dashCard}>
                    <Card style={styles.colorcard1}>
                        <Card.Content style={styles.cardInner}>
                            <Avatar.Icon color="white" size={75} icon="magnify" style={{ backgroundColor: '#87b9f4' }}/>
                            <Text style={styles.cardText}>Search Student</Text>
                        </Card.Content>
                    </Card>
                </Card>

                <Card style={styles.dashCard}>
                    <Card style={styles.colorcard2}>
                        <Card.Content style={styles.cardInner}>
                            <Avatar.Icon color="white" size={75} icon="account-plus" style={{ backgroundColor: '#9a8fe6' }} />
                            <Text style={styles.cardText}>Add Student</Text>
                        </Card.Content>
                    </Card>
                </Card>

                <Card style={styles.dashCard}>
                    <Card style={styles.colorcard3}>
                        <Card.Content style={styles.cardInner}>
                            <Avatar.Icon color="white" size={75} icon="format-list-bulleted" style={{ backgroundColor: '#91c8f5' }} />
                            <View>
                                <Text style={styles.cardText}>Student List</Text>
                                <Text>Total: 32 Students</Text>
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
});


export default DashboardScreen;