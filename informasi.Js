import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBackground} />
        <View style={styles.headerContent}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>9:41</Text>
          </View>
          <View style={styles.batteryContainer}>
            <View style={styles.batteryInner} />
          </View>
          <View style={styles.signalContainer}>
            <View style={styles.signalInner} />
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.companyListContainer}>
          <View style={styles.companyList}>
            <View style={styles.companyItem}>
              <View style={styles.companyItemImage}>
                <Image source={{ uri: 'https://via.placeholder.com/68x68' }} style={styles.companyItemImageInner} />
              </View>
              <View style={styles.companyItemContent}>
                <Text style={styles.companyItemTitle}>CV Global Teknik Infotama</Text>
                <Text style={styles.companyItemText}>Yogyakarta, D.I. Yogyakarta</Text>
              </View>
              <View style={styles.companyItemTime}>
                <Text style={styles.companyItemTimeText}>2 m</Text>
              </View>
            </View>
            <View style={styles.companyItem}>
              <View style={styles.companyItemImage}>
                <Image source={{ uri: 'https://via.placeholder.com/68x68' }} style={styles.companyItemImageInner} />
              </View>
              <View style={styles.companyItemContent}>
                <Text style={styles.companyItemTitle}>PT Cahaya Poles Mulia</Text>
                <Text style={styles.companyItemText}>Kabupaten Sidoarjo, Jawa Timur</Text>
              </View>
              <View style={styles.companyItemTime}>
                <Text style={styles.companyItemTimeText}>5 m</Text>
              </View>
            </View>
            <View style={styles.companyItem}>
              <View style={styles.companyItemImage}>
                <Image source={{ uri: 'https://via.placeholder.com/68x68' }} style={styles.companyItemImageInner} />
              </View>
              <View style={styles.companyItemContent}>
                <Text style={styles.companyItemTitle}>PT Anugrah Kharisma Jaya</Text>
                <Text style={styles.companyItemText}>Jakarta Barat, DKI Jakarta</Text>
              </View>
              <View style={styles.companyItemTime}>
                <Text style={styles.companyItemTimeText}>1 j</Text>
              </View>
            </View>
            <View style={styles.companyItem}>
              <View style={styles.companyItemImage}>
                <Image source={{ uri: 'https://via.placeholder.com/68x68' }} style={styles.companyItemImageInner} />
              </View>
              <View style={styles.companyItemContent}>
                <Text style={styles.companyItemTitle}>PT Bukit Asam Tbk</Text>
                <Text style={styles.companyItemText}>Tanjung Enim, Muara Enim Sumsel</Text>
              </View>
              <View style={styles.companyItemTime}>
                <Text style={styles.companyItemTimeText}>2 m</Text>
              </View>
            </View>
            <View style={styles.companyItem}>
              <View style={styles.companyItemImage}>
                <Image source={{ uri: 'https://via.placeholder.com/68x68' }} style={styles.companyItemImageInner} />
              </View>
              <View style={styles.companyItemContent}>
                <Text style={styles.companyItemTitle}>PT Indofood CBP Sukses Makmur</Text>
                <Text style={styles.companyItemText}>Kabupaten Bekasi, Jawa Barat</Text>
              </View>
              <View style={styles.companyItemTime}>
                <Text style={styles.companyItemTimeText}>2 m</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerBackground} />
        <View style={styles.footerContent}>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerButtonIcon} />
            <Text style={styles.footerButtonText}>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerButtonIcon} />
            <Text style={styles.footerButtonText}>Lainnya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerButtonIcon} />
            <Text style={styles.footerButtonText}>Akademik</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerButtonIcon} />
            <Text style={styles.footerButtonText}>Pesan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerButtonIcon} />
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
    backgroundColor: '#F8F8F8',
  },
  header: {
    height: 202,
    backgroundColor: '#63ABE6',
    borderRadius: 30,
    overflow: 'hidden',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#63ABE6',
    borderRadius: 30,
    overflow: 'hidden',
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    width: 35,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 14,
  },
  batteryContainer: {
    width: 14,
    height: 14,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryInner: {
    width: 12,
    height: 12,
    backgroundColor: 'black',
  },
  signalContainer: {
    width: 18,
    height: 14,
    paddingTop: 1,
    paddingBottom: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signalInner: {
    width: 18,
    height: 12,
    position: 'relative',
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  companyListContainer: {
    flex: 1,
    padding: 10,
  },
  companyList: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  companyItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  companyItemImage: {
    width: 68,
    height: 68,
    position: 'relative',
    borderRadius: 34,
    overflow: 'hidden',
  },
  companyItemImageInner: {
    width: '100%',
    height: '100%',
    borderRadius: 34,
  },
  companyItemContent: {
    flex: 1,
    marginLeft: 10,
  },
  companyItemTitle: {
    color: '#225580',
    fontSize: 15,
    fontWeight: '700',
  },
  companyItemText: {
    color: '#383838',
    fontSize: 12,
    fontWeight: '300',
  },
  companyItemTime: {
    width: 40,
    alignItems: 'flex-end',
  },
  companyItemTimeText: {
    color: '#595959',
    fontSize: 13,
    fontWeight: '300',
  },
  footer: {
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'gray',
    marginBottom: 5,
    borderRadius: 12,
  },
  footerButtonText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666666',
  },
});

export default App;