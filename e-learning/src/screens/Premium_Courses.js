import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Premium_Courses = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReactNative')}
            style={{
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 5,
              borderRadius: 10,
              width: 150
            }}>
            <Image source={require('../images/download.png')} style={{
              height: 160,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 2, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold", position: 'relative' }}>React Native-The Complete Guide</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$25</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Angular')}
            style={{
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 5,
              marginLeft: 10,
              borderRadius: 10,
              width: 160
            }}>
            <Image source={require('../images/angular.png')} style={{
              height: 150,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Angular.js Complete Tutorial</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$15</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Next')}
            style={{
              flex: 0.8,
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 10,
              borderRadius: 10,
              width: 160
            }}>
            <Image source={require('../images/nextjs.png')} style={{
              height: 150,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Next.js [V2] For Beginners</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$20</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate('Vue')}
            style={{
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 10,
              marginLeft: 10,
              borderRadius: 10,
              width: 160
            }}>
            <Image source={require('../images/vuejs.png')} style={{
              height: 150,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 2, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold", position: 'relative' }}>Learn Vue.js From our Experts</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$30</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Node')}
            style={{
              flex: 0.8,
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 10,
              borderRadius: 10,
              width: 160
            }}>
            <Image source={require('../images/nodejs.png')} style={{
              height: 150,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Node.js - Online classes</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$11</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate('Docker')}
            style={{
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 10,
              marginLeft: 10,
              borderRadius: 10,
              width: 160
            }}>
            <Image source={require('../images/dockerr.png')} style={{
              height: 150,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Learn Docker in 24 Hours</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$7</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('JavaScript')}
            style={{
              flex: 0.8,
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 10,
              borderRadius: 10,
              width: 160
            }}>
            <Image source={require('../images/javascript.png')} style={{
              height: 150,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Javascript Basics</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate('HTML')}
            style={{
              height: 220,
              elevation: 2,
              backgroundColor: "#FFF",
              marginTop: 10,
              marginLeft: 10,
              borderRadius: 10,
              width: 160
            }}>
            <Image source={require('../images/html.png')} style={{
              height: 150,
              width: 150,
              resizeMode: 'cover',
              resizeMode: 'contain',
              alignItems: "center",
            }} />
            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>HTML & CSS in 4 Hours</Text>
              <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2 }}>$10</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Premium_Courses