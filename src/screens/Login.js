import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Field from './Field';
import Button from './Button';
import { color } from 'react-native-reanimated';

const Login = (props) => {
  return (
    <View style={{
      backgroundColor: '#4578DF',
    }}>
      <View    
         style={{
            width: 361,
            height: 800,
            alignItems: 'center',
            justifyContent: "center"  
            }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            borderBottomRightRadius: 130,
            paddingTop: 100,
            marginBottom: 30,
            alignItems: 'center',
          }}>
        <Text
          style={{
            fontSize: 40, 
            color: 'black',
            fontWeight: 'bold',
            paddingBottom: 10,
          }}>
            Welcome Back
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
                    alignItems: 'flex-end', 
                    width: '78%',
                    paddingRight: 16,
                    marginBottom: 200
                    }}>
            <Text style={{
                color: '#B27C7C',
                fontWeight: 'bold',
                fontSize: 16
                }}>
              Forgot Password ?
            </Text>
          </View>
          <Button textColor='white' bgColor={'#4578DF'} btnLabel="LOGIN" Press={() => alert("Logged In")} />
          <View style={{ 
            display: 'flex',
            flexDirection :'row',
            justifyContent: "center"
            }}>
            <Text style={{
                fontSize: 16,
                fontWeight:"bold" ,
                color: 'black',
                }}>
                    Don't have an account ? 
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ 
                color: '#B27C7C',
                fontWeight: 'bold',
                fontSize: 16 
                }}>
                    Signup
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;