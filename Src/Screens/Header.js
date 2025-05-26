import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <View style={styles.logoContainer}>
        <Image source={require('../Assets/logo.png')} style={styles.logo} />
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: 4 }}>
        <Text style={styles.headerSubTitle}>Özel Elazığ</Text>
        <Text style={styles.headerTitle}>Bilge Kaşifleri Anaokulu</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#790926',
    elevation: 4,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 2,
    marginBottom: 2,
    opacity: 0.85,
    letterSpacing: 0.2,
  },
});

export default Header; 