import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const announcements = [
  {
    date: '23 Mayıs',
    title: 'Yaz Okulu Başlıyor!',
    content: 'Yaz okulu kayıtlarımız başlamıştır. Deta...',
    image: require('../Assets/yazokulu.png'),
  },
  {
    date: '25 Mayıs',
    title: 'Okul Gezisi Duyurusu',
    content: "Öğrencilerimizle birlikte 5 Haziran'da d...",
    image: require('../Assets/balonlar.jpg'),
  },
];

const AnnouncementsScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.tableHeader}>
      <Text style={[styles.headerCell, styles.dateCell]}>Tarih</Text>
      <Text style={[styles.headerCell, styles.titleCell]}>Duyuru Başlığı</Text>
      <Text style={[styles.headerCell, styles.contentCell]}>Kısa Açıklama</Text>
      <Text style={[styles.headerCell, styles.imageCell]}>Resim</Text>
    </View>
    {announcements.map((a, idx) => (
      <View key={idx} style={styles.tableRow}>
        <Text style={[styles.cell, styles.dateCell]}>{a.date}</Text>
        <Text style={[styles.cell, styles.titleCell]}>{a.title}</Text>
        <Text style={[styles.cell, styles.contentCell]}>{a.content}</Text>
        <View style={styles.imageCell}>
          <Image source={a.image} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
        </View>
      </View>
    ))}
    <Text style={styles.note}>_Okulumuzdaki güncel duyuruları burada bulabilirsiniz. Takipte kalın!_</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f7f5fb' },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#fae3ea',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 4,
    marginBottom: 4,
    elevation: 2,
  },
  headerCell: { fontWeight: 'bold', fontSize: 15, color: '#790926', textAlign: 'center', paddingHorizontal: 4 },
  dateCell: { width: 70 },
  titleCell: { flex: 1.2 },
  contentCell: { flex: 2 },
  imageCell: { width: 54, alignItems: 'center', justifyContent: 'center' },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fae3ea',
    minHeight: 48,
    alignItems: 'center',
    paddingHorizontal: 4,
    borderRadius: 14,
    marginBottom: 4,
    elevation: 1,
  },
  cell: { fontSize: 13, color: '#333', textAlign: 'left', paddingHorizontal: 4, flexWrap: 'wrap' },
  note: { fontSize: 13, color: '#790926', marginTop: 10, fontStyle: 'italic', textAlign: 'center' },
});

export default AnnouncementsScreen; 