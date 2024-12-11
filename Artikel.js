import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faHome, faCompass, faGraduationCap, faEnvelope, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

const BannerComponent = () => {  
    const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
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

        <Text style={styles.bannerText}>Panduan Karir</Text>

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
    </View>
  );
};

const Artikel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BannerComponent />
      <Image
        style={styles.image}
        source={require('./assets/cv 1.png')} 
      />

      <View style={styles.content}>
        <Text style={styles.title}>Tips dan Trik Membuat CV ATS</Text>
      </View>

      <View style={styles.profileContainer}>
      <Image 
        style={styles.profileImage}
        source={require('./assets/aliando.png')} 
      />
      <Text style={styles.nameText}>Aliando Rozi</Text>
    </View>

    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>10 Mei 2022</Text>
    </View>

      <Text style={styles.text}>
        Pernahkah Anda mengirimkan CV untuk posisi impian Anda, hanya untuk tidak mendapatkan respons apa pun? 
        Mungkin CV Anda tidak berhasil melewati sistem pelacakan aplikasi (ATS) yang digunakan oleh banyak perusahaan 
        untuk memfilter pelamar. Nah, jangan khawatir! Di sini, kami memiliki tips dan trik interaktif untuk membantu Anda 
        membuat CV ATS yang menonjol:
      </Text>
      
      <Text style={styles.boldText}>1. Kata Kunci “Kunci”!</Text>
      <Text style={styles.text}>
        Dalam CV ATS, kata kunci adalah raja. Perhatikan kata kunci yang tercantum dalam deskripsi pekerjaan dan 
        pastikan untuk menyelipkannya ke dalam CV Anda dengan bijak. Bayangkan Anda adalah ATS. Apakah CV Anda memiliki 
        kata kunci yang relevan?
      </Text>
      
      <Text style={styles.boldText}>2. Sederhanakan Format</Text>
      <Text style={styles.text}>
        ATS tidak suka rumit. Gunakan format yang sederhana dan mudah dibaca. Hindari tabel, grafik, atau kolom ganda 
        yang bisa membingungkan sistem. Pilih font yang mudah dibaca dan pastikan informasi penting mudah ditemukan.
      </Text>
      
      <Text style={styles.boldText}>3. Optimalkan Judul</Text>
      <Text style={styles.text}>
        Judul CV Anda adalah peluang untuk menarik perhatian ATS. Gunakan judul yang jelas dan sesuai dengan pekerjaan 
        yang Anda lamar. Jangan ragu untuk menyesuaikan judul Anda dengan judul pekerjaan yang Anda inginkan.
      </Text>
      
      <Text style={styles.boldText}>4. Pentingnya Metadata</Text>
      <Text style={styles.text}>
        Metadata, seperti nama file CV Anda, juga bisa berpengaruh. Berikan nama file yang sesuai dengan nama Anda dan 
        judul pekerjaan yang Anda lamar. Ini membantu ATS mengidentifikasi CV Anda dengan lebih baik.
      </Text>
      
      <Text style={styles.boldText}>5. Peran dan Prestasi</Text>
      <Text style={styles.text}>
        Jangan hanya menyebutkan tugas-tugas Anda. Ceritakan prestasi dan dampak yang Anda buat di posisi sebelumnya. 
        Berikan contoh konkret tentang bagaimana Anda mengatasi tantangan atau mencapai tujuan.
      </Text>
      
      <Text style={styles.boldText}>6. Pemformatan yang Konsisten</Text>
      <Text style={styles.text}>
        Konsistensi adalah kunci. Pastikan pemformatan, seperti penulisan tanggal atau pembuatan daftar, konsisten di 
        seluruh CV Anda. Ini membantu ATS memproses informasi dengan lebih baik.
      </Text>
      
      <Text style={styles.boldText}>7. Uji dan Perbaiki</Text>
      <Text style={styles.text}>
        Terakhir, tapi tidak kalah penting, uji CV Anda menggunakan alat ATS yang tersedia secara online. Ini membantu 
        Anda melihat bagaimana CV Anda diproses oleh sistem dan memberi Anda kesempatan untuk melakukan perbaikan jika diperlukan.
      </Text>

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
    backgroundColor: '#fff',
  },
 mainContainer: {
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
    marginTop: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom: 20,
    textAlign: 'right',
    marginTop: 20,
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
  panduanKarir: {
    position: 'absolute',
    left: 180,
    top: 70,
    textAlign: 'right',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Outfit', // Pastikan font ini di-load
    fontWeight: '700',
  },
  ellipse71: {
    width: 88.82,
    height: 85.46,
    position: 'absolute',
    left: 106.05,
    top: -15,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: 'white',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    top:50,
    textAlign: 'center',
    marginBottom: 25,
  },
  ellipse: {
    width: 283.56,
    height: 262.49,
    borderRadius: 9999,
    transform: [{ rotate: '0.7rad' }], 
  },
  shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, 
    overflow: 'hidden', 
  image: {
    width: 350,
    height: 200,
    top: 40,
    alignSelf: "center",
  },
  profileContainer: {
    width: 87,
    height: 19,
    flexDirection: 'row', 
    alignItems: 'center', 
    top: 20,
    left: 50,
  },
  nameText: {
    fontSize: 10,
    fontFamily: 'Outfit', 
    fontWeight: '500',
    color: '#225580',
    marginLeft: 10,
  },
  profileImage: {
    width: 19,
    height: 19,
    borderRadius: 9999, 
  },
  dateContainer: {
    width: 57, 
    alignItems: 'flex-end', 
  },
  dateText: {
    fontSize: 10,
    fontFamily: 'Outfit', 
    fontWeight: '500',
    color: '#225580',
    textAlign: 'right',
    top: 5,
    left: 313,
    width: 300,
  },
  text: {
    width: 320,
    textAlign: 'justify',
    color: '#383838',
    fontSize: 14,
    fontFamily: 'Outfit', 
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 10,
    left: 50,
    top: 20,
    textAlign: 'justify',
  },
  boldText: {
    width: 320,
    color: '#383838',
    fontSize: 14,
    fontFamily: 'Outfit', 
    fontWeight: '700',
    lineHeight: 25,
    top: 25,
    left: 50,
    marginBottom: 10,
    textAlign: 'justify',
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

export default Artikel;