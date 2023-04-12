import { Text, TouchableOpacity, View, Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { Component, useState } from 'react'
import Home from './Home'
import Learning from './Learning'
import Profile from './Profile'

const Main = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      {
        selectedTab == 0 ? (<Home />) : selectedTab == 1 ? (<Learning />) : (<Profile />)
      }
      <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#fff', height: 60, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <TouchableOpacity style={{ width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setselectedTab(0);
          }} >
          <Image source={
            selectedTab == 0
              ? require('../images/home_select.png')
              : require('../images/home.png')
          }
            style={{ width: 27, height: 27 }} />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setselectedTab(1);
          }} >
          <Image source={
            selectedTab == 1
              ? require('../images/learning_select.png')
              : require('../images/learning.png')
          }
            style={{ width: 27, height: 27 }} />
          <Text>Learning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '34%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            setselectedTab(2);
          }} >
          <Image source={
            selectedTab == 2
              ? require('../images/profile_select.png')
              : require('../images/profile.png')

          } style={{ width: 27, height: 27 }} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Main

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