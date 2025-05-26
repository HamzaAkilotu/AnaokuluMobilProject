import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

const positions = [
  'Sınıf Öğretmeni',
  'İngilizce Öğretmeni',
  'Müzik Öğretmeni',
  'Branş Öğretmeni',
  'Yardımcı Personel',
];

const JobApplicationScreen = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    birth: '',
    position: '',
    cv: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showPositions, setShowPositions] = useState(false);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email || !form.position) {
      Alert.alert('Eksik Bilgi', 'Lütfen tüm zorunlu alanları doldurunuz.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', phone: '', email: '', birth: '', position: '', cv: '' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>İş Başvurusu</Text>
      {submitted && <Text style={styles.success}>Başvurunuz başarıyla alındı. Teşekkürler!</Text>}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Ad Soyad *</Text>
        <TextInput
          style={styles.input}
          value={form.name}
          onChangeText={t => handleChange('name', t)}
          placeholder="Adınızı ve soyadınızı girin"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Telefon *</Text>
        <TextInput
          style={styles.input}
          value={form.phone}
          onChangeText={t => handleChange('phone', t)}
          placeholder="05xx xxx xx xx"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>E-posta *</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={t => handleChange('email', t)}
          placeholder="E-posta adresiniz"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Doğum Tarihi</Text>
        <TextInput
          style={styles.input}
          value={form.birth}
          onChangeText={t => handleChange('birth', t)}
          placeholder="GG.AA.YYYY"
          keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Pozisyon *</Text>
        <TouchableOpacity style={styles.selectBox} onPress={() => setShowPositions(!showPositions)}>
          <Text style={{ color: form.position ? '#333' : '#aaa' }}>{form.position || 'Pozisyon seçin'}</Text>
        </TouchableOpacity>
        {showPositions && (
          <View style={styles.dropdown}>
            {positions.map((pos, idx) => (
              <TouchableOpacity key={idx} style={styles.dropdownItem} onPress={() => { handleChange('position', pos); setShowPositions(false); }}>
                <Text style={{ color: '#790926' }}>{pos}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Kısa Özgeçmiş</Text>
        <TextInput
          style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
          value={form.cv}
          onChangeText={t => handleChange('cv', t)}
          placeholder="Kendinizden ve deneyimlerinizden kısaca bahsedin"
          multiline
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#790926', marginBottom: 16, textAlign: 'center' },
  formGroup: { marginBottom: 16 },
  label: { fontSize: 15, color: '#790926', marginBottom: 6, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#e0c6d6',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#f7f5fb',
    color: '#333',
  },
  selectBox: {
    borderWidth: 1,
    borderColor: '#e0c6d6',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#f7f5fb',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0c6d6',
    borderRadius: 10,
    marginTop: 4,
    elevation: 3,
    zIndex: 10,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3e6ed',
  },
  button: {
    backgroundColor: '#790926',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 17, letterSpacing: 0.5 },
  success: {
    color: '#219653',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default JobApplicationScreen; 