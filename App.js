import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App