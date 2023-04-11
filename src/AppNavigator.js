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
import SettingsScreen from './screens/SettingsScreen';
import PremiumScreen from './screens/PremiumScreen';
import Latest_Trending from './screens/Latest_Trending';
import Premium_courses from './screens/Premium_Courses';
import AllCourses from './screens/AllCourses';
import ReactNative from './screens/ReactNative';
import Angular from './screens/Angular';
import Next from './screens/Next';
import Docker from './screens/Docker';
import Vue from './screens/Vue';
import Node from './screens/Node';
import JavaScript from './screens/JavaScript';
import HTML from './screens/HTML';
import SignUp from './screens/SignUp';

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
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Latest_Trending"
                    component={Latest_Trending}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="ReactNative"
                    component={ReactNative}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="Angular"
                    component={Angular}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="Next"
                    component={Next}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="Docker"
                    component={Docker}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="Node"
                    component={Node}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="Vue"
                    component={Vue}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="JavaScript"
                    component={JavaScript}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="HTML"
                    component={HTML}
                    options={{
                        headerShown: true,
                        fontWeight: 'bold',
                        headerTintColor: '#4578DF'
                    }}
                    
                />
                <Stack.Screen
                    name="Premium_courses"
                    component={Premium_courses}
                    options={{
                        headerShown: true,
                        headerTintColor: '#4578DF'
                    }}
                    headerTitleStyle={{
                        fontWeight: 'bold', 
                    }}
                    
                />
                <Stack.Screen
                    name="AllCourses"
                    component={AllCourses}
                    options={{
                        headerShown: true,
                        headerTintColor: '#4578DF'
                    }}
                    headerTitleStyle={{
                        fontWeight: 'bold', 
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
                    name="PremiumScreen"
                    component={PremiumScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        headerShown: true
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
                        headerShown: true
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