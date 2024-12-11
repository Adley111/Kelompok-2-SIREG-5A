import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCompass, faGraduationCap, faEnvelope, faUser, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const Semuajawaban = ({ navigation }) => {
  const [answers, setAnswers] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jawaban'));
        const answersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAnswers(answersData);
      } catch (error) {
        console.error('Error fetching answers: ', error);
      }
    };

    fetchAnswers();
  }, []);

  const renderAnswerCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.userInfoContainer}>
        <Image style={styles.profileImage} source={{ uri: item.imageUrl || 'https://via.placeholder.com/40' }} />
        <View>
          <Text style={styles.userName}>{item.penjawab}</Text>
          <Text style={styles.userId}>{item.userID}</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <Text style={styles.description}>{item.jawaban}</Text>
      <View style={styles.likeTextWrapper}>
        <FontAwesomeIcon icon={faHeart} size={16} color="#3672A4" />
        <FontAwesomeIcon icon={faComment} size={16} color="#3672A4" style={styles.commentIcon} />
        <Text style={styles.likeText}>Disukai oleh {item.likes || 0} orang</Text>
      </View>
    </View>
  );

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
          <Text style={styles.bannerText}>Jawaban</Text>
        </View>
      </LinearGradient>
      <View style={styles.cardContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {answers.length === 0 ? (
            <Text style={styles.noAnswersText}>Belum ada jawaban yang tersedia.</Text>
          ) : (
            <FlatList
              data={answers}
              keyExtractor={(item) => item.id}
              renderItem={renderAnswerCard}
              scrollEnabled={false} // Disable scroll in FlatList since ScrollView handles it
            />
          )}
        </ScrollView>
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
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
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
    alignItems: 'center',
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
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    zIndex: 0,
  },
  cardContainer: {
    width: '90%',
    position: 'absolute',
    top: 140,
    alignItems: 'center',
    flex: 1,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: '100%',
    alignSelf: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userId: {
    fontSize: 15,
    color: '#3672A4',
    marginTop: -20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    maxWidth: '105%',
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  likeTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  },
  commentIcon: {
    marginLeft: 10,
  },
  noAnswersText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
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

export default Semuajawaban;
