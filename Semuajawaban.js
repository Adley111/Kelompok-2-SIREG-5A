import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faGraduationCap, faEnvelope, faUser, faCompass, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Semuajawaban = ({ navigation }) => (
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
        <Text style={styles.bannerText}>Jawaban</Text>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.shape1} />
        <View style={styles.shape2} />
        <LinearGradient
          colors={['#F5B600', '#FFEDB9']}
          start={{ x: 0.3, y: 2 }}
          end={{ x: 3, y: 1 }}
          style={styles.semiCircle}
        />
        <LinearGradient
          colors={['#F5B600', '#FFEDB9']}
          start={{ x: 0.1, y: 2 }}
          end={{ x: 3, y: 0 }}
          style={styles.innerCircle}
        />
      </View>
    </LinearGradient>

    <View style={styles.textContainer}>
      <Text style={styles.textTitle}>
        Bagaimana membuat CV yang dapat menarik mitra perusahaan?
      </Text>
        <View style={styles.card}>
          <View style={styles.userInfoContainer}>
            <Image style={styles.profileImage} source={require('./assets/profilenajwa.png')} />
            <Text style={styles.userName}>Najwa Shahib</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.description}>
            Pastikan CV Anda mencerminkan keterampilan relevan dan prestasi yang sesuai dengan perusahaan target Anda. Gunakan kata kunci yang tepat, sertakan angka atau statistik, dan periksa kembali untuk kesalahan. Desain yang bersih, profil pribadi yang menarik, dan fokus pada nilai yang Anda tawarkan akan menarik perhatian mitra perusahaan.
          </Text>
          <View style={styles.likeTextWrapper}>
            <FontAwesomeIcon icon={faHeart} size={16} color="#999999" />
            <FontAwesomeIcon icon={faComment} size={16} color="#999999" style={styles.commentIcon} />
            <Image style={styles.profileImageSmall} source={require('./assets/profile 1.png')} />
            <Text style={styles.likeText}> Disukai oleh ucok baba dan 10 lainnya</Text>
          </View>
        </View>

        {/* Additional Cards */}
        <View style={styles.card}>
          <View style={styles.userInfoContainer}>
            <Image style={styles.profileImage} source={require('./assets/profile 2.png')} />
            <Text style={styles.userName}>Ahmad Zaki</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.description}>
          Pastikan CV Anda mencerminkan keterampilan relevan dan prestasi yang sesuai dengan perusahaan target Anda. Gunakan kata kunci yang tepat, sertakan angka atau statistik, dan periksa kembali untuk kesalahan. Desain yang bersih, profil pribadi yang menarik, dan fokus pada nilai yang Anda tawarkan akan menarik perhatian mitra perusahaan.          </Text>
          <View style={styles.likeTextWrapper}>
            <FontAwesomeIcon icon={faHeart} size={16} color="#999999" />
            <FontAwesomeIcon icon={faComment} size={16} color="#999999" style={styles.commentIcon} />
            <Image style={styles.profileImageSmall} source={require('./assets/profile 1.png')} />
            <Text style={styles.likeText}> Disukai oleh rina dan 5 lainnya</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.userInfoContainer}>
            <Image style={styles.profileImage} source={require('./assets/profile 2.png')} />
            <Text style={styles.userName}>Budi Santoso</Text>
          </View>
          <View style={styles.separator} />
          <Text style={styles.description}>
          Pastikan CV Anda mencerminkan keterampilan relevan dan prestasi yang sesuai dengan perusahaan target Anda. Gunakan kata kunci yang tepat, sertakan angka atau statistik, dan periksa kembali untuk kesalahan. Desain yang bersih, profil pribadi yang menarik, dan fokus pada nilai yang Anda tawarkan akan menarik perhatian mitra perusahaan.          </Text>
          <View style={styles.likeTextWrapper}>
            <FontAwesomeIcon icon={faHeart} size={16} color="#999999" />
            <FontAwesomeIcon icon={faComment} size={16} color="#999999" style={styles.commentIcon} />
            <Image style={styles.profileImageSmall} source={require('./assets/profile 1.png')} />
            <Text style={styles.likeText}> Disukai oleh nita dan 7 lainnya</Text>
          </View>
        </View>
    </View>

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  bannerText: {
    flex: 1,
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 30,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF', 
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    zIndex: 0,
  },  
  semiCircle: {
    position: 'absolute',
    bottom: -20,
    right: -400,
    width: '100%',
    height: 380,
    borderRadius: 9999,
    zIndex: 0,
    opacity: 0.6,
  },
  innerCircle: {
    position: 'absolute',
    bottom: 120,
    left: -390,
    width: '100%',
    height: 380,
    borderRadius: 9999,
    zIndex: 0,
    opacity: 0.6,
  },
  textContainer: {
    width: 334,
    position: 'absolute',
    left: 28,
    top: 136,
    alignItems: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    left: 5,
  },

  circleContainer: {
    width: 739.13,
    height: 578.71,
    position: 'relative',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    width: 380,
    alignSelf: 'center',
    marginLeft: 25,
    
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    height: 1,
    maxWidth: '105%',
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  likeTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  },
  commentIcon: {
    marginLeft: 15,
  },
  profileImageSmall: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginLeft: 15,
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
  activeNavText: {
    color: '#FFC727',
    fontWeight: 'bold',
  },
  navText: {
    color: 'gray',
  },
  container: {
    paddingBottom: 20,
  },
});

export default Semuajawaban;