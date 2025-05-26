import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Modal, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

const images = [
  require('../Assets/algoritma.jpg'),
  require('../Assets/AnaSayfa4.jpg'),
  require('../Assets/Bina1.webp'),
  require('../Assets/Bina2.webp'),
  require('../Assets/ingilizce.jpg'),
  require('../Assets/logo.png'),
  require('../Assets/matematik.jpg'),
  require('../Assets/muzik.jpg'),
  require('../Assets/nisan.jpg'),
  require('../Assets/Park1.webp'),
  require('../Assets/Park2.webp'),
  require('../Assets/rehberlik.jpg'),
  require('../Assets/servis.jpg'),
  require('../Assets/Sinif1.webp'),
  require('../Assets/Sinif2.webp'),
  require('../Assets/sonbahar.jpg'),
  require('../Assets/tophavuzu.webp'),
];

const { width, height } = Dimensions.get('window');

const GalleryScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (idx) => {
    setSelectedIndex(idx);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  const goNext = () => setSelectedIndex((selectedIndex + 1) % images.length);
  const goPrev = () => setSelectedIndex((selectedIndex - 1 + images.length) % images.length);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galeri</Text>
      <View style={styles.grid}>
        {images.map((img, idx) => (
          <TouchableOpacity key={idx} style={styles.imageWrapper} onPress={() => openModal(idx)}>
            <Image source={img} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <ImageBackground source={images[selectedIndex]} style={styles.blurBg} blurRadius={20}>
            <View style={styles.overlay} />
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.arrowLeft} onPress={goPrev}>
                <Text style={styles.arrowText}>{'<'}</Text>
              </TouchableOpacity>
              <Image source={images[selectedIndex]} style={styles.modalImage} />
              <TouchableOpacity style={styles.arrowRight} onPress={goNext}>
                <Text style={styles.arrowText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#790926', marginBottom: 16 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  imageWrapper: {
    width: '48%',
    aspectRatio: 1.2,
    margin: '1%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f3f3f3',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurBg: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  modalImage: {
    width: width * 0.8,
    height: height * 0.5,
    borderRadius: 16,
    resizeMode: 'contain',
    zIndex: 2,
  },
  closeBtn: {
    position: 'absolute',
    top: 40,
    right: 30,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  closeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  arrowLeft: {
    position: 'absolute',
    left: 20,
    top: '50%',
    marginTop: -30,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
  },
  arrowRight: {
    position: 'absolute',
    right: 20,
    top: '50%',
    marginTop: -30,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
  },
  arrowText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default GalleryScreen; 