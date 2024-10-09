import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {
  return (
    <View style={styles.container}>


      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Peluang Magang dan Panduan Karir</Text>
        <View style={styles.headerRight}>
          <Icon name="notifications-outline" size={24} color="yellow" />
          <Image
            source={require('./assets/kelinci.png')}
            style={styles.profilePicture}
          />
        </View>
      </View>


      {/* Greeting Section */}
      <Text style={styles.greetingText}>Halo,</Text>
      <Text style={styles.userName}>Nur Annisa Basulina</Text>


      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="grey" />
        <TextInput
          placeholder="Cari..."
          style={styles.searchInput}
        />
      </View>


      {/* Menu Icons */}
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Icon name="document-text-outline" size={30} color="green" />
          <Text style={styles.menuText}>Informasi Magang</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="book-outline" size={30} color="green" />
          <Text style={styles.menuText}>Panduan Karir</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="chatbubbles-outline" size={30} color="green" />
          <Text style={styles.menuText}>Tanya Jawab</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="people-outline" size={30} color="green" />
          <Text style={styles.menuText}>Mentoring</Text>
        </View>
      </View>


      {/* Perusahaan Section */}
      <Text style={styles.perusahaanText}>Perusahaan</Text>


      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.filterActive]}>
          <Icon name="grid-outline" size={16} color="white" />
          <Text style={styles.filterTextActive}>Semua</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text style={styles.filterText}>Populer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="flame-outline" size={16} color="grey" />
          <Text style={styles.filterText}>Terbaru</Text>
        </TouchableOpacity>
      </View>


      {/* Company Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.companyScroll}>
        <View style={styles.companyCard}>
          <Image
            source={require('./assets/CV Global Teknik Informa.png')} // Gambar lokal
            style={styles.icon}
          />
          <Text style={styles.companyName}>CV Global Teknik</Text>
          <Text style={styles.companyDesc}>Bergerak di bidang teknologi terbaik di dunia</Text>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Selengkapnya</Text>
            <Icon name="chevron-forward-outline" size={16} color="white" />
          </TouchableOpacity>
        </View>


        <View style={styles.companyCard}>
          <Image
            source={require('./assets/bukit asam.png')} // Gambar lokal
            style={styles.icon}
          />
          <Text style={styles.companyName}>PT Bukit Asam</Text>
          <Text style={styles.companyDesc}>Bergerak di bidang pertambangan terbaik di dunia</Text>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Selengkapnya</Text>
            <Icon name="chevron-forward-outline" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>


      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="grey" />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="leaf-outline" size={24} color="yellow" />
          <Text style={styles.navTextActive}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="school-outline" size={24} color="grey" />
          <Text style={styles.navText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="mail-outline" size={24} color="grey" />
          <Text style={styles.navText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="grey" />
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  time: {
    fontSize: 16,
    color: '#000',
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005BB5',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  greetingText: {
    fontSize: 18,
    marginLeft: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 20,
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#8E8E8E',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
  perusahaanText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  filterActive: {
    backgroundColor: '#FFD700',
  },
  filterText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'grey',
  },
  filterTextActive: {
    marginLeft: 5,
    fontSize: 14,
    color: 'white',
  },
  companyScroll: {
    paddingHorizontal: 20,
  },
  companyCard: {
    backgroundColor: '#005BB5',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    width: 200,
    height: 200,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  companyDesc: {
    fontSize: 12,
    color: 'white',
    marginBottom: 10,
  },
  detailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 5,
    padding: 5,
  },
  detailButtonText: {
    fontSize: 12,
    color: 'white',
    marginRight: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'grey',
  },
  navTextActive: {
    fontSize: 12,
    color: 'yellow',
  },
});


export default App;
