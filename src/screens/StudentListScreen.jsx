import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Text, Avatar, FAB, IconButton } from 'react-native-paper';

function StudentListScreen() {

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction />
                <Appbar.Content title="Student List" />
                <Appbar.Action icon="delete-outline" backgroundColor='white' marginRight={10} />
            </Appbar.Header>

            <Card style={styles.listCard}>
                <Card.Content>
                    <View style={styles.listHeader}>
                        <Text style={styles.studentName}>John Doe</Text>
                        <IconButton
                            icon="pencil-outline"
                            iconColor="#3f7af6"
                            size={25}
                            onPress={() => { }}
                        />
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="phone" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>+04 712345678</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="email" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>jondoe@email.com</Text>
                    </View>
                </Card.Content>
            </Card>

            <Card style={styles.listCard}>
                <Card.Content>
                    <View style={styles.listHeader}>
                        <Text style={styles.studentName}>John Doe</Text>
                        <IconButton
                            icon="pencil-outline"
                            iconColor="#3f7af6"
                            size={25}
                            onPress={() => { }}
                        />
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="phone" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>+04 712345678</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="email" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>jondoe@email.com</Text>
                    </View>
                </Card.Content>
            </Card>

            <Card style={styles.listCard}>
                <Card.Content>
                    <View style={styles.listHeader}>
                        <Text style={styles.studentName}>John Doe</Text>
                        <IconButton
                            icon="pencil-outline"
                            iconColor="red"
                            size={25}
                            onPress={() => { }}
                        />
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="phone" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>+04 712345678</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="email" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>jondoe@email.com</Text>
                    </View>
                </Card.Content>
            </Card>

            <Card style={styles.listCard}>
                <Card.Content>
                    <View style={styles.listHeader}>
                        <Text style={styles.studentName}>John Doe</Text>
                        <IconButton
                            icon="pencil-outline"
                            iconColor="red"
                            size={25}
                            onPress={() => { }}
                        />
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="phone" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>+04 712345678</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Avatar.Icon size={20} icon="email" style={styles.infoIcon} color="#7b8794" />
                        <Text style={styles.infoText}>jondoe@email.com</Text>
                    </View>
                </Card.Content>
            </Card>

            <FAB icon="plus" style={styles.fab} onPress={() => { }} />
        </View>
    )
}

const styles = StyleSheet.create({
    listCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 2,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -2,
    },
    studentName: {
        marginStart: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    infoIcon: {
        backgroundColor: 'transparent',
        marginRight: 8,
    },
    infoText: {
        color: '#7b8794',
        fontSize: 16,
    },
    fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#3f7af6',
  },
});

export default StudentListScreen