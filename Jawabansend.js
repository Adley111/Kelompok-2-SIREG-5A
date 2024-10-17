import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Jawabansend = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#3672A4', '#A2CBED']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0, y: 0.8 }}
        style={styles.gradientBackground}
      >
        <View style={styles.bannerContent}>
          <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="#2A6BA0" />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['#9DFB8E', '#2B7A1E', '#9DFB8E']}
          start={{ x: -0.3, y: -0.5 }}
          end={{ x: -0.8, y: 0.5 }}
          style={styles.featureIconBackground}
        >
          <Ionicons name="checkmark-circle" size={159} color="#8AD17F" style={styles.icon} />
        </LinearGradient>

        <LinearGradient
          colors={['#FFC727', '#FFEDB9']}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.1, y: 0.5 }}
          style={styles.semiCircle}
        />
        <LinearGradient
          colors={['#F5B600', '#FFEDB9']}
          start={{ x: 1, y: 0.2 }}
          end={{ x: 0.1, y: 0.2 }}
          style={styles.innerCircle} 
        />

        {/* Kalimat di bawah banner content */}
        <Text style={styles.thankYouText}>
          Terima kasih telah berkontribusi memberikan jawaban!
        </Text>

      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  gradientBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bannerContent: {
    alignItems: 'flex-start',  
    justifyContent: 'center', 
    marginTop: 80,
    width: '100%',
    paddingHorizontal: 20,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  featureIconBackground: {
    borderRadius: 100, // Membuat gradien melingkar
    padding: 10,
    marginTop: 100,
  },
  icon: {
    alignSelf: 'center',
  },
  semiCircle: {
    position: 'absolute',
    bottom: -150,  
    right: -180,  
    width: '100%',  
    height: 380,  
    borderRadius: 9999,
    overflow: 'hidden',
    zIndex: -1,  
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  innerCircle: {
    position: 'absolute',
    bottom: 150,  
    right: -10,   
    width: 126,  
    height: 123,  
    borderRadius: 100,  
    backgroundColor: '#FFDD75',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  thankYouText: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 30, 
    paddingHorizontal: 30,
  },
});

export default Jawabansend;
