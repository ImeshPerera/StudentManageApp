import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';

function CardComponent(props) {
    return (
        <Card style={styles.listCard}>
            <Card.Content>
                <View style={styles.listHeader}>
                    <Text style={styles.studentName}>{props.studentName}</Text>
                    <IconButton
                        icon={props.icon}
                        iconColor="#3f7af6"
                        size={25}
                        onPress={() => { }}
                    />
                </View>

                <View style={styles.infoRow}>
                    <Avatar.Icon size={20} icon="phone" style={styles.infoIcon} color="#7b8794" />
                    <Text style={styles.infoText}>{props.phone}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Avatar.Icon size={20} icon="email" style={styles.infoIcon} color="#7b8794" />
                    <Text style={styles.infoText}>{props.email}</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

CardComponent.propTypes = {
    studentName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
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
});

export default CardComponent
