import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regis from './Regis';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login Berhasil', `Username: ${username}`, [{ text: 'OK' }]);
    } else {
      Alert.alert('Login Gagal', 'Mohon masukkan username dan password', [{ text: 'OK' }]);
    }
  };


  const handleForgotPassword = () => {
    Alert.alert('Lupa Kata Sandi', 'Link untuk reset kata sandi dikirimkan ke email Anda.', [{ text: 'OK' }]);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subText}>Masuk untuk melanjutkan</Text>
      </View>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Username"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Lupa kata sandi?</Text>
      </TouchableOpacity>


      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.orText}>atau</Text>
        <View style={styles.line} />
      </View>


      <Text style={styles.socialMediaText}>Social Media Log In</Text>


      <View style={styles.socialMediaIcons}>
        <Image source={require('./assets/google-icon.png')} style={styles.icon} />
        <Image source={require('./assets/facebook-icon.png')} style={styles.icon} />
        <Image source={require('./assets/apple-icon.png')} style={styles.icon} />
      </View>


      <Text style={styles.signUpText}>
        Belum punya akun?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('Regis')}>
          Daftar di sini
        </Text>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    marginTop: 70,
    alignItems: 'flex-start',
  },
  welcomeText: {
    color: '#225580',
    fontSize: 40,
    fontWeight: '700',
    paddingBottom: 10,
    marginTop: 0,
  },
  subText: {
    color: '#225580',
    fontSize: 24,
    fontWeight: '400',
    paddingBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 20,
    color: 'rgba(34, 85, 128, 0.75)',
    fontSize: 18,
    fontWeight: '400',
  },
  input: {
    width: '100%',
    height: 47,
    borderColor: '#225580',
    borderBottomWidth: 1,
  },
  loginButton: {
    width: '100%',
    height: 47,
    backgroundColor: '#FFC727',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#225580',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  socialMediaText: {
    textAlign: 'center',
    color: '#225580',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#225580',
  },
  orText: {
    color: '#225580',
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  signUpText: {
    textAlign: 'center',
    color: '#225580',
    fontSize: 14,
    marginTop: 10,
  },
  signUpLink: {
    fontWeight: '700',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Regis" component={Regis} options={{ title: 'Registration' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
