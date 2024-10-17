import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerBackground} />
        <View style={styles.headerContent}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>Notifikasi</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.notificationTitleContainer}>
          <Text style={styles.notificationTitleText}>Belum Terbaca</Text>
        </View>
        
        {/* Notification List */}
        <View style={styles.notificationListContainer}>
          <View style={styles.notificationItem}>
            <Image source={{ uri: 'https://via.placeholder.com/48x48' }} style={styles.notificationItemImage} />
            <View style={styles.notificationItemContent}>
              <Text style={styles.notificationItemTitle}>Jawaban Baru!</Text>
              <Text style={styles.notificationItemText}>Peterpointer telah menjawab pertanyaan Anda "Bagaimana cara..."</Text>
            </View>
            <Text style={styles.notificationItemTime}>2 m</Text>
          </View>

          <View style={styles.notificationItem}>
            <Image source={{ uri: 'https://via.placeholder.com/48x48' }} style={styles.notificationItemImage} />
            <View style={styles.notificationItemContent}>
              <Text style={styles.notificationItemTitle}>Peluang Baru!</Text>
              <Text style={styles.notificationItemText}>PT Bukit Asam Tbk menyediakan posisi lowongan magang baru.</Text>
            </View>
            <Text style={styles.notificationItemTime}>5 m</Text>
          </View>

          <View style={styles.notificationItem}>
            <Image source={{ uri: 'https://via.placeholder.com/48x48' }} style={styles.notificationItemImage} />
            <View style={styles.notificationItemContent}>
              <Text style={styles.notificationItemTitle}>Jawaban Baru!</Text>
              <Text style={styles.notificationItemText}>Rrintun memberikan jawaban baru pada pertanyaan Anda "Bagaimana..."</Text>
            </View>
            <Text style={styles.notificationItemTime}>1 j</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Lainnya</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Akademik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    height: 100,
    backgroundColor: '#62A9E4',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFC727',
    borderRadius: 9999,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  timeContainer: {},
  timeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  batteryContainer: {
    width: 20,
    height: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryInner: {
    width: 18,
    height: 8,
    backgroundColor: '#fff',
  },
  signalContainer: {
    width: 20,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signalInner: {
    width: 18,
    height: 8,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  notificationTitleContainer: {
    marginBottom: 15,
  },
  notificationTitleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#225580',
  },
  notificationListContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationItemImage: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  notificationItemContent: {
    flex: 1,
  },
  notificationItemTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#225580',
  },
  notificationItemText: {
    fontSize: 12,
    color: '#383838',
  },
  notificationItemTime: {
    fontSize: 13,
    color: '#595959',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#007bff',
  },
});

export default App;
