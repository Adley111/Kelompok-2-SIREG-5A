import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFont, faAt, faCamera, faImage, faLink, faPaperPlane, faHome, faBook, faGraduationCap, faEnvelope, faUser, faCompassDrafting, faCompass } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
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
            source={require('./assets/header1.jpeg')}
            style={styles.headerImage}
          />
        </View>
  
        <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 60 }}>
          <View style={styles.infoRow}>
            <FontAwesome name="clock-o" size={16} color="green" />
            <Text style={styles.infoText}>3 Bulan</Text>
            <FontAwesome name="map-marker" size={16} color="green" style={styles.infoIcon} />
            <Text style={styles.infoText}>Kota Yogyakarta, D.I. Yogyakarta</Text>
          </View>
  
          <Text style={styles.sectionTitle}>Deskripsi Pekerjaan</Text>
          <Text style={styles.sectionText}>
            Merancang antarmuka pengguna yang intuitif dan menarik serta memastikan pengalaman pengguna yang baik melalui penelitian, prototyping, dan iterasi desain.
          </Text>
  
          <Text style={styles.sectionTitle}>Syarat dan Ketentuan</Text>
          <Text style={styles.sectionText}>1. Mahasiswa perguruan tinggi aktif minimal semester 5</Text>
          <Text style={styles.sectionText}>2. Terbuka untuk semua program studi</Text>
  
          <Text style={styles.sectionTitle}>Dokumen Persyaratan</Text>
          <Text style={styles.sectionText}>1. Surat Pengantar</Text>
          <Text style={styles.sectionText}>2. Fotocopy transkrip nilai, KHS, KSM</Text>
          <Text style={styles.sectionText}>3. Proposal Kegiatan</Text>
  
          <Text style={styles.sectionTitle}>Testimoni Alumni Unsri</Text>
          <View style={styles.testimonialContainer}>
            <View style={styles.testimonialItem}>
              <TouchableOpacity onPress={() => navigation.navigate('Testimoni')}>
              <Image
                source={{ uri: "https://storage.googleapis.com/a1aa/image/odwnV1z5WbqiGVVlKTyoiEI2ZeZTnSHM0aT4IgUglJdoAszJA.jpg" }}
                style={styles.testimonialImage}
              />
              </TouchableOpacity>
              <Text style={styles.testimonialText}>Najwa Shihab</Text>
            </View>
            <View style={styles.testimonialItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Testimoni')}>
              <Image
                source={{ uri: "https://storage.googleapis.com/a1aa/image/OOxvWeqbOepcakfnnj4zS4Q3zjcsleHBmeVhagXV8gX1JA7cC.jpg" }}
                style={styles.testimonialImage}
              />
              </TouchableOpacity>
              <Text style={styles.testimonialText}>Ucok Baba</Text>
            </View>
            <View style={styles.testimonialItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Testimoni')}>
              <Image
                source={{ uri: "https://storage.googleapis.com/a1aa/image/ZNCzcUzw7BIDLdwLTGEAqBgS7cBoerPoLFOdeKMzdTqSBYnTA.jpg" }}
                style={styles.testimonialImage}
              />
              </TouchableOpacity>
              <Text style={styles.testimonialText}>Made Sudewi</Text>
            </View>
          </View>
        </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerButtonGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.footerButton} >
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
          <TouchableOpacity style={styles.footerButton} >
            <FontAwesomeIcon icon={faUser} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Akun</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    position: 'relative',
    marginBottom: 20,
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
    fontSize: 18,
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

  content: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    color: 'gray',
    marginRight: 15,
    marginLeft:5,
    marginTop:5,
  },
  infoIcon: {
    marginLeft: 15,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  testimonialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2D9CDB', 
    borderRadius: 20,
    marginTop:1, 
    padding: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  testimonialItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  testimonialImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  testimonialText: {
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
