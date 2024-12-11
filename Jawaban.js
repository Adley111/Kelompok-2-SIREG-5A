import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBook, faGraduationCap, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { saveAnswer } from './firebase/save-answer';

const Jawaban = ({ navigation }) => {
  const [answer, setAnswer] = useState(''); 

  const handleSend = async () => {
    if (!answer.trim()) {
      Alert.alert("Peringatan", "Silakan ketikkan jawaban sebelum mengirim!");
      return;
    }

    Alert.alert(
      "Konfirmasi",
      "Apakah Anda yakin untuk mengirim jawaban ini?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Ya",
          onPress: async () => {
            try {
              await saveAnswer("user123", answer); 
              Alert.alert("Sukses", "Jawaban berhasil dikirim!");
              setAnswer('');
              navigation.navigate('Jawabansend');
            } catch (error) {
              Alert.alert("Error", "Gagal mengirim jawaban. Silakan coba lagi.");
            }
          },
        },
      ]
    );
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

        <View style={styles.formContainer}>
          <LinearGradient
            colors={['#FFC727', '#FFEDB9']}
            style={styles.formTitleContainer}
          >
            <Text style={styles.formTitle}>Jawabanmu</Text>
          </LinearGradient>
          <TextInput
            style={styles.input}
            placeholder="Ketikkan jawaban anda disini..."
            multiline
            value={answer}
            onChangeText={setAnswer}
          />
          <View style={styles.iconContainer}>
            <Ionicons name="text-outline" size={24} color="#3672A4" />
            <Ionicons name="image-outline" size={24} color="#3672A4" />
            <Ionicons name="camera-outline" size={24} color="#3672A4" />
            <Ionicons name="link-outline" size={24} color="#3672A4" />
          </View>
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Ionicons name="send" size={16} color="#FFF" />
            <Text style={styles.sendButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
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
