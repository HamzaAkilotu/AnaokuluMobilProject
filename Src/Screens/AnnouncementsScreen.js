import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import { DuyuruAPI } from '../api';

const placeholderImage = require('../Assets/yazokulu.png');

const AnnouncementsScreen = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    DuyuruAPI.getAll()
      .then(data => setAnnouncements(data))
      .catch(err => setError('Duyurular yüklenemedi'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <View style={styles.loading}><ActivityIndicator size="large" color="#790926" /><Text>Yükleniyor...</Text></View>;
  }
  if (error) {
    return <View style={styles.loading}><Text style={{color:'red'}}>{error}</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, styles.dateCell]}>Tarih</Text>
        <Text style={[styles.headerCell, styles.titleCell]}>Duyuru Başlığı</Text>
        <Text style={[styles.headerCell, styles.contentCell]}>Açıklama</Text>
        <Text style={[styles.headerCell, styles.imageCell]}>Resim</Text>
      </View>
      {announcements.map((a, idx) => (
        <View key={a.id || idx} style={styles.tableRow}>
          <Text style={[styles.cell, styles.dateCell]}> {
            a.yayinTarihi
              ? (typeof a.yayinTarihi === 'string' ? new Date(a.yayinTarihi).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }) : a.yayinTarihi)
              : '-'
          } </Text>
          <Text style={[styles.cell, styles.titleCell]}>{a.baslik || '-'}</Text>
          <Text style={[styles.cell, styles.contentCell]}>{a.icerik || '-'}</Text>
          <View style={styles.imageCell}>
            {a.resimUrl ? (
              <Image source={{ uri: a.resimUrl }} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
            ) : (
              <Image source={placeholderImage} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
            )}
          </View>
        </View>
      ))}
      <Text style={styles.note}>Okulumuzdaki güncel duyuruları burada bulabilirsiniz. Takipte kalın!</Text>
    </ScrollView>
  );
};

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
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default AnnouncementsScreen; 