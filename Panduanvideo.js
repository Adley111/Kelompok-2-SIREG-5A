import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const CareerGuide = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <LinearGradient
        colors={['#63ABE6', '#3470A2']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.yellowCorner} />
        <Ionicons name="arrow-back" onPress={() => navigation.goBack()} size={24} color="black" style={styles.backIcon} />
        <Text style={styles.panduanKarir}>Panduan Karir</Text>
      </LinearGradient>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={20} color="#b0b0b0" />
          <TextInput placeholder="Cari..." style={styles.searchInput} />
        </View>
      </View>

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
            />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.artikelButton}>
              <Text style={styles.artikelButtonText}>Artikel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.videoButton}>
              <Text style={styles.videoButtonText}>Video</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.recommendedArticlesContainer}>
        <Text style={styles.recommendedArticlesTitle}>Rekomendasi Video</Text>
        <View style={styles.articlesRow}>
          <LinearGradient
            colors={['#63ABE6', '#3470A2']} 
            style={styles.articleCard}>
            <Image style={styles.profileImage} source={require('./assets/video1.png')} />
            <View style={styles.articleTextContainer}>
              <Text style={styles.articleTitle}>Tata Cara Wawancara</Text>
              <Text style={styles.articleDescription}>Wawancara menjadi hal terpenting dalam pengalaman magangmu, penasaran? Simak video ini!</Text>
            </View>
          </LinearGradient>

          <LinearGradient
            colors={['#63ABE6', '#3470A2']} 
            style={styles.articleCard} 
          >
            <Image style={styles.profileImage} source={require('./assets/video2.png')} />
            <View style={styles.articleTextContainer}>
            <Text style={styles.articleTitle}>Tata Cara Wawancara</Text>
              <Text style={styles.articleDescription}>Wawancara menjadi hal terpenting dalam pengalaman magangmu, penasaran? Simak video ini!</Text>
            </View>
          </LinearGradient>
          
        </View>
      </View>

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
    marginTop: 25, 
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
    marginTop: 30, 
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
    fontSize: 25,
    fontWeight: 'bold',
    width: '55%',
  },
  careerGuideImage: {
    width: 170,
    bottom:-65,
    position:'absolute',
    marginleft:190,
    right:-25,
    height: 170,
    borderRadius: 15,
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
    marginHorizontal: 30,
    marginTop: 5, 
    paddingBottom: 50, 
  },
  recommendedArticlesTitle: {
    fontSize: 30, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#000', 
  },
  
  articleTitle: {
    fontSize: 29, 
    fontWeight: '900', 
    color: '#fff', 
    marginBottom: 8, 
  },
  
  articleDescription: {
    fontSize: 12, 
    color: '#fff', 
    textAlign: 'justify',
  },
  
  articlesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    paddingHorizontal: 0, 
  },
  articleCard: {
    width: '49%',
    marginHorizontal:20,
    borderRadius: 18,
    padding: 15,
    marginBottom: 20, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    marginRight: 40,
  },

  profileImage: {
    width: '100%', 
    height: 110, 
    resizeMode: 'cover', 
    borderRadius: 10, 
    marginBottom: 10, 
  },
  articleTextContainer: {
    padding: 10,
  },
  articleTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  articleDescription: {
    fontSize: 12,
    color: 'white',
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