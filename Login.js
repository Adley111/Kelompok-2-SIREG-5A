import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';  

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username == 'admin' && password == 'admin123') {
      Alert.alert('Login Berhasil', 'Selamat datang, ${username}!', [{ text: 'OK' }]);
      navigation.navigate('Dashboard'); 
    } else {
      Alert.alert('Login Gagal', 'Mohon masukkan username dan password yang benar', [{ text: 'OK' }]);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Lupa Kata Sandi', 'Link untuk reset kata sandi dikirimkan ke email Anda.', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={20} color="black" />
      </TouchableOpacity>

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
        <LinearGradient
          colors={['#FFC727', '#FFD356', '#FFC727']}
          style={styles.gradientButton}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </LinearGradient>
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
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F7CE45',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    marginLeft: 20,
  },
  header: {
    marginTop: 70,
    alignItems: 'flex-start',
  },
  welcomeText: {
    color: '#225580',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Outfit',
    paddingBottom: 5,
  },
  subText: {
    color: '#225580',
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Outfit',
    paddingBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 20,
    color: 'rgba(34, 85, 128, 0.75)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Outfit',
  },
  input: {
    width: '100%',
    height: 47,
    borderColor: '#225580',
    borderBottomWidth: 1,
    fontFamily: 'Outfit',
  },
  loginButton: {
    width: '90%',
    height: 47,
    marginTop: 50,
    borderRadius: 10,
    alignSelf: 'center',
  },
  gradientButton: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Outfit',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#225580',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
    fontFamily: 'Outfit',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(34, 85, 128, 0.5)',
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    color: 'rgba(34, 85, 128, 0.5)',
    fontSize: 14,
    fontFamily: 'Outfit',
  },
  socialMediaText: {
    textAlign: 'center',
    color: '#225580',
    fontSize: 20,
    fontWeight: '700',
    margin: 20,
    fontFamily: 'Outfit',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    width: 27,
    height: 27,
    marginHorizontal: 10,
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
    fontFamily: 'Outfit',
  },
  signUpLink: {
    color: '#225580',
    fontWeight: '700',
    fontFamily: 'Outfit',
  },
});

export default Login;