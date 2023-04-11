import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useState } from 'react';

const Profile = () => {
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../images/user.png')}
                        style={styles.profilePicture}
                    />
                    <Text style={styles.username}>John Doe</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('ProfileEdit') }}
                        style={styles.editProfileButton}>
                        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="black" size={20} />
                        <Text style={{ color: "#B27C7C", marginLeft: 20 }}>Delhi, India</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="black" size={20} />
                        <Text style={{ color: "#B27C7C", marginLeft: 20 }}>+91-874596XXXX</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="black" size={20} />
                        <Text style={{ color: "#B27C7C", marginLeft: 20 }}>uvij027@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProfileEdit')}
                        style={styles.optionContainer}>
                        <FeatherIcon name="user" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Edit Profile</Text>
                        <FeatherIcon name="chevron-right" size={24} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <FeatherIcon name="lock" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Change Password</Text>
                        <FeatherIcon name="chevron-right" size={24} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <FeatherIcon name="download" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Downloads</Text>
                        <FeatherIcon name="chevron-right" size={24} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <FeatherIcon name="bell" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Notifications</Text>
                        <Switch
                            value={notifications}
                            onValueChange={(value) => setNotifications(value)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <FeatherIcon name="mail" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Contact Us</Text>
                        <FeatherIcon name="chevron-right" size={24} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <FeatherIcon name="moon" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Dark Mode</Text>
                        <Switch
                            value={darkMode}
                            onValueChange={(value) => setDarkMode(value)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <FeatherIcon name="flag" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Report Bug</Text>
                        <FeatherIcon name="chevron-right" size={24} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer1}>
                        <FeatherIcon name="log-out" size={24} style={styles.icon} />
                        <Text style={styles.optionText}>Log Out</Text>
                        <FeatherIcon name="chevron-right" size={24} style={styles.arrowIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    editProfileButton: {
        backgroundColor: '#2e64e5',
        borderRadius: 20,
        padding: 10,
        marginLeft: 'auto',
    },
    editProfileButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    body: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4578DF'
    },
    bioText: {
        fontSize: 16,
        marginBottom: 20,
        color: 'black',
    },
    courseList: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
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
    row: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    userInfoSection: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 10,
    },
    optionText: {
        fontSize: 16,
        flex: 1,
    },
    arrowIcon: {
        marginLeft: 10,
    },
    optionContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 100
    },
});

export default Profile;
