import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const GuidanceScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Rehberlik</Text>
    <Image source={require('../Assets/rehberlik.jpg')} style={styles.image} />
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Psikolojik Danışman</Text>
      <Text style={styles.cardName}>Derya Yılmaz</Text>
      <Text style={styles.cardInfo}>Telefon: 0555 123 45 67</Text>
      <Text style={styles.cardInfo}>E-posta: derya.yilmaz@okul.com</Text>
      <Text style={styles.cardDesc}>
        Çocuklarımızın duygusal, sosyal ve bilişsel gelişimini desteklemek için buradayım. Ailelerle iş birliği içinde, her öğrencinin bireysel gelişimini yakından takip ediyorum.
      </Text>
    </View>
    <Text style={styles.text}>
      Okulumuzda çocuklarımızın duygusal, sosyal ve bilişsel gelişimini desteklemek için rehberlik hizmetleri sunulmaktadır. Uzman psikologlarımız çocuklarımızın gelişimini yakından takip eder ve ailelerle iş birliği içinde çalışır.
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#790926', marginBottom: 16 },
  image: { width: 220, height: 140, borderRadius: 12, marginBottom: 18, resizeMode: 'cover' },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    alignItems: 'flex-start',
    elevation: 3,
    shadowColor: '#790926',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#790926', marginBottom: 4 },
  cardName: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 4 },
  cardInfo: { fontSize: 14, color: '#555', marginBottom: 2 },
  cardDesc: { fontSize: 14, color: '#444', marginTop: 8 },
  text: { fontSize: 16, color: '#333', marginTop: 10 },
});

export default GuidanceScreen; 