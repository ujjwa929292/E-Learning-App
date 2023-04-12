import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // perform input validation
    if (!email || !password) {
      alert('Please enter a valid email and password.');
      return;
    }

    // perform login logic here
    if (email === 'uvij027@gmail.com' && password === 'password123') {
      // navigate to home screen
      navigation.navigate('Main');
    } else {
      // display error message or redirect to login error screen
      alert('Incorrect email or password.');
    }
  };

  return (
    
  );
};

<View style={{ flex: 1, justifyContent: 'center', }}>
        <Text style={{fontSize: 20, alignItems: 'flex-start', height: 100, width: 100}}>
          LOG IN
        </Text>
        <View style={{ flex: 1,justifyContent: 'center',alignItems: 'flex-start' }}>
          <TextInput
            style={{ width: '80%', height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 20,alignItems: 'center', justifyContent: 'center', }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={{ width: '80%', height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 20, }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={{ width: '80%', height: 50, backgroundColor: '#4578DF', borderRadius: 5, alignItems: 'center', justifyContent: 'center', }} onPress={handleLogin}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

export default Login;
