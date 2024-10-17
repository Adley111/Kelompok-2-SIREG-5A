import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 

const Regis = () => {
  const navigation = useNavigation(); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    Alert.alert('Registrasi Berhasil', 'Akun Anda telah dibuat!', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hi!</Text>
        <Text style={styles.subText}>Buat akun baru</Text>
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
      />

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

      <TouchableOpacity style={styles.regisButton} onPress={handleRegister}>
        <LinearGradient
          colors={['#FFC727', '#FFD356', '#FFC727']} 
          style={styles.gradientButton}
        >
          <Text style={styles.regisButtonText}>Daftar</Text>
        </LinearGradient>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    marginTop: 10, 
    alignItems: 'flex-start',
  },
  welcomeText: {
    color: '#225580',
    fontSize: 40,
    fontWeight: '700',
    paddingBottom: 5,
  },
  subText: {
    color: '#225580',
    fontSize: 24,
    fontWeight: '400',
    paddingBottom: 20,
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
  regisButton: {
    width: '90%',
    height: 47,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: '#FFC727',
  },
  gradientButton: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regisButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
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

export default Regis;
