import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCompass, faGraduationCap, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Semuamentor = () => {
  const navigation = useNavigation();
  const [activeBox, setActiveBox] = useState(null); 

  const labels = ['FE', 'FH', 'FT', 'FK', 'FP', 'FKIP', 'FISIP', 'FMIPA', 'Fasilkom', 'FKM'];

  const handleBoxClick = (label) => {
    setActiveBox(label); 
  };

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

      <Text style={styles.title}>Jelajahi Semua Mentor</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {labels.map((label, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.box, activeBox === label && styles.activeBox]} 
            onPress={() => handleBoxClick(label)}
          >
            <Text style={styles.boxLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 10 }}>
      <View style={styles.mentorList}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.mentorBanner}
        >
          <View style={styles.mentorItem}>
  <View style={styles.iconContainer}>
    
    <Ionicons name="bookmark" size={50} color="#FFC727" style={styles.icon} />
    <Text style={styles.iconText}>30 rb/ {'\n'}bln</Text>
  </View>
  <Text style={styles.mentorName}>Song Cowo</Text>
  <Text style={styles.Job}>Ux Research, Product Designer</Text>

  <LinearGradient
    colors={['#FFC727', '#FFEDB9']}
    start={{ x: 0.8, y: 0.5 }}
    end={{ x: 1, y: 1 }}
    style={styles.buttonBackground}
  >
    <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
      <Text style={styles.buttonText}>Lihat Profil</Text>
    </TouchableOpacity>
  </LinearGradient>
</View>
      </LinearGradient>

  <Image 
    source={require('./assets/Mentor3.png')} 
    style={styles.mentorImage}
  />
  
</View>

<View style={styles.mentorList}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.mentorBanner}
        >
          <View style={styles.mentorItem}>
  <View style={styles.iconContainer}>
    
    <Ionicons name="bookmark" size={50} color="#FFC727" style={styles.icon} />
    <Text style={styles.iconText}>30 rb/ {'\n'}bln</Text>
  </View>
  <Text style={styles.mentorName}>Song Cewe</Text>
  <Text style={styles.Job}>Ux Research, Product Designer</Text>

  <LinearGradient
    colors={['#FFC727', '#FFEDB9']}
    start={{ x: 0.8, y: 0.5 }}
    end={{ x: 1, y: 1 }}
    style={styles.buttonBackground}
  >
    <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
      <Text style={styles.buttonText}>Lihat Profil</Text>
    </TouchableOpacity>
  </LinearGradient>
</View>
      </LinearGradient>

  <Image 
    source={require('./assets/Mentor2.png')} 
    style={styles.mentorImage}
  />
</View>

<View style={styles.mentorList}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.mentorBanner}
        >
          <View style={styles.mentorItem}>
  <View style={styles.iconContainer}>
    
    <Ionicons name="bookmark" size={50} color="#FFC727" style={styles.icon} />
    <Text style={styles.iconText}>30 rb/ {'\n'}bln</Text>
  </View>
  <Text style={styles.mentorName}>Song Cowo</Text>
  <Text style={styles.Job}>Ux Research, Product Designer</Text>

  <LinearGradient
    colors={['#FFC727', '#FFEDB9']}
    start={{ x: 0.8, y: 0.5 }}
    end={{ x: 1, y: 1 }}
    style={styles.buttonBackground}
  >
    <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
      <Text style={styles.buttonText}>Lihat Profil</Text>
    </TouchableOpacity>
  </LinearGradient>
</View>
      </LinearGradient>

  <Image 
    source={require('./assets/Mentor3.png')} 
    style={styles.mentorImage}
  />
  
</View>

<View style={styles.mentorList}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.mentorBanner}
        >
          <View style={styles.mentorItem}>
  <View style={styles.iconContainer}>
    
    <Ionicons name="bookmark" size={50} color="#FFC727" style={styles.icon} />
    <Text style={styles.iconText}>30 rb/ {'\n'}bln</Text>
  </View>
  <Text style={styles.mentorName}>Song Cewe</Text>
  <Text style={styles.Job}>Ux Research, Product Designer</Text>

  <LinearGradient
    colors={['#FFC727', '#FFEDB9']}
    start={{ x: 0.8, y: 0.5 }}
    end={{ x: 1, y: 1 }}
    style={styles.buttonBackground}
  >
    <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
      <Text style={styles.buttonText}>Lihat Profil</Text>
    </TouchableOpacity>
  </LinearGradient>
</View>
      </LinearGradient>

  <Image 
    source={require('./assets/Mentor2.png')} 
    style={styles.mentorImage}
  />
</View>

<View style={styles.mentorList}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.mentorBanner}
        >
          <View style={styles.mentorItem}>
  <View style={styles.iconContainer}>
    
    <Ionicons name="bookmark" size={50} color="#FFC727" style={styles.icon} />
    <Text style={styles.iconText}>30 rb/ {'\n'}bln</Text>
  </View>
  <Text style={styles.mentorName}>Song Cowo</Text>
  <Text style={styles.Job}>Ux Research, Product Designer</Text>

  <LinearGradient
    colors={['#FFC727', '#FFEDB9']}
    start={{ x: 0.8, y: 0.5 }}
    end={{ x: 1, y: 1 }}
    style={styles.buttonBackground}
  >
    <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.button}>
      <Text style={styles.buttonText}>Lihat Profil</Text>
    </TouchableOpacity>
  </LinearGradient>
</View>
      </LinearGradient>

  <Image 
    source={require('./assets/Mentor3.png')} 
    style={styles.mentorImage}
  />
</View>
</ScrollView>
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
    marginRight: 20,
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
    marginRight: 220,
    top: -50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#383838',
    marginTop: 40,
    marginLeft: 40,
  },
  scrollContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  box: {
    width: 60,
    height: 25,
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#CCC3A3',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
  },
  activeBox: {  
    backgroundColor: '#FEF0C3',
    borderColor: '#FFD700', 
  },
  boxLabel: {
    fontSize: 12, 
    color: '#383838', 
  },
  mentorBanner: {
    height: 90,
    width: 345,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignSelf: 'center',
  },
  mentorList: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  mentorImage: {
    width: 121,
    height: 130,
    position: 'absolute', 
    top: -40, 
    zIndex: 1, 
    alignSelf: 'flex-start',
    marginLeft: 40,
  },
  mentorName: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 50,
  },
  Job: {
    fontSize: 9,
    fontWeight: '400',
    color: '#FFF',
    textAlign: 'right',
    marginRight: 5,
    marginTop: 0,
  },
  buttonBackground: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
    marginRight: 52,
    marginTop: 5,
  },
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute', 
    top: -15, 
    left: 5, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    transform: [{ scale: 1.8 }], 
  },
  iconText: {
    marginLeft: -50, 
    fontSize: 14, 
    color: '#3470A2', 
    fontWeight: 'bold', 
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

export default Semuamentor;
