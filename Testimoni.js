import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const Testimoni = () => {
    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
          <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="#2A6BA0" />
          </TouchableOpacity>
            <Text style={styles.headerTitle}>UI/UX</Text>
            <Text style={styles.headerTitle}>Designer</Text>
            <Text style={styles.headerSubtitle}>CV Global Teknik Infotama</Text>
            <TouchableOpacity style={styles.dreamJobButton}>
              <FontAwesome name="heart" size={14} color="black" />
              <Text style={styles.dreamJobButtonText}>Posisi impian</Text>
            </TouchableOpacity>
            <Image
              source={require('./assets/UI UX 1.png')}
              style={styles.headerImage}
            />
          </View>
  
          <View style={styles.content}>
            <View style={styles.infoRow}>
              <FontAwesome name="clock-o" size={16} color="green" />
              <Text style={styles.infoText}>3 Bulan</Text>
  
              <FontAwesome name="map-marker" size={16} color="green" />
              <Text style={styles.infoText}>
                Kota Yogyakarta, D.I. Yogyakarta
              </Text>
            </View>
            <Text style={styles.cardTitle}>Testimoni Alumni</Text>
          </View>
  
          <View style={styles.card}>
            <LinearGradient
              colors={['#3470A2', '#63ABE6']}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientBackground}
            >
              <View style={styles.testimoni}>
                <View style={styles.testimoniItem}>
                  <Image
                    style={styles.testimoniImage}
                    source={require('./assets/niki-removebg-preview 1.png')}
                  />
                  <View style={styles.testimoniTextContainer}>
                    <Text style={styles.testimoniName}>Najwa Shahib</Text>
                    <Text style={styles.testimoniText}>
                      “Pengalaman magang yang sangat berkesan dan mengajarkan
                      banyak hal!”
                    </Text>
                    <View style={styles.starsContainer}>
                      {[...Array(5)].map((_, index) => (
                        <Ionicons
                          key={index}
                          name="star"
                          size={18}
                          color="#FFD700"
                          style={styles.starIcon}
                        />
                      ))}
                    </View>
                    <Text style={styles.testimoniDate}>20 Mei 2020</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
  
          <View style={styles.card}>
            <LinearGradient
              colors={['#3470A2', '#63ABE6']}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientBackground}
            >
              <View style={styles.testimoni}>
                <View style={styles.testimoniItem}>
                  <Image
                    style={styles.testimoniImage}
                    source={require('./assets/sehun 1.png')}
                  />
                  <View style={styles.testimoniTextContainer}>
                    <Text style={styles.testimoniName}>Ucok Baba</Text>
                    <Text style={styles.testimoniText}>
                      “Pengalaman magang yang sangat berkesan dan mengajarkan
                      banyak hal!”
                    </Text>
                    <View style={styles.starsContainer}>
                      {[...Array(5)].map((_, index) => (
                        <Ionicons
                          key={index}
                          name="star"
                          size={18}
                          color="#FFD700"
                          style={styles.starIcon}
                        />
                      ))}
                    </View>
                    <Text style={styles.testimoniDate}>20 Mei 2020</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
  
        <View style={styles.footer}>
          <View style={styles.footerButtonGroup}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Dashboard')}
              style={styles.footerButton}
            >
              <FontAwesome name="home" size={24} color="#FFC727" />
              <Text style={styles.footerButtonText}>Beranda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesome name="compass" size={24} color="gray" />
              <Text style={styles.footerButtonText}>Lainnya</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesome name="graduation-cap" size={24} color="gray" />
              <Text style={styles.footerButtonText}>Akademik</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesome name="envelope" size={24} color="gray" />
              <Text style={styles.footerButtonText}>Pesan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
              <FontAwesome name="user" size={24} color="gray" />
              <Text style={styles.footerButtonText}>Akun</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    backgroundColor: '#2D9CDB',
    padding: 20,
    paddingTop: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: -10,
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
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },
  dreamJobButton: {
    backgroundColor: '#F2C94C',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  dreamJobButtonText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  headerImage: {
    width: 205,
    height: 210,
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
  infoRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginVertical: 10, 
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5, 
    marginRight: 15, 
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 60,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#143C5E'

  },
  gradientBackground: {
    borderRadius: 15,
    padding: 20,
  },
  cardContent: {
    marginTop: 20,
  },
  testimoni: {
    marginTop: 0,
  },
  testimoniItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  testimoniImage: {
    width: 62,
    height: 62,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: -40,
    marginTop:-50,
  },
  testimoniTextContainer: {
    flex: 1,
  },
  starsContainer: {
    flexDirection: 'row', 
    marginVertical: 5,
  },
  starIcon: {
    marginRight: 5,
  },
  testimoniName: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  testimoniDate: {
    fontSize: 12,
    color: '#FFF',
    marginBottom: 5,
  },
  testimoniText: {
    fontSize: 14,
    color: '#FFF',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    height: 80,
  },
  footerButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Testimoni;