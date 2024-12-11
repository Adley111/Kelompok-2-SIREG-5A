import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { fetchAnswers, saveAnswer } from './firebase/save-answer.js';
import 'dotenv/config';
import Regis from './Regis';
import Login from './Login';
import Dashboard from './Dashboard';
import Notifikasi from './Notifikasi';
import TanyaJawab from './Tanyajawab';
import Informasi from './Informasi';
import Jawaban from './Jawaban';
import Tanya from './Tanya';
import Jawabansend from './Jawabansend';
import Tanyasen from './Tanyasend';
import Semuajawaban from './Semuajawaban';
import Posisi from './Posisi';
import Mentoring from './Mentoring';
import Mentor from './Mentor';
import Semuamentor from './Semuamentor';
import Perusahaan from './Perusahaan';
import Panduanartikel from './Panduanartikel';
import Panduanvideo from './Panduanvideo';
import Artikel from './Artikel';
import Testimoni from './Testimoni';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.splashImage}
            source={require('./assets/splash.png')}
          />
          <Text style={styles.title}>
            <Text style={styles.blueText}>Peluang Magang {'\n'}</Text>
            <Text style={styles.yellowText}>& Panduan Karir</Text>
          </Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.helloText}>Hello!</Text>
        <Text style={styles.descriptionText}>
          Temukan peluang magang dan panduan karir terbaik sesuai minat dan kemampuanmu!
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <LinearGradient
            colors={['#FFC727', '#FFD356', '#FFC727']}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Regis')} style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Regis" component={Regis} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Notifikasi" component={Notifikasi} options={{ headerShown: false }} />
        <Stack.Screen name="Tanyajawab" component={TanyaJawab} options={{ headerShown: false }} />
        <Stack.Screen name="Informasi" component={Informasi} options={{ headerShown: false }} />
        <Stack.Screen name="Jawaban" component={Jawaban} options={{ headerShown: false }} />
        <Stack.Screen name="Tanya" component={Tanya} options={{ headerShown: false }} />
        <Stack.Screen name="Jawabansend" component={Jawabansend} options={{ headerShown: false }} />
        <Stack.Screen name="Tanyasend" component={Tanyasen} options={{ headerShown: false }} />
        <Stack.Screen name="Semuajawaban" component={Semuajawaban} options={{ headerShown: false }} />
        <Stack.Screen name="Posisi" component={Posisi} options={{ headerShown: false }} />
        <Stack.Screen name="Mentoring" component={Mentoring} options={{ headerShown: false }} />
        <Stack.Screen name="Mentor" component={Mentor} options={{ headerShown: false }} />
        <Stack.Screen name="Semuamentor" component={Semuamentor} options={{ headerShown: false }} />
        <Stack.Screen name="Perusahaan" component={Perusahaan} options={{ headerShown: false }} />
        <Stack.Screen name="Panduanartikel" component={Panduanartikel} options={{ headerShown: false }} />
        <Stack.Screen name="Panduanvideo" component={Panduanvideo} options={{ headerShown: false }} />
        <Stack.Screen name="Artikel" component={Artikel} options={{ headerShown: false }} />
        <Stack.Screen name="Testimoni" component={Testimoni} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 66,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  splashImage: {
    width: 47,
    height: 55,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Outfit',
    fontWeight: '700',
  },
  blueText: {
    color: '#225580',
  },
  yellowText: {
    color: '#FFC727',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  helloText: {
    color: '#225580',
    fontSize: 40,
    fontFamily: 'Outfit',
    fontWeight: '700',
    marginBottom: 20,
  },
  descriptionText: {
    textAlign: 'center',
    color: '#225580',
    fontSize: 18,
    fontFamily: 'Outfit',
    fontWeight: '400',
    lineHeight: 25,
    marginBottom: 40,
  },
  loginButton: {
    width: 265,
    height: 47,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Outfit',
    fontWeight: '700',
  },
  signUpButton: {
    width: 265,
    height: 47,
    borderRadius: 10,
    borderColor: '#FFC727',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#FFCE41',
    fontSize: 18,
    fontFamily: 'Outfit',
    fontWeight: '700',
  },
});

export default App;