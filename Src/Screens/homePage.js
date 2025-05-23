import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const menuItems = [
    { icon: 'calendar-today', label: 'Takvim' },
    { icon: 'people', label: 'Öğrenciler' },
    { icon: 'school', label: 'Sınıflar' },
    { icon: 'assignment', label: 'Ödevler' },
    { icon: 'event-note', label: 'Etkinlikler' },
    { icon: 'settings', label: 'Ayarlar' },
  ];

  const renderMenuItem = (item, index) => (
    <TouchableOpacity key={index} style={styles.menuItem}>
      <Icon name={item.icon} size={32} color="#2196F3" />
      <Text style={styles.menuItemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ana Sayfa</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Icon name="person" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Arama Çubuğu */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Ara..."
            placeholderTextColor="#666"
          />
        </View>

        {/* Menü Grid */}
        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </View>
      </ScrollView>

      {/* Alt Navigasyon */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.navItem, selectedTab === 0 && styles.navItemActive]}
          onPress={() => setSelectedTab(0)}>
          <Icon
            name="home"
            size={24}
            color={selectedTab === 0 ? '#2196F3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              selectedTab === 0 && styles.navTextActive,
            ]}>
            Ana Sayfa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, selectedTab === 1 && styles.navItemActive]}
          onPress={() => setSelectedTab(1)}>
          <Icon
            name="notifications"
            size={24}
            color={selectedTab === 1 ? '#2196F3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              selectedTab === 1 && styles.navTextActive,
            ]}>
            Bildirimler
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, selectedTab === 2 && styles.navItemActive]}
          onPress={() => setSelectedTab(2)}>
          <Icon
            name="message"
            size={24}
            color={selectedTab === 2 ? '#2196F3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              selectedTab === 2 && styles.navTextActive,
            ]}>
            Mesajlar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
  },
  menuItemText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    borderTopWidth: 2,
    borderTopColor: '#2196F3',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  navTextActive: {
    color: '#2196F3',
  },
});

export default HomePage;
