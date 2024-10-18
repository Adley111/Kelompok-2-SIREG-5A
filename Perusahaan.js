import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCompass, faGraduationCap, faEnvelope, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

const Perusahaan = ({ navigation }) => {
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
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.bannerText}>CV Global</Text>
          <Text style={styles.subBannerText}>Teknik Infotama</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={19} color="white" />
            <Text style={styles.locationText}>Kota Yogyakarta, D.I. Yogyakarta</Text>
          </View>
          <Image
            style={styles.image} 
            source={require('./assets/perusahaanD.png')}
          />
        </View>

        <View style={styles.buttonPerusahaanImpian}>
          <LinearGradient
            colors={['#FFC727', '#FFEDB9']}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.8, y: 1.0 }}
            style={styles.rectangle15504}
          />
          <View style={styles.frame163123}>
            <View style={styles.group163066}>
              <Text style={styles.perusahaanImpian}>Perusahaan impian</Text>
              <TouchableOpacity style={styles.favorite}>
                <View style={styles.vector15}>
                  <Ionicons name="heart-outline" size={15} color="#997100"/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      
       
        <View style={styles.formContainer}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 60 }}>
        <View style={styles.container}>
      <View style={styles.profilPerusahaan}>
      
        <Text style={styles.headerText}>Profil Perusahaan</Text>
        <Text style={styles.bodyText}>
          CV Global Teknik Infotama bergerak di bidang teknologi terbaik dunia dan merupakan sebuah perusahaan yang selalu menjunjung tinggi inovasi dan kreativitas dalam berkarya.
        </Text>
      </View>
    </View>
    <View style={styles.container}>
      <Text style={styles.posisiTersedia}>Posisi Tersedia</Text>
    </View>

    
    <View style={styles.frame163144}>
      <View style={styles.frame163143}>
        <Text style={styles.uiUxDesigner}>UI/UX Designer</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Posisi')}>
        <View style={styles.group163075}>
          <View style={styles.rectangle15491} />
          <Ionicons name="chevron-forward-outline"/>
        </View>
        </TouchableOpacity>
      </View>
    </View>

  <View style={styles.frame163144}>
    <View style={styles.frame163143}>
      <Text style={styles.uiUxDesigner}>Front End Developer</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Posisi')}>
      <View style={styles.group163075}>
        <View style={styles.rectangle15491} />
        <Ionicons name="chevron-forward-outline"/>
      </View>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.frame163144}>
    <View style={styles.frame163143}>
      <Text style={styles.uiUxDesigner}>Back End Developer</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Posisi')}>
      <View style={styles.group163075}>
        <View style={styles.rectangle15491} />
        <Ionicons name="chevron-forward-outline"/>
      </View>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.frame163144}>
    <View style={styles.frame163143}>
      <Text style={styles.uiUxDesigner}>IT Consultant</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Posisi')}>
      <View style={styles.group163075}>
        <View style={styles.rectangle15491} />
        <Ionicons name="chevron-forward-outline"/>
      </View>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.frame163144}>
    <View style={styles.frame163143}>
      <Text style={styles.uiUxDesigner}>Data Analyst</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Posisi')}>
      <View style={styles.group163075}>
        <View style={styles.rectangle15491} />
        <Ionicons name="chevron-forward-outline"/>
      </View>
      </TouchableOpacity>
    </View>
  </View>

    <View style={styles.frame163144}>
      <View style={styles.frame163143}>
        <Text style={styles.uiUxDesigner}>UI/UX Designer</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Posisi')}>
        <View style={styles.group163075}>
          <View style={styles.rectangle15491} />
          <Ionicons name="chevron-forward-outline"/>
        </View>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.frame163144}>
    <View style={styles.frame163143}>
      <Text style={styles.uiUxDesigner}>Front End Developer</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Posisi')}>
      <View style={styles.group163075}>
        <View style={styles.rectangle15491} />
        <Ionicons name="chevron-forward-outline"/>
      </View>
      </TouchableOpacity>
    </View>
  </View>
    </ScrollView>
</View> 

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
    alignItems: 'flex-start', 
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 80,
    width: '100%',
    paddingHorizontal: 20,
  },

  textContainer: {
    alignItems: 'flex-start', 
    marginVertical: 5,
    paddingHorizontal: 20, 
  },

  bannerText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left', 
  },

  subBannerText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 70,
  },
  
  locationText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Outfit', 
    fontWeight: '300',
    marginLeft: 5, 
  },
  
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -80, 
  },

  buttonPerusahaanImpian: {
    width: 147.76,
    height: 27,
    position: 'relative',
    marginVertical: 10, 
    alignSelf: 'flex-start', 
    left: 20,
  },
  rectangle15504: {
    width: '100%', 
    height: '100%',
    borderRadius: 10,
  },
  frame163123: {
    width: '90%', 
    height: 18,
    left: 8.44,
    top: 4,
    position: 'absolute',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    gap: 3,
  },
  group163066: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  perusahaanImpian: {
    color: '#997100',
    fontSize: 12,
    fontFamily: 'Outfit',
    fontWeight: '500',
  },
  favorite: {
    marginLeft: 5, 
  },
  vector15: {
    width: 15.71,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    borderRadius: 40,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingBottom: 20, 
    position: 'relative', 
  },
  
  profilPerusahaan: {
    height: 107,
    position: 'relative', 
  },
  headerText: {
    width: 156,
    height: 28,
    position: 'absolute',
    top: 10,
    left: 60,
    color: '#143C5E',
    fontSize: 18,
    fontFamily: 'Outfit', 
    fontWeight: '700',
  },
  bodyText: {
    width: 315,
    height: 72,
    top: 40,
    left: 60,
    color: '#383838',
    fontSize: 14,
    fontFamily: 'Outfit',
    fontWeight: '300',
    textAlign: 'justify',  
  },
  posisiTersedia: {
    width: 166,
    height: 22,
    top: 30,
    left: 60,
    color: '#143C5E',
    fontSize: 18,
    fontFamily: 'Outfit',  
    fontWeight: '700',
  },
  frame163144: {
    width: 312,
    height: 60,
    padding: 16,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top: 50,
    left: 60,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 10,
    
  },
  frame163143: {
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexDirection: 'row', 
    width: '100%', 
  },
  uiUxDesigner: {
    color: '#143C5E',
    fontSize: 15,
    fontFamily: 'Outfit',
    fontWeight: '500',
    flexWrap: 'wrap', 
    marginLeft: 5
  },
  group163075: {
    width: 29,
    height: 28,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  rectangle15491: {
    width: 29,
    height: 30,
    position: 'absolute',
    backgroundColor: '#A4C7E4',
    borderRadius: 7,
    backdropFilter: 'blur(15px)', 
  },
  scrollContainer: {
    maxHeight: 520,  
    marginBottom: 20,
    top: 20,
  },
  footer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 2, 
    height: 83,
  },
  
  footerButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  
  footerButton: {
    alignItems: 'center',
    flex: 1, 
    justifyContent: 'center',
  },
  
  footerButtonText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
});

export default Perusahaan;