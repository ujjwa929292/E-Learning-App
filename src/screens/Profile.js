import { View, Text, Button, StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import {
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Profile = () => {
    const navigation = useNavigation();
    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                    <View>
                        <Image style={{
                            paddingTop: 10,
                            width: 100,
                            height: 100,
                        }} source={require('../images/user.png')} />
                    </View>
                    <View style={{ marginLeft: 50 }}>
                        <Title style={[styles.title, {
                            marginTop: 20,
                            marginBottom: 2,
                        }]}>Ujjwal Vij</Title>
                        <Caption style={styles.caption}>@ujjwal_vij_69</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#B27C7C" size={20} />
                    <Text style={{ color: "#B27C7C", marginLeft: 20 }}>Delhi, India</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#B27C7C" size={20} />
                    <Text style={{ color: "#B27C7C", marginLeft: 20 }}>+91-874596XXXX</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#B27C7C" size={20} />
                    <Text style={{ color: "#B27C7C", marginLeft: 20 }}>uvij027@gmail.com</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>127</Title>
                    <Caption>Total Number of Cources</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>126</Title>
                    <Caption>Total Number of Cources</Caption>
                </View>
            </View>
            <View style={styles.infoBoxWrapper2}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>127</Title>
                    <Caption>Total Number of Cources</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>126</Title>
                    <Caption>Total Number of Cources</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() =>
                    navigation.navigate('PremiumScreen')
                }>
                    <View style={styles.menuItem}>
                        <FeatherIcon
                            color="#4578DF"
                            name="star"
                            size={25}
                        />
                        <Text style={styles.menuItemText}>Premium</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() =>
                    navigation.navigate('Certificates')
                }>
                    <View style={styles.menuItem}>
                        <FeatherIcon
                            color="#4578DF"
                            name="award"
                            size={25}
                        />
                        <Text style={styles.menuItemText}>Certificates</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() =>
                    navigation.navigate('SettingsScreen')
                }>
                    <View style={styles.menuItem}>
                        <FeatherIcon
                            color="#4578DF"
                            name="settings"
                            size={25}
                        />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </GestureHandlerRootView>
    );
};


export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: "#B27C7C"
    },
    box1: {
        color: "#FFFFFF",
        backgroundColor: "#4578DF",
        width: '45%',
        padding: 11,
        margin: 5,
        paddingBottom: 60,
        marginLeft: 13,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        fontWeight: 'bold',
        paddingTop: 15,
    },
    Icon: {
    },
    box2: {
        color: "#FFFFFF",
        backgroundColor: "#C68642",
        width: '45%',
        padding: 11,
        margin: 5,
        paddingBottom: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        fontWeight: 'bold',
        paddingTop: 15,
    },
    parrentView: {
        flexDirection: 'row',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBoxWrapper2: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
        marginTop: 10,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});