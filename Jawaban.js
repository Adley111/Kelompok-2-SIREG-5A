import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFont, faAt, faCamera, faImage, faLink, faPaperPlane, faHome, faBook, faGraduationCap, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Jawaban = ({ navigation }) => {
  const [inputValue, setInputValue] = useState(''); 

  const handleSend = () => {
    if (!inputValue.trim()) { 
      Alert.alert("Peringatan", "Silakan ketikkan jawaban sebelum mengirim!"); 
    } else {
      navigation.navigate('Jawabansend'); 
    }
  };

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
          <Text style={styles.bannerText}>Bagikan {'\n'}Jawabanmu</Text>
        </View>

        <LinearGradient
          colors={['#FFC727', '#FFEDB9']}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.1, y: 0.5 }}
          style={styles.semiCircle}
        />
        <LinearGradient
          colors={['#F5B600', '#FFEDB9']}
          start={{ x: 1, y: 0.2 }}
          end={{ x: 0.1, y: 0.2 }}
          style={styles.innerCircle} 
        />
        
        {/* Answer Form */}
        <View style={styles.formContainer}>
          <LinearGradient
            colors={['#FFC727', '#FFEDB9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.formTitleContainer}
          >
            <Text style={styles.formTitle}>Jawabanmu</Text>
          </LinearGradient>
          <TextInput 
            style={styles.input}
            placeholder="Ketikkan jawaban anda disini..."
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={inputValue} 
            onChangeText={setInputValue} 
          />
          
          <View style={styles.iconContainer}>
            <Ionicons name="text-outline" size={24} color="#3672A4" />
            <Ionicons name="image-outline" size={24} color="#3672A4" />
            <Ionicons name="camera-outline" size={24} color="#3672A4" />
            <Ionicons name="link-outline" size={24} color="#3672A4" />
            <Ionicons name="attach-outline" size={24} color="#3672A4" />
          </View>
          
          {/* Kirim Button */}
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Ionicons name="send" size={16} color="#FFF" />
            <Text style={styles.sendButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.footer}>
        <View style={styles.footerButtonGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.footerButton}>
            <FontAwesomeIcon icon={faHome} size={24} color="#FFC727" />
            <Text style={styles.footerButtonText}>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <FontAwesomeIcon icon={faBook} size={24} color="gray" />
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
    marginRight: 40,
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
  formContainer: {
    backgroundColor: '#FFF',
    width: 335,
    height: 302,
    borderRadius: 20,
    marginTop: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingBottom: 20, 
    position: 'relative', 
  },
  formTitleContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginBottom: 10,
    top: 0,
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#225580',
    textAlign: 'center',
  },
  input: {
    height: '70%', 
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    gap: 10,
    marginTop: 10, 
    marginLeft: 20,
  },
  sendButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    position: 'absolute',
    right: 20,
    bottom: 10,
    width: 90,
    height: 30,
    backgroundColor: '#225580',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10, 
  },
  sendButtonText: {
    color: '#FFF', 
    fontSize: 14, 
    marginLeft: 5,
    fontWeight: '600',
  },
  semiCircle: {
    position: 'absolute',
    bottom: -150,  
    right: -180,  
    width: '100%',  
    height: 380,  
    borderRadius: '9999', 
    overflow: 'hidden',
    zIndex: -1,  
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  innerCircle: {
    position: 'absolute',
    bottom: 150,  
    right: -10,   
    width: 126,  
    height: 123,  
    borderRadius: '100%', 
    backgroundColor: '#FFDD75',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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

export default Jawaban;
