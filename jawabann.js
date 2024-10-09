import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faFont, faAt, faCamera, faImage, faLink, faPaperPlane, faHome, faBook, faGraduationCap, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bagikan Jawabanmu</Text>
      </View>

      {/* Input Field */}
      <View style={styles.inputField}>
        <Text style={styles.inputFieldText}>Jawabanmu</Text>
        <TextInput
          style={styles.inputFieldInput}
          placeholder="Ketikkan jawaban atau pendapat anda di sini..."
          multiline={true}
        />
        <View style={styles.inputFieldButtons}>
          <View style={styles.inputFieldButtonGroup}>
            <FontAwesomeIcon icon={faFont} size={24} color="gray" />
            <FontAwesomeIcon icon={faAt} size={24} color="gray" style={styles.iconSpacing} />
            <FontAwesomeIcon icon={faCamera} size={24} color="gray" style={styles.iconSpacing} />
            <FontAwesomeIcon icon={faImage} size={24} color="gray" style={styles.iconSpacing} />
            <FontAwesomeIcon icon={faLink} size={24} color="gray" style={styles.iconSpacing} />
          </View>
          <TouchableOpacity style={styles.inputFieldButton} onPress={() => console.log('Send message')}>
            <FontAwesomeIcon icon={faPaperPlane} size={20} color="white" />
            <Text style={styles.inputFieldButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerButtonGroup}>
          <TouchableOpacity style={styles.footerButton} onPress={() => console.log('Go to Home')}>
            <FontAwesomeIcon icon={faHome} size={24} color="yellow" />
            <Text style={styles.footerButtonText}>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => console.log('Show more')}>
            <FontAwesomeIcon icon={faBook} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Lainnya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => console.log('Open academic')}>
            <FontAwesomeIcon icon={faGraduationCap} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Akademik</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => console.log('Open messages')}>
            <FontAwesomeIcon icon={faEnvelope} size={24} color="gray" />
            <Text style={styles.footerButtonText}>Pesan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => console.log('Open account')}>
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
    backgroundColor: '#4682B4', // Blue gradient background
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 80,
    color: 'white',
  },
  inputField: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2, // Shadow for Android
    marginTop: 20,
  },
  inputFieldText: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#FFD700', // Yellow header for input field
    padding: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  inputFieldInput: {
    height: 130,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginTop: 8,
  },
  inputFieldButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  inputFieldButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 16,
  },
  inputFieldButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4682B4', // Blue button
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputFieldButtonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 8,
  },
  footer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginTop: 'auto',
    elevation: 2, // Shadow for Android
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
    marginTop: 4,
  },
});

export default App;
