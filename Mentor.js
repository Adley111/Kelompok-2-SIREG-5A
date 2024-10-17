import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCompass, faGraduationCap, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Mentor = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3470A2', '#63ABE6']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1, y: 1 }}
        style={styles.bannerBackground}
      >
        <View style={styles.ellipseContainer}>
          <LinearGradient
            colors={['#FFC727', '#FFEDB9']}
            start={{ x: 0.8, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.ellipseLarge}
          />
        </View>

        <View style={styles.bannerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="#2A6BA0" />
          </TouchableOpacity>
          <View style={styles.ellipseSmall}></View>
        </View>

        <View style={styles.mentorImage}>
          <Image style={styles.profileImage} source={require('./assets/Mentor2.png')} />
        </View>
      </LinearGradient>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Song Song</Text>
        <Text style={styles.Job}>Ux Research, {'\n'}Product Designer</Text>
        <Text style={styles.Description}>
          Sebagai seorang UI/UX Research, saya menggali pemahaman mendalam tentang preferensi dan kebutuhan pengguna untuk menginformasikan desain produk yang intuitif dan memuaskan.
        </Text>

        <View style={styles.Mentorcontainer}>
          <View style={styles.smallBox}>
            <View style={styles.Mentorcontent}>
                <Ionicons name="star" size={24} color={'#225580'}/>
                <Text style={styles.Mentortext}>4.9</Text>
            </View>
          </View>

          <View style={styles.middlebox}>
            <View style={styles.Mentorcontent}>
                <Ionicons name="pricetags" size={24} color={'#225580'}/>
                <Text style={styles.Mentortext}>30 rb/bln</Text>
            </View>
          </View>

          <View style={styles.smallBox}>
            <View style={styles.Mentorcontent}>
                <Ionicons name="play-circle" size={24} color={'#225580'}/>
                <Text style={styles.Mentortext}>12 jam</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonAndIconContainer}>
            <TouchableOpacity style={styles.daftarMentoring}>
                <Text style={styles.daftarMentoringText}>Daftar Mentoring Percobaan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.heartIcon}>
                <Ionicons name="heart-outline" size={35} color={'#225580'} marginTop={15} />
            </TouchableOpacity>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  bannerBackground: {
    height: 452,
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    position: 'relative',
    zIndex: -1,
    overflow: 'hidden',
  },
  ellipseContainer: {
    position: 'absolute',
    top: -150,
    left: -150,
  },
  ellipseLarge: {
    width: 300,
    height: 320,
    borderRadius: 9999,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingVertical: 10,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    top: 20,
  },
  ellipseSmall: {
    width: 90,
    height: 90,
    borderRadius: 9999,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginRight: 200,
    bottom: 120,
    top: 0,
  },
  profileImage: {
    bottom: 40,
  },
  formContainer: {
    backgroundColor: '#FFF',
    width: 360,
    height: 473,
    borderRadius: 20,
    marginTop: -50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingBottom: 20, 
    position: 'relative', 
    alignSelf: 'center',
  },
  formTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#225580',
    textAlign: 'center',
    margin: 20,
    marginBottom: 15,
  },
  Job: {
    fontSize: 15,
    fontWeight: '400',
    color: '#225580',
    textAlign: 'center',
    margin: 30,
    marginTop: 0,
  },
  Description: {
    fontSize: 13,
    fontWeight: '300',
    color: '#225580',
    textAlign: 'center',
    margin: 25,
    marginTop: 0,
    textAlign: 'justify',
  },
  Mentorcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
    marginRight: 12,
  },
  smallBox: {
    width: 95,
    height: 50,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middlebox: {
    width: 120,
    height: 50,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Mentorcontent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Mentortext: {
    fontSize: 15,
    fontWeight: '700',
    color: '#225580',
    marginLeft: 5,
  },
  buttonAndIconContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  daftarMentoring: {
    marginTop: 20,
    backgroundColor: '#FFC727',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'left',
    marginRight: 30,
    height: 50,
  },
  daftarMentoringText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
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

export default Mentor;
