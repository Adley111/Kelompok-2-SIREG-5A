import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCompass, faGraduationCap, faEnvelope, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Mentoring = () => {
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

          <Text style={styles.bannerText}>Mentoring</Text>

          <View style={styles.halfCircleContainer}>
            <View style={styles.ellipseSmall}>
              <LinearGradient
                colors={['#FFC727', '#FFEDB9']}
                start={{ x: 0.3, y: 0.3 }}
                end={{ x: 1, y: 1 }}
                style={styles.innerEllipse}
              />
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Mentor Card Section */}
      <View style={styles.mentorCardContainer}>
        <LinearGradient
          colors={['#3672A4', '#A2CBED']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.mentorCardBackground}
        >
          <View style={styles.mentorCardContent}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <FontAwesomeIcon icon={faSearch} size={20} color="gray" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Cari mentor, bidang, atau topik..."
                placeholderTextColor="gray"
              />
            </View>

            {/* Mentor Text and Image */}
            <View style={styles.mentorInfoContainer}>
              <Text style={styles.mentorCardText}>
                Mari terhubung dengan{' '}
                <Text style={styles.boldText}>+10k mentor</Text> terbaik terkait magangmu!
              </Text>
              <Image
                style={styles.mentorImage}
                source={require('./assets/Mentor.png')}
                alt="mentor"
              />
            </View>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.topMentorContainer}>
        <Text style={styles.title}>Top Mentor</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Semuamentor')}style={styles.viewAllContainer}>
        <Text style={styles.viewAll}>Lihat semua</Text>
        <AntDesign name="arrowright" size={16} color="#FFF" />
        </TouchableOpacity>
  </View>

  <View style={styles.cardContainer}>
      <View style={styles.card}>
      <LinearGradient colors={['#FFEDB9', '#FFC727']} style={styles.gradientBackground} />
        <View style={styles.gradientBackgroundBlue} />
        <View style={styles.circleYellow} />
        <View style={styles.circleLightYellow} />
        <Image style={styles.image} source={require('./assets/Mentor2.png')} />
        <Text style={styles.cardName}>Song Cwek</Text>
        <Text style={styles.cardRole}>UX Research, Product Designer</Text>
        <View style={styles.iconContainer}>
            <Ionicons name="bookmark" size={50} color="#FFC727" style={styles.icon} />
            <Text style={styles.iconText}>30 rb/ {'\n'}bln</Text>
          </View>
        <View style={styles.profileButtonYellow}>
          <Text style={styles.profileButtonText}>Lihat profil</Text>
        </View>
      </View>

      <View style={styles.card}>
        <LinearGradient
          colors={['#FFEDB9', '#FFC727']} 
          start={{ x: 5, y: 0.5 }}
          end={{ x: 0.1, y: 0.5 }} 
          style={styles.card}
        >
        <View style={styles.circleBlue} />
        <View style={styles.circleLightBlue} />
        <Image style={styles.imageSmall} source={require('./assets/Mentor3.png')} />
        <Text style={styles.cardName}>Song Cwok</Text>
        <Text style={styles.cardRole}>UX Research, Product Designer</Text>
        <View style={styles.iconContainer}>
            <Ionicons name="bookmark" size={50} color="#3672A4" style={styles.icon} />
            <Text style={styles.iconText2}>30 rb/ {'\n'}bln</Text>
          </View>
        <LinearGradient colors={['#63ABE6', '#A0C7E7']} style={styles.profileButton}></LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate('Mentor')}>
        <View style={styles.profileButtonBlue}>
          <Text style={styles.profileButtonText}>Lihat profil</Text>
        </View>
        </TouchableOpacity>
        </LinearGradient>
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
    height: 120,
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
    top: -120,
    left: -120,
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
  },
  bannerText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 30,
    marginBottom: 20,
  },
  halfCircleContainer: {
    position: 'absolute',
    right: -44.40,
  },
  ellipseSmall: {
    width: 90,
    height: 90,
    borderRadius: 9999,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    left: -220,
  },
  mentorCardContainer: {
    paddingHorizontal: 20,
    marginTop: 20, 
  },
  mentorCardBackground: {
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mentorCardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mentorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mentorCardText: {
    color: '#FFF',
    fontSize: 20,  
    fontWeight: '500',
    marginRight: 0, 
    maxWidth: '60%', 
    flexWrap: 'wrap', 
    lineHeight: 25,
},

  boldText: {
    fontWeight: '800',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 30,
    fontSize: 16,
  },
  mentorImage: {
    width: 139,
    height: 148,
    left: 0,
  },
  topMentorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  
  title: {
    color: '#383838',
    fontSize: 25,
    fontFamily: 'Outfit',
    fontWeight: '700',
  },
  
  viewAll: {
    color: '#3470A2',
    fontSize: 13,
    fontFamily: 'Outfit',
    fontWeight: '500',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  card: {
    width: 160,
    height: 248,
    backgroundColor: '#FFC727',
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradientBackgroundYellow: {
    position: 'absolute',
    backgroundColor: '#FFEDB9',
    borderRadius: 20,
    width: 160,
    height: 248,
    overflow: 'hidden',
  },
  gradientBackgroundBlue: {
    position: 'absolute',
    backgroundColor: '#63ABE6',
    borderRadius: 20,
    width: 160,
    height: 248,
    overflow: 'hidden',
  },
  circleYellow: {
    position: 'absolute',
    left: 88,
    top: -89,
    width: 168,
    height: 156,
    backgroundColor: '#FEF7DE',
    borderRadius: 9999,
    opacity: 0.8,
  },
  circleLightYellow: {
    position: 'absolute',
    left: -77,
    top: 116,
    width: 168,
    height: 156,
    backgroundColor: '#FEEFC2',
    borderRadius: 9999,
    opacity: 0.8,
  },
  circleBlue: {
    position: 'absolute',
    left: 98,
    top: -89,
    width: 168,
    height: 156,
    backgroundColor: '#A0C7E7',
    borderRadius: 9999,
    opacity: 0.8,
  },
  circleLightBlue: {
    position: 'absolute',
    left: -46,
    top: 118,
    width: 140,
    height: 128,
    backgroundColor: '#A0C7E7',
    borderRadius: 9999,
    opacity: 0.8,
  },
  image: {
    position: 'absolute',
    left: -11,
    top: 112,
    width: 129,
    height: 141,
  },
  imageSmall: {
    position: 'absolute',
    left: -11,
    top: 112,
    width: 129,
    height: 141,
  },
  cardName: {
    position: 'absolute',
    left: 18,
    top: 60,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Outfit',
    fontWeight: '900',
  },
  cardRole: {
    position: 'absolute',
    left: 18,
    top: 83,
    color: 'white',
    fontSize: 10,
    fontFamily: 'Outfit',
    fontWeight: '300',
  },
  iconContainer: {
    position: 'absolute', 
    top: 0, 
    left: 20, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    transform: [{ scale: 1.5 }], 
  },
  iconText: {
    marginLeft: -44, 
    fontSize: 12, 
    color: '#3470A2', 
    fontWeight: 'bold', 
    textAlign: 'center',
  },  
  iconText2: {
    marginLeft: -44, 
    fontSize: 12, 
    color: '#FFC727', 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  profileButtonYellow: {
    position: 'absolute',
    left: 80,
    top: 223,
    backgroundColor: '#63ABE6',
    width: 67,
    height: 16,
    borderRadius: 10,
  },
  profileButtonBlue: {
    position: 'absolute',
    left: 80,
    top: 223,
    backgroundColor: '#63ABE6',
    width: 67,
    height: 16,
    borderRadius: 10,
  },
  profileButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
    fontFamily: 'Outfit',
    fontWeight: '600',
  },
  
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    height: 70,
  },
  footerButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
    color: 'gray',
  },
  
});

export default Mentoring;