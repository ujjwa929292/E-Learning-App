import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const DotComponent = ({ selected }) => {
        return (
            <View style={selected ? styles.selectedDot : styles.dot} />
        )
    }

    const NextButtonComponent = ({ nextLabel, onPress }) => {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{nextLabel}</Text>
            </TouchableOpacity>
        )
    }

    const DoneButtonComponent = ({ onPress, title }) => {
        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.title}>Next</Text>
            </TouchableOpacity>
        )
    }

    const styles = StyleSheet.create({
        dot: {
            width: 8,
            height: 8,
            borderRadius: 5,
            backgroundColor: '#B27C7C',
            margin: 3,
        },
        selectedDot: {
            width: 16,
            height: 8,
            borderRadius: 6,
            backgroundColor: '#5F61F0',
            margin: 3,
        },
        container: {
            backgroundColor: '#5F61F0',
            borderRadius: 10,
            paddingHorizontal: 40,
            paddingVertical: 10,
        },
        text: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
        },
        button: {
            backgroundColor: '#5F61F0',
            paddingVertical: 10,
            paddingHorizontal: 40,
            borderRadius: 10,
          },
          title: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
          },
    })

    return (
        <Onboarding
            onSkip={() => navigation.navigate('Main')}
            onDone={() => navigation.replace('Main')}
            DotComponent={DotComponent}
            NextButtonComponent={NextButtonComponent}
            DoneButtonComponent={DoneButtonComponent}
            pages={[
                {
                    backgroundColor: 'rgba(222, 233, 255, 1)',
                    image: <Image source={require('../images/onboarding1logo.png')} />,
                    title: 'Education is the best learn ever',
                    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: 'rgba(222, 233, 255, 1)',
                    image: <Image source={require('../images/onboarding2logo.png')} />,
                    title: 'Education is the best learn ever',
                    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
                },
                {
                    backgroundColor: 'rgba(222, 233, 255, 1)',
                    image: <Image source={require('../images/onboarding3logo.png')} />,
                    title: 'Education is the best learn ever',
                    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
                }
            ]}
        />
    )
}

export default OnboardingScreen