import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFont, faAt, faCamera, faImage, faLink, faPaperPlane, faHome, faBook, faGraduationCap, faEnvelope, faUser, faCompassDrafting, faCompass } from '@fortawesome/free-solid-svg-icons';
import { Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const Notifikasi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3470A2', '#63ABE6']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1, y: 1 }}
        style={styles.bannerBackground}
      >
        <LinearGradient
          colors={['#FFC727', '#FFEDB9']}
          start={{ x: 0.8, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.ellipse68}
        />

        <View style={styles.bannerContent}>
          <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="#2A6BA0" />
          </TouchableOpacity>

          <Text style={styles.bannerText}>Notifikasi</Text>

          <View style={styles.halfCircleContainer}>
            <View style={styles.ellipse71}>
              <LinearGradient
                colors={['#FFC727', '#FFEDB9']}
                start={{ x: 0.3, y: 0.3 }}
                end={{ x: 1, y: 1 }}
                style={styles.ellipse70}
              />
            </View>
          </View>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.belumTerbaca}>Belum Terbaca</Text>

        <View style={styles.notificationBox}>
          <View style={styles.notification}>
            <View style={styles.notificationIcon}>
              <View style={styles.ellipse}>
                <Ionicons name="notifications-outline" size={24} color="#127BB6" />
              </View>
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Jawaban Baru!</Text>
              <Text style={styles.notificationText}>Peterpointer telah menjawab pertanyaan Anda "Bagaimana cara..."</Text>
            </View>
            <Text style={styles.time}>2 m</Text>
          </View>
          <View style={styles.separator} />
        </View>

        <View style={styles.notificationBox}>
          <View style={styles.notification}>
            <View style={styles.notificationIcon}>
              <View style={styles.ellipse}>
                <Ionicons name="notifications-outline" size={24} color="#127BB6" />
              </View>
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Peluang Baru!</Text>
              <Text style={styles.notificationText}>PT Bukit Asam Tbk menyediakan posisi lowongan magang baru.</Text>
            </View>
            <Text style={styles.time}>5 m</Text>
          </View>
          <View style={styles.separator} />
        </View>

        <Text style={styles.belumTerbaca}>Notifikasi Terakhir</Text>

        <View style={styles.notificationBox}>
          <View style={styles.notification}>
            <View style={styles.notificationIcon}>
              <View style={styles.ellipse}>
                <Ionicons name="notifications-outline" size={24} color="#127BB6" />
              </View>
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Jawaban Baru!</Text>
              <Text style={styles.notificationText}>Peterpointer telah menjawab pertanyaan Anda "Bagaimana cara..."</Text>
            </View>
            <Text style={styles.time}>2 m</Text>
          </View>
          <View style={styles.separator} />
        </View>

        <View style={styles.notificationBox}>
          <View style={styles.notification}>
            <View style={styles.notificationIcon}>
              <View style={styles.ellipse}>
                <Ionicons name="notifications-outline" size={24} color="#127BB6" />
              </View>
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Peluang Baru!</Text>
              <Text style={styles.notificationText}>PT Bukit Asam Tbk menyediakan posisi lowongan magang baru.</Text>
            </View>
            <Text style={styles.time}>5 m</Text>
          </View>
          <View style={styles.separator} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  bannerBackground: {
    height: 150,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    position: 'relative', 
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40, 
    paddingVertical: 10, 
  },
  bannerText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 60,
  },
  halfCircleContainer: {
    position: 'absolute',
    right: Platform.OS === 'ios' ? -45 : -50, 
  },
  ellipse71: {
    width: width * 0.2,
    height: width * 0.2 * (85.46 / 88.82),
    borderRadius: 9999,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipse70: {
    position: 'absolute',
    bottom: height * 0, 
    right: width * 0.125,  
    width: width * 0.1,
    height: width * 0.1 * (41.48 / 44.81),
    borderRadius: 9999,
  },
  ellipse68: {
    position: 'absolute',
    width: Platform.OS === 'android' ? '80%' : 300,  
    height: Platform.OS === 'android' ? undefined : 320,
    aspectRatio: 300 / 320,
    borderRadius: 9999,
    top: Platform.OS === 'android' ? -height * 0.25 : -120,  
    left:  Platform.OS === 'android' ? -width * 0.2 : -120, 
    zIndex: -1, 
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  belumTerbaca: {
    color: '#225580',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  notificationBox: {
    padding: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
    marginTop: 10,
  },
  notification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  ellipse: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 9999,
    borderColor: '#127BB6',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    width: 26,
    height: 20,
  },
  notificationContent: {
    flex: 1,
    marginLeft: 10,
  },
  notificationTitle: {
    color: '#225580',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  notificationText: {
    color: '#383838',
    fontSize: 12,
    fontWeight: '300',
  },
  time: {
    color: '#595959',
    fontSize: 13,
    fontWeight: '300',
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

export default Notifikasi;
