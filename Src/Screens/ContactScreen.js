import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ContactScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Image source={require('../Assets/iletisim.jpg')} style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 16 }} />
    <Text style={styles.title}>İletişim</Text>
    <Text style={styles.text}><Text style={styles.label}>Adres:</Text> Cumhuriyet, 158. Sk. no:18, 23170 Elazığ Merkez/Elazığ</Text>
    <Text style={styles.text}><Text style={styles.label}>Telefon:</Text> 05073104117</Text>
    <Text style={styles.text}><Text style={styles.label}>Instagram:</Text> @bilgekasifleranaokulu</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#790926', marginBottom: 16 },
  text: { fontSize: 16, color: '#333', marginBottom: 8 },
  label: { fontWeight: 'bold', color: '#790926' },
});

export default ContactScreen; 