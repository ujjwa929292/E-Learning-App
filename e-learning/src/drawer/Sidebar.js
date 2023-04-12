import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Sidebar = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={{ alignItems: "flex-start", margin: 16 }} onPress={() => navigation.openDrawer()} >
                <AntDesign name="bars" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Sidebar

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: "500"
    }
})