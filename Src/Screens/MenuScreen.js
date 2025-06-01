import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { MenuAPI } from '../api';

const gunler = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];

const MenuScreen = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    MenuAPI.getWeekly()
      .then(data => {
        let arr = [];
        if (Array.isArray(data)) arr = data;
        else if (data && typeof data === 'object') arr = Object.values(data);
        setMenu(arr);
      })
      .catch(err => setError('Menü yüklenemedi'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <View style={styles.loadingContainer}><ActivityIndicator size="large" color="#800020" /><Text>Yükleniyor...</Text></View>;
  }
  if (error) {
    return <View style={styles.loadingContainer}><Text style={{color:'red'}}>{error}</Text></View>;
  }
  if (!menu || !Array.isArray(menu) || menu.length === 0) {
    return <View style={styles.loadingContainer}><Text style={{color:'#800020'}}>Veri bulunamadı</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      {menu.map((item, index) => {
        if (typeof item !== 'string') return null;
        const lines = item.split('<br>');
        const day = gunler[index] || '-';
        return (
          <View key={index} style={styles.card}>
            <Text style={styles.day}>{day}</Text>
            {lines.map((line, i) => {
              const [title, ...rest] = line.split(':');
              const value = rest.join(':').trim();
              if (!title || !value) return null;
              return (
                <View key={i} style={styles.row}>
                  <Text style={styles.label}>{title ? title.trim() + ':' : ''} </Text>
                  <Text style={styles.value}>{value}</Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f5fb',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
    shadowColor: '#800020',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800020',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  label: {
    fontWeight: '600',
    color: '#800020',
    fontSize: 15,
    minWidth: 60,
  },
  value: {
    fontSize: 15,
    color: '#222',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default MenuScreen; 