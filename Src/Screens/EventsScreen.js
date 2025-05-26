import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const events = [
  {
    date: '23 Nisan',
    name: '23 Nisan Kutlaması',
    desc: 'Çocuklarımızla 23 Nisan coşkusu!',
    location: 'Okul Bahçesi',
  },
  {
    date: '15 Haziran',
    name: 'Babalar Günü Kutlaması',
    desc: "+Çocuklarımızla birlikte Babalar Günü'nü ...",
    location: 'Okul Bahçesi',
  },
];

const EventsScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.tableHeader}>
      <Text style={[styles.headerCell, styles.dateCell]}>Tarih</Text>
      <Text style={[styles.headerCell, styles.nameCell]}>Etkinlik Adı</Text>
      <Text style={[styles.headerCell, styles.descCell]}>Açıklama</Text>
      <Text style={[styles.headerCell, styles.locCell]}>Konum</Text>
    </View>
    {events.map((e, idx) => (
      <View key={idx} style={styles.tableRow}>
        <Text style={[styles.cell, styles.dateCell]}>{e.date}</Text>
        <Text style={[styles.cell, styles.nameCell]}>{e.name}</Text>
        <Text style={[styles.cell, styles.descCell]}>{e.desc}</Text>
        <Text style={[styles.cell, styles.locCell]}>{e.location}</Text>
      </View>
    ))}
    <Text style={styles.note}>_Yaklaşan etkinliklerimizi kaçırmayın!_</Text>
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
});

export default EventsScreen; 