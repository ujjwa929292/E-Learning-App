import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("OnboardingScreen");
        }, 3000)
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Image source={require('../images/splash-screen.png')} style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 360,
                height: 800,
            }} />
        </View>
    );
};

export default Splash