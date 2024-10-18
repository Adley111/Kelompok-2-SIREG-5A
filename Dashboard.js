import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFont, faAt, faCamera, faImage, faLink, faPaperPlane, faHome, faBook, faGraduationCap, faEnvelope, faUser, faCompassDrafting, faCompass } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();
  const [selectedFeature, setSelectedFeature] = useState('semua');

  const companies = [
    { name: 'PT Bukit Asam Tbk', image: require('./assets/perusahaanA.png'), isPopular: true, isNew: false },
    { name: 'PT Anugrah Kharisma Jaya', image: require('./assets/perusahaanB.png'), isPopular: false, isNew: true },
    { name: 'PT Cahaya Poles Mulia', image: require('./assets/perusahaanC.png'), isPopular: true, isNew: true },
    { name: 'CV Global Teknik Infotama', image: require('./assets/perusahaanD.png'), isPopular: false, isNew: false },
  ];

  const filterOptions = ['semua', 'populer', 'terbaru'];

  const getIconName = (option) => {
    switch (option) {
      case 'semua': return 'grid';
      case 'populer': return 'star';
      case 'terbaru': return 'flame';
      default: return 'grid';
    }
  };

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const filterCompanies = () => {
    if (selectedFeature === 'populer') {
      return companies.filter(company => company.isPopular);
    } else if (selectedFeature === 'terbaru') {
      return companies.filter(company => company.isNew);
    } else {
      return companies;
    }
  };

  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <LinearGradient
        colors={['#3470A2', '#63ABE6']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1, y: 1 }}
        style={styles.bannerBackground}
      >
        <View style={styles.bannerContent}>
          <View>
            <Text style={styles.bannerText}>Peluang Magang</Text>
            <Text style={styles.bannerText}>Panduan Karir</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Notifikasi')}>
              <Ionicons name="notifications" size={35} color="#FFD358" style={styles.bellIcon} />
           </TouchableOpacity>
            <Image style={styles.profileImage} source={require('./assets/rabbit.png')} />
          </View>
        </View>
      </LinearGradient>

      {/* Greetings Section */}
      <View style={styles.greetings}>
        <Text style={styles.greetingText}>Halo,</Text>
        <Text style={styles.nameText}>Nur Annisa Basulina</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <View style={styles.searchInput}>
          <AntDesign name="search1" size={16} color="rgba(0, 0, 0, 0.36)" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Cari...</Text>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featureContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Informasi')} style={styles.featureItem}>
          <LinearGradient
            colors={['#60B851', '#326323']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featureIconBackground}
          >
            <Ionicons name="document-text" size={30} color="#FFF" />
          </LinearGradient>
          <Text style={styles.featureText}>Informasi Magang</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Panduanartikel')} style={styles.featureItem}>
          <LinearGradient
            colors={['#60B851', '#326323']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featureIconBackground}
          >
            <Ionicons name="book" size={30} color="#FFF" />
          </LinearGradient>
          <Text style={styles.featureText}>Panduan Karir</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Tanyajawab')} style={styles.featureItem}>
          <LinearGradient
            colors={['#60B851', '#326323']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featureIconBackground}
          >
            <Ionicons name="chatbubbles" size={30} color="#FFF" />
          </LinearGradient>
          <Text style={styles.featureText}>Tanya Jawab</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Mentoring')} style={styles.featureItem}>
          <LinearGradient
            colors={['#60B851', '#326323']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featureIconBackground}
          >
            <Ionicons name="people" size={30} color="#FFF" />
          </LinearGradient>
          <Text style={styles.featureText}>Mentoring</Text>
        </TouchableOpacity>
      </View>

      {/* Company Section */}
      <Text style={styles.companyText}>Perusahaan</Text>

      {/* Filter Options */}
      <View style={styles.filterContainer}>
        {filterOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.filterItem, selectedFeature === option && styles.selectedItem]}
            onPress={() => setSelectedFeature(option)}
          >
            <View style={styles.filterIcon}>
              <Ionicons
                name={getIconName(option)}
                size={30}
                color={selectedFeature === option ? '#FFF' : '#3470A2'}
              />
            </View>
            <Text style={styles.filterText}>{capitalizeFirstLetter(option)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filterCompanies()} 
        renderItem={({ item }) => (
          <LinearGradient
            colors={['#3470A2', '#63ABE6']}
            start={{ x: 0., y: 0.1 }}
            end={{ x: 0, y: 1 }}
            style={styles.companyCard}
          >
            <View style={styles.companyImageContainer}>
              <Image source={item.image} style={styles.companyImage} />
            </View>
            <Text style={styles.companyName}>{item.name}</Text>
            <Text style={styles.companyDescription}>Perusahaan bergerak di bidang teknologi terbaik di dunia</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Perusahaan')}style={styles.companyButton}>
              <View style={styles.buttonContent}>
                <Text style={styles.companyButtonText}>Selengkapnya</Text>
                <Ionicons name="arrow-forward" size={16} color="#225580" style={styles.arrowIcon} />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        )}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.companyCardsContainer}
        snapToInterval={width * 0.42 + 20}
        decelerationRate="fast"
      />

      <View style={styles.footer}>
        <View style={styles.footerButtonGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.footerButton}>
            <FontAwesomeIcon icon={faHome} size={24} color="#FFC727" />
            <Text style={styles.footerButtonText}>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <FontAwesomeIcon icon={faCompass} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Lainnya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <FontAwesomeIcon icon={faGraduationCap} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Akademik</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <FontAwesomeIcon icon={faEnvelope} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Pesan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <FontAwesomeIcon icon={faUser} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Akun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  bannerBackground: {
    height: height * 0.20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  bannerText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greetings: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  greetingText: {
    color: '#3470A2',
    fontSize: 18,
    fontWeight: '500',
  },
  nameText: {
    color: '#225580',
    fontSize: 24,
    fontWeight: '700',
  },
  searchBox: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  searchInput: {
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  searchPlaceholder: {
    color: 'rgba(0, 0, 0, 0.36)',
    fontSize: 12,
    flex: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  featureContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIconBackground: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#5F5F61',
    fontWeight: '500',
    textAlign: 'center',
    width: 80,
  },
  companyText: {
    marginLeft: 30,
    marginTop: 0,
    fontSize: 18,
    color: '#3470A2',
    fontWeight: '600',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 30,
    marginRight: 25,

  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
  },
  selectedItem: {
    backgroundColor: '#FFC727',
  },
  filterIcon: {
    marginRight: 10,
  },
  filterText: {
    fontSize: 13,
    color: '#5F5F61',
    padding: 2,
  },
  companyCardsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  companyCard: {
    width: 220,
    height: '75%',
    backgroundColor: '#FFFF',
    borderRadius: 20,
    padding: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: 'space-between',  
    alignItems: 'center',             
  },
  companyImageContainer: {
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#E6E6E6', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  companyImage: {
    width: '70%', 
    height: '70%',
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFF',
    textAlign: 'center',  
    marginTop: 10,        
  },
  companyDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 5,
    padding: 2,
  },
  companyButton: {
    backgroundColor: '#FFFF',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    textAlign: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyButtonText: {
    color: '#225580',
    fontSize: 14,
    fontWeight: '500',
  },
  arrowIcon: {
    marginLeft: 5, 
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

export default Dashboard;
