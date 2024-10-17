import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFont, faAt, faCamera, faImage, faLink, faPaperPlane, faHome, faBook, faGraduationCap, faEnvelope, faUser, faCompassDrafting, faCompass } from '@fortawesome/free-solid-svg-icons';

const Informasi = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false); 

  return (
    <View style={styles.container}>
      {/* Banner Section */}
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
        
        <LinearGradient
          colors={['#FFEDB9', '#FFC727']} 
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }} 
          style={styles.innerCircle}
        />

        <View style={styles.bannerContent}>
          <TouchableOpacity style={styles.circle} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="#2A6BA0" />
          </TouchableOpacity>

          <Text style={styles.bannerText}>Mitra {'\n'} Perusahaan</Text>
        </View>
      </LinearGradient>

      {/* Search Bar Section */}
      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 60 }}>
      <View style={styles.searchBoxContainer}>
        <View style={styles.searchBox}>
          <View style={styles.searchInput}>
            <AntDesign name="search1" size={16} color="rgba(0, 0, 0, 0.36)" style={styles.searchIcon} />
            <Text style={styles.searchPlaceholder}>Cari...</Text>
          </View>
        </View>

        {/* Filter Button */}
        <LinearGradient
          colors={['#3470A2', '#13293C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.filterButton}
        >
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AntDesign name="filter" size={20} color="#FFF" />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Image Section */}
      
      <View style={styles.Mitralist}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainer}
        >
          <Image 
            source={require('./assets/perusahaanA.png')} 
            style={styles.companyImage} 
          />
        </LinearGradient>
      
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainerRight}
        >
          <Text style={styles.companyName} >PT. Bukit Asam {'\n'}Tbk</Text> 

          <View style={styles.company}>
          <Text style={styles.companyDescription}>Tanjung Enim, Muara Enim Sumsel</Text>
          <Ionicons name="heart-outline" size={26} marginRight={10} color={'#3470A2'}/>
          <TouchableOpacity onPress={() => navigation.navigate('Perusahaan')} style={styles.companyButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="chevron-forward-outline" size={18} color={'#3470A2'}/>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </View>

      <View style={styles.Mitralist}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainer}
        >
          <Image 
            source={require('./assets/perusahaanB.png')} 
            style={styles.companyImage} 
          />
        </LinearGradient>
      
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainerRight}
        >
          <Text style={styles.companyName} >PT. Anugrah {'\n'}Kharisma Jaya</Text> 

          <View style={styles.company}>
          <Text style={styles.companyDescription}>Jakarta Barat, DKI Jakarta</Text>
          <Ionicons name="heart-outline" size={26} marginRight={10} color={'#3470A2'}/>
          <TouchableOpacity onPress={() => navigation.navigate('Perusahaan')} style={styles.companyButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="chevron-forward-outline" size={18} color={'#3470A2'}/>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </View>

      <View style={styles.Mitralist}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainer}
        >
          <Image 
            source={require('./assets/perusahaanC.png')} 
            style={styles.companyImage} 
          />
        </LinearGradient>
      
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainerRight}
        >
          <Text style={styles.companyName} >PT. Cahaya Poles {'\n'}Mulia</Text> 

          <View style={styles.company}>
          <Text style={styles.companyDescription}>Kabupaten Sidoarjo, Jawa Timur</Text>
          <Ionicons name="heart-outline" size={26} marginRight={10} color={'#3470A2'}/>
          <TouchableOpacity onPress={() => navigation.navigate('Perusahaan')} style={styles.companyButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="chevron-forward-outline" size={18} color={'#3470A2'}/>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </View>

      <View style={styles.Mitralist}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainer}
        >
          <Image 
            source={require('./assets/perusahaanD.png')} 
            style={styles.companyImage} 
          />
        </LinearGradient>
      
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainerRight}
        >
          <Text style={styles.companyName} >CV Global Teknik Infotama {'\n'}Tbk</Text> 

          <View style={styles.company}>
          <Text style={styles.companyDescription}>Yogyakarta, D.I. Yogyakarta</Text>
          <Ionicons name="heart-outline" size={26} marginRight={10} color={'#3470A2'}/>
          <TouchableOpacity onPress={() => navigation.navigate('Perusahaan')} style={styles.companyButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="chevron-forward-outline" size={18} color={'#3470A2'}/>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </View>

      <View style={styles.Mitralist}>
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainer}
        >
          <Image 
            source={require('./assets/perusahaanA.png')} 
            style={styles.companyImage} 
          />
        </LinearGradient>
      
        <LinearGradient
          colors={['#3470A2', '#63ABE6']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={styles.imageContainerRight}
        >
          <Text style={styles.companyName} >PT. Bukit Asam {'\n'}Tbk</Text> 

          <View style={styles.company}>
          <Text style={styles.companyDescription}>Tanjung Enim, Muara Enim Sumsel</Text>
          <Ionicons name="heart-outline" size={26} marginRight={10} color={'#3470A2'}/>
          <TouchableOpacity onPress={() => navigation.navigate('Perusahaan')} style={styles.companyButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="chevron-forward-outline" size={18} color={'#3470A2'}/>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <LinearGradient
              colors={['#3470A2', '#63ABE6']} 
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 1, y: 1 }}
              style={styles.modalHeaderGradient} 
            >
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Filter</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close-circle" size={32} color="#33363F" />
                </TouchableOpacity>
              </View>
            </LinearGradient>

            <ScrollView style={styles.modalBody}>
                <Text style={styles.label}>Nama Posisi</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Masukkan nama posisi" 
                    placeholderTextColor="rgba(0, 0, 0, 0.36)" 
                />
                
                <Text style={styles.label}>Lokasi Perusahaan</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Masukkan lokasi perusahaan" 
                    placeholderTextColor="rgba(0, 0, 0, 0.36)" 
                />
                
                <Text style={styles.label}>Nama Perusahaan</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Masukkan nama perusahaan" 
                    placeholderTextColor="rgba(0, 0, 0, 0.36)" 
                />

                <Text style={styles.label}>Tipe Posisi</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Masukkan tipe posisi" 
                    placeholderTextColor="rgba(0, 0, 0, 0.36)" 
                />

                <Text style={styles.label}>Bidang Perusahaan</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Masukkan bidang perusahaan" 
                    placeholderTextColor="rgba(0, 0, 0, 0.36)" 
                />

                <TouchableOpacity style={styles.searchButton}>
                    <AntDesign name="search1" size={16} color="#FFFF" style={styles.searchIcon} />
                    <Text style={styles.searchButtonText}>Cari</Text>
                </TouchableOpacity>
                </ScrollView>
          </View>
        </View>
      </Modal>
      
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
    textAlign: 'right',
    flexWrap: 'wrap', 
    maxWidth: '70%',
    marginRight: 10,
  },
  ellipse68: {
    position: 'absolute',
    width: 300,  
    height: 320, 
    borderRadius: 9999,
    top: -120,  
    left: -150, 
    zIndex: -1, 
  },
  innerCircle: {
    position: 'absolute',
    top: 50,  
    left: 100,   
    width: 70,   
    height: 70,  
    borderRadius: 35,  
  },
  searchBoxContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  searchPlaceholder: {
    color: 'rgba(0, 0, 0, 0.36)',
    fontSize: 12,
    flex: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  filterButton: {
    width: 42,
    height: 40,
    marginLeft: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%', 
    height: '70%', 
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    paddingBottom: 20, 
  },
  modalHeaderGradient: {
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    paddingVertical: 20,
    width: '100%',
    position: 'absolute', 
    top: 0, 
    zIndex: 1, 
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, 
  },
  modalTitle: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '600',
  },
  modalBody: {
    flex: 1,
    marginTop: 100, 
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.50)',
    marginBottom: 8,
    fontWeight: '600',
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: '#63ABE6',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  searchButton: {
    backgroundColor: '#3470A2',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    width: '30%',
    alignSelf: 'flex-end',
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'right',
  },
  imageContainer: {
    position: 'absolute',
    top: 30, 
    left: -10,
    width: 120,
    height: 110,
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: 'center',
    alignItems: 'center',
  },
  Mitralist: {
    paddingVertical: 60,
  },
  companyImage: {
    width: 81,
    height: 81,
    borderRadius: 20,
  },
  company: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  companyName: {
    color: '#FFF',
    fontWeight: '800',
    textAlign: 'left',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 0,
    width: '85%',
  },
  companyDescription: {
    fontSize: 9,
    fontWeight: '400',
    color: '#FFF',
    textAlign: 'left',
    marginLeft: 20,
    width: '60%',
  },
  companyButton: {
    backgroundColor: '#A4C7E4',
    borderRadius: 10,
    padding: 10,
    width: '10%',
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'auto',
  },
  imageContainerRight: {
    position: 'absolute',
    top: 30, 
    right: -20, 
    width: 315,
    height: 110,
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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

export default Informasi;