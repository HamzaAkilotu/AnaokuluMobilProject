import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MenuScreen = () => {
  // Sabit yemek listesi
  const [menu] = useState([
    {
      title: 'Pazartesi',
      content: 'Mercimek çorbası, tavuk sote, pilav, yoğurt',
      date: '1 Nisan 2024',
    },
    {
      title: 'Salı',
      content: 'Tarhana çorbası, köfte, makarna, ayran',
      date: '2 Nisan 2024',
    },
    {
      title: 'Çarşamba',
      content: 'Domates çorbası, sebze yemeği, bulgur pilavı, cacık',
      date: '3 Nisan 2024',
    },
    {
      title: 'Perşembe',
      content: 'Ezogelin çorbası, etli kuru fasulye, pirinç pilavı, yoğurt',
      date: '4 Nisan 2024',
    },
    {
      title: 'Cuma',
      content: 'Şehriye çorbası, balık, patates püresi, salata',
      date: '5 Nisan 2024',
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {menu.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default MenuScreen; 