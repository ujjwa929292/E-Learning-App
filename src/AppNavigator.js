import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Main from './screens/Main';
import Login from './screens/Login';
import Home from './screens/Home';
import Learning from './screens/Learning';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import OnboardingScreen from './screens/OnboardingScreen';
import Sidebar from './drawer/Sidebar';
import SettingsScreen from './screens/SettingsScreen';
import PremiumScreen from './screens/PremiumScreen';
import Certificates from './screens/Certificates';
import MainPage from './screens/MainPage';


const Stack = createStackNavigator();


function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="OnboardingScreen"
                    component={OnboardingScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="MainPage"
                    component={MainPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Certificates"
                    component={Certificates}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="PremiumScreen"
                    component={PremiumScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Sidebar"
                    component={Sidebar}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Learning"
                    component={Learning}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ProfileEdit"
                    component={ProfileEdit}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;