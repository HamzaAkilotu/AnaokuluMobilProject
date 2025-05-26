import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const SchoolBusScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Image source={require('../Assets/servis.jpg')} style={styles.busImage} />
    <Text style={styles.title}>Okul Servisi</Text>
    <Text style={styles.text}>
      Okul servislerimiz, çocuklarımızın güvenli bir şekilde okula ulaşmasını sağlar. Servis güzergahları ve saatleri için bizimle iletişime geçebilirsiniz.
    </Text>
    <View style={styles.cardRow}>
      <View style={styles.card}>
        <Image source={require('../Assets/sofor.jpg')} style={styles.cardImg} />
        <Text style={styles.cardTitle}>Ahmet Yıldız</Text>
        <Text style={styles.cardSubtitle}>Servis Şoförü</Text>
        <Text style={styles.cardInfo}>Telefon: 0532 123 45 67</Text>
        <Text style={styles.cardDesc}>10 yıllık deneyimli, çocuk güvenliği eğitimli.</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('../Assets/abla.jpg')} style={styles.cardImg} />
        <Text style={styles.cardTitle}>Elif Demir</Text>
        <Text style={styles.cardSubtitle}>Servis Ablası</Text>
        <Text style={styles.cardInfo}>Telefon: 0543 987 65 43</Text>
        <Text style={styles.cardDesc}>Çocuklarla iletişimi güçlü, ilk yardım sertifikalı.</Text>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#790926', marginBottom: 16 },
  text: { fontSize: 16, color: '#333' },
  busImage: {
    width: '100%',
    height: 160,
    borderRadius: 14,
    marginBottom: 18,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 18,
    gap: 12,
  },
  card: {
    flex: 1,
    minWidth: 150,
    maxWidth: 220,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#790926',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 5,
  },
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#f3e6ed',
  },
  cardTitle: { fontSize: 17, fontWeight: 'bold', color: '#790926', marginBottom: 2 },
  cardSubtitle: { fontSize: 14, color: '#555', marginBottom: 4 },
  cardInfo: { fontSize: 13, color: '#333', marginBottom: 2 },
  cardDesc: { fontSize: 13, color: '#790926', textAlign: 'center', marginTop: 2 },
});

export default SchoolBusScreen; 