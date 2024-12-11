import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFont, faAt, faCamera, faImage, faLink, faPaperPlane, faHome, faBook, faGraduationCap, faEnvelope, faUser, faCompassDrafting, faCompass } from '@fortawesome/free-solid-svg-icons';

const Tanyajawab = ({ navigation }) => {
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
          <Text style={styles.bannerText}>Tanya Jawab</Text>
        </View>

        <View style={styles.overlayContainer}>
          <View style={styles.rectangle}>
            <Text style={styles.swipeText}>Usap ke kiri/ke kanan</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.content}>
                <View style={styles.backgroundOverlay} />
                <View style={styles.textContainer}>
                  <View style={styles.tagsContainer}>
                    <Text style={styles.tag}>#magang </Text>
                    <Text style={styles.tag}>#CV</Text>
                  </View>
                  <Text style={styles.title}>
                    Bagaimana membuat CV yang dapat <Text style={styles.bold}>menarik</Text> mitra perusahaan?
                  </Text>
                  <View style={styles.infoContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Semuajawaban')}>
                      <View style={styles.infoRow}>
                        <Ionicons name="chatbubbles-outline" size={18} color="#4E8F54" />
                        <Text style={styles.answerText}>Jawaban</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.infoRow}>
                        <Ionicons name="eye-outline" size={18} color="#4E8F54" />
                        <Text style={styles.viewCount}>15rb x dilihat</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.footerContainer}>
                  <View style={styles.userContainer}>
                    <Image 
                      style={styles.userImage} 
                      source={require('./assets/rabbit.png')} 
                    />
                    <View style={styles.userInfo}>
                      <Text style={styles.userName}>Peterpointer</Text>
                      <Text style={styles.userRole}>UI/UX Designer</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Jawaban')} style={styles.button}>
                    <Text style={styles.buttonText}>Jawab</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>


        
        <LinearGradient
          colors={['#F5B600', '#FFEDB9']}
          start={{ x: 0.3, y: 2 }}
          end={{ x: 3, y: 1 }}
          style={styles.semiCircle}
        />
        <LinearGradient
          colors={['#F5B600', '#FFEDB9']}
          start={{ x: 1, y: 2 }}
          end={{ x: 1, y: 0.2 }}
        style={styles.innerCircle} 
        
        />

        <TouchableOpacity onPress={() => navigation.navigate('Tanya')} style={styles.addButton}>
          <Ionicons name="add-outline" size={40} color="black" />
        </TouchableOpacity>
      </LinearGradient>

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
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  overlayContainer: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',  
    marginTop: 70, 
  },
  rectangle: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#FFC727',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
    padding: 10,
  },
  swipeText: {
    color: '#997100',
    fontSize: 15,
    fontFamily: 'Outfit',
    fontWeight: '600',
  },
  container: {
    width: 318,
    height: 453,
    position: 'relative',
  },
  card: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    zIndex: 1,
  },
  content: {
    width: 318,
    height: 427,
    position: 'relative',
  },
  backgroundOverlay: {
    width: 318,
    height: 427,
    position: 'absolute',
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textContainer: {
    width: 263,
    height: 220,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'left',
    left: 29,
    top: 64,
  },
  title: {
    color: '#545454',
    fontSize: 27,
    fontFamily: 'Outfit',
    fontWeight: '700',
    textAlign: 'left',
  },
  bold: {
    fontWeight: '800',
  },
  infoContainer: {
    width: 190,
    height: 26,
    position: 'absolute',
    top: 194,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  answerText: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Outfit',
    fontWeight: '300',
  },
  viewCount: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Outfit',
    fontWeight: '300',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 2,
    position: 'absolute',
    top: 0,
  },
  tag: {
    color: '#3470A2',
    fontSize: 13,
    fontFamily: 'Outfit',
    fontWeight: '600',
  },
  footerContainer: {
    width: 279.89,
    height: 44,
    position: 'absolute',
    left: 17,
    top: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    color: '#225580',
    fontSize: 13,
    fontFamily: 'Outfit',
    fontWeight: '700',
  },
  userRole: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Outfit',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#225580',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Outfit',
    fontWeight: '500',
  },
  semiCircle: {
    position: 'absolute',
    bottom: 0,  
    left: -130,  
    width: 270,  
    height: 380,  
    borderRadius: '9999', 
    overflow: 'hidden',
    zIndex: -1,  
  },
  innerCircle: {
    position: 'absolute',
    bottom: 80,  
    left: 90,   
    width: 98,  
    height: 98,  
    borderRadius: 999, 
    backgroundColor: '#FFDD75', 
  },
  addButton: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: '#FFC727',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Tanyajawab;
