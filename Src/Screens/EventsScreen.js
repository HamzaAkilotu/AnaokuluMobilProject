import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { EtkinlikAPI } from '../api';

const EventsScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    EtkinlikAPI.getAll()
      .then(data => setEvents(data))
      .catch(err => setError('Etkinlikler yüklenemedi'))
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
        <Text style={[styles.headerCell, styles.nameCell]}>Etkinlik Adı</Text>
        <Text style={[styles.headerCell, styles.descCell]}>Açıklama</Text>
        <Text style={[styles.headerCell, styles.locCell]}>Konum</Text>
      </View>
      {events.map((e, idx) => (
        <View key={e.id || idx} style={styles.tableRow}>
          <Text style={[styles.cell, styles.dateCell]}> {
            e.tarih
              ? (typeof e.tarih === 'string' ? new Date(e.tarih).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long' }) : e.tarih)
              : '-'
          } </Text>
          <Text style={[styles.cell, styles.nameCell]}>{e.baslik || '-'}</Text>
          <Text style={[styles.cell, styles.descCell]}>{e.aciklama || '-'}</Text>
          <Text style={[styles.cell, styles.locCell]}>{e.konum || '-'}</Text>
        </View>
      ))}
      <Text style={styles.note}>Yaklaşan etkinliklerimizi kaçırmayın!</Text>
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
  nameCell: { flex: 1.2 },
  descCell: { flex: 2 },
  locCell: { width: 90 },
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventsScreen; 