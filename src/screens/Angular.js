import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const Angular = ({ course }) => {
    return (
        <ScrollView style={{ flex: 1,marginTop: 10 }}>
            <View style={{ flex: 1, alignItems: 'center'}}>
                <Image source={require('../images/angularr.png')} style={{ width: 350, height: 200, resizeMode: 'contain', borderRadius: 20 }} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Angular.js Complete Guide</Text>
                <Text style={styles.description}>nothing</Text>
                <View style={styles.info}>
                    <Text style={styles.infoText}>Setup
                        First, you need to create a new React project using your preferred tool (e.g. Create React App). Then, install the necessary dependencies such as React, React-DOM, and any other additional libraries you may want to use.
                        Create a Search Component
                        Next, create a new component called Search that will handle the search functionality. Inside this component, you can create a state variable to store the search query entered by the user:
                    </Text>
                </View>
                <Text style={styles.price}>$15</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enroll Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    info: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    infoText: {
        marginRight: 10,
        fontSize: 16,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#00a46c"
    },
    button: {
        backgroundColor: '#4578DF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Angular;
