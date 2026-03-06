import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Appbar, FAB, } from 'react-native-paper';
import CardComponent from '../components/CardComponent';

function StudentListScreen() {

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction />
                <Appbar.Content title="Student List"/>
                <Appbar.Action icon="delete-outline" backgroundColor='white' marginRight={10} />
            </Appbar.Header>

            <CardComponent studentName="John Doe" phone="+04 712345678" email="jondoe@email.com" icon="pencil-outline"/>
            <CardComponent studentName="Jane Smith" phone="+04 712345679" email="janesmith@email.com" icon="pencil-outline"/>
            <CardComponent studentName="Michael Brown" phone="+04 712345680" email="michaelbrown@email.com" icon="chevron-right"/>

            <FAB icon="plus" style={styles.fab} onPress={() => { }} />
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