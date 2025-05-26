import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const BottomNav = ({ selectedTab, setSelectedTab, navigation }) => (
  <View style={styles.bottomNav}>
    <TouchableOpacity
      style={[styles.navItem, selectedTab === 0 && styles.navItemActive]}
      onPress={() => {
        setSelectedTab(0);
        navigation.navigate('Home');
      }}>
      <Image source={require('../Assets/home.png')} style={styles.bottomNavIcon} />
      <Text style={[styles.navText, selectedTab === 0 && styles.navTextActive]}>Ana Sayfa</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.navItem, selectedTab === 1 && styles.navItemActive]}
      onPress={() => {
        setSelectedTab(1);
        navigation.navigate('School');
      }}>
      <Image source={require('../Assets/okul.png')} style={styles.bottomNavIcon} />
      <Text style={[styles.navText, selectedTab === 1 && styles.navTextActive]}>Okulumuz</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.navItem, selectedTab === 2 && styles.navItemActive]}
      onPress={() => {
        setSelectedTab(2);
        navigation.navigate('About');
      }}>
      <Image source={require('../Assets/kurumsal.png')} style={styles.bottomNavIcon} />
      <Text style={[styles.navText, selectedTab === 2 && styles.navTextActive]}>Kurumsal</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.navItem, selectedTab === 3 && styles.navItemActive]}
      onPress={() => {
        setSelectedTab(3);
        navigation.navigate('Contact');
      }}>
      <Image source={require('../Assets/iletisim.png')} style={styles.bottomNavIcon} />
      <Text style={[styles.navText, selectedTab === 3 && styles.navTextActive]}>İletişim</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#790926',
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
  },
  navItemActive: {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    borderTopWidth: 2,
    borderTopColor: '#2196F3',
  },
  navText: {
    fontSize: 12,
    color: '#ffffff',
    marginTop: 4,
  },
  navTextActive: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 2,
  },
});

export default BottomNav; 