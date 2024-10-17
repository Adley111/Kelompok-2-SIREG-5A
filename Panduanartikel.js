import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CareerGuide = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <LinearGradient
        colors={['#63ABE6', '#3470A2']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        {/* Elemen kuning di pojok kiri atas */}
        <View style={styles.yellowCorner} />
        <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} color="black" style={styles.backIcon} />
        <Text style={styles.panduanKarir}>Panduan Karir</Text>
      </LinearGradient>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={20} color="#b0b0b0" />
          <TextInput placeholder="Cari..." style={styles.searchInput} />
        </View>
      </View>

      {/* Career Guide Section */}
      <View style={styles.careerGuideContainer}>
        <LinearGradient
          colors={['#63ABE6', '#3470A2']}
          style={styles.careerGuideSection}
        >
          <View style={styles.careerGuideTextContainer}>
            <Text style={styles.careerGuideText}>Mulai langkah awal menuju kesuksesan karirmu!</Text>
            <Image
              source={require('./assets/cewe.png')}
              style={styles.careerGuideImage}
              resizeMode="contain"
/>

          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.artikelButton}>
              <Text style={styles.artikelButtonText}>Artikel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Panduanvideo')} style={styles.videoButton}>
              <Text style={styles.videoButtonText}>Video</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      {/* Recommended Articles */}
      <View style={styles.recommendedArticlesContainer}>
        <Text style={styles.recommendedArticlesTitle}>Rekomendasi artikel</Text>
        <View style={styles.articlesRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Artikel')}>
          <LinearGradient
            colors={['#63ABE6', '#3470A2']} 
            style={styles.articleCard} 
          >
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/4LprTYReF8SZLSrOUm5n9Wexa0Qf8UADgFMbcLL8NrIYjDPnA.jpg' }}
              style={styles.articleImage}
            />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>Tips dan Trik Membuat CV ATS</Text>
              <Text style={styles.articleDescription}>Upgrade CV kamu mulai dari sekarang! dan temukan cara dalam pembuatannya</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Artikel')}>
          <LinearGradient
            colors={['#63ABE6', '#3470A2']}
            style={styles.articleCard} 
          >
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/JAsfkf1X60gn3UKUrogUXQ23yfixwtoP9o1cxxLDPd2WjDPnA.jpg' }}
              style={styles.articleImage}
            />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>Tips dan Trik Membuat CV ATS</Text>
              <Text style={styles.articleDescription}>Upgrade CV kamu mulai dari sekarang! dan temukan cara dalam pembuatannya</Text>
            </View>
          </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="home" size={24} color="#FFD500" />
          <Text style={styles.navTextActive}>Beranda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="th-large" size={24} color="#9ca3af" />
          <Text style={styles.navText}>Lainnya</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="graduation-cap" size={24} color="#9ca3af" />
          <Text style={styles.navText}>Akademik</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="envelope" size={24} color="#9ca3af" />
          <Text style={styles.navText}>Pesan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={24} color="#9ca3af" />
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    height: 130,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 18,
    paddingTop: 25,
    position: 'relative',
  },
  yellowCorner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 115,
    height: 130,
    backgroundColor: '#FFD500',
    borderBottomRightRadius: 500,
  },
  panduanKarir: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginTop: 35,
  },
  backIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  searchBox: {
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#1d4ed8',
  },
  searchInput: {
    marginLeft: 10,
    height: 40,
    flex: 1,
  },
  careerGuideContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  careerGuideSection: {
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  careerGuideTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  careerGuideText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    width: '65%',
  },
  careerGuideImage: {
    width: 170,
    height: 170,
    bottom: -65,
    position: 'absolute',
    marginLeft: 180,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  artikelButton: {
    backgroundColor: '#FFD500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  artikelButtonText: {
    color: '#1d4ed8',
    fontWeight: 'bold',
  },
  videoButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  videoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  recommendedArticlesContainer: {
    marginHorizontal: 20,
    marginTop: 50, 
    paddingBottom: 50,
  },
  recommendedArticlesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articlesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  articleCard: {
    width: '48%',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  articleImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  articleTextContainer: {
    padding: 5,
  },
  articleTitle: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  articleDescription: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    fontSize: 12,
    color: '#FFD500',
  },
  navText: {
    fontSize: 12,
    color: '#9ca3af',
  },
});

export default CareerGuide;