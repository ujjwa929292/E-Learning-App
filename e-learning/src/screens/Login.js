import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic
  }

  const handleSignUp = () => {
    // handle sign up logic
  }

  const handleForgotPassword = () => {
    // handle forgot password logic
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../images/l.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
          autoCapitalize="none"
          autoCompleteType="username"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input1}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View style={{flexDirection: 'row',}}>
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.forgotPasswordButtonText}>Sign Up?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup} onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <View style={styles.googleButtonContainer}>
            <Image source={require('../images/google-logo.png')} style={styles.googleButtonImage} />
            <Text style={styles.googleButtonText}>Sign up with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 0,
  },
  logo: {
    width: 310,
    marginLeft: 27,
    height: 300,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  input1: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 2,
  },
  signup: {
    marginLeft: 143
  },
  forgotPasswordButton: {
    marginLeft: 2
  },
  forgotPasswordButtonText: {
    color: 'black',
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: '#4578DF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 13,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: 'blue',
    fontSize: 18,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleButtonImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#4578DF',
    fontSize: 18,
  },
});
