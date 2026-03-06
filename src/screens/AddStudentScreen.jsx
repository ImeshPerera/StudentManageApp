import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, TextInput, Button, Card, Text } from 'react-native-paper';

function AddStudentScreen() {
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Add Student" titleStyle={styles.headerTitle} />
            </Appbar.Header>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Basic Info Section */}
                <Card style={styles.formSection}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput mode="outlined" placeholder="Name" style={styles.input} outlineColor="#e0e0e0" activeOutlineColor="#3f7af6" />
                    <TextInput mode="outlined" placeholder="Phone" style={styles.input} outlineColor="#e0e0e0" activeOutlineColor="#3f7af6" />
                    <TextInput mode="outlined" placeholder="Email" style={styles.input} outlineColor="#e0e0e0" activeOutlineColor="#3f7af6" />
                </Card>

                {/* Address Section */}
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
                    />
                </Card>

                {/* Course Section */}
                <Card style={styles.formSection}>
                    <Text style={styles.label}>Course</Text>
                    <TextInput
                        mode="outlined"
                        value="Computer Science"
                        editable={false}
                        right={<TextInput.Icon icon="menu-down" />}
                        style={styles.input}
                        outlineColor="#e0e0e0"
                    />
                </Card>
            </ScrollView>
            <View style={styles.footerContainer}>
                <View style={styles.buttonRow}>
                    <Button mode="outlined" style={styles.cancelBtn} labelStyle={styles.cancelLabel} onPress={() => { }}>
                        Cancel
                    </Button>
                    <Button mode="contained" style={styles.saveBtn} labelStyle={styles.saveLabel} onPress={() => { }}>
                        Save
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
    scrollContent: {
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