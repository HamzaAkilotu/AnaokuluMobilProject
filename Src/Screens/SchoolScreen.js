import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

const images = [
  require('../Assets/Bina1.webp'),
  require('../Assets/Bina2.webp'),
  require('../Assets/Park1.webp'),
  require('../Assets/Park2.webp'),
  require('../Assets/Sinif1.webp'),
  require('../Assets/Sinif2.webp'),
  require('../Assets/tophavuzu.webp'),
];

const { width } = Dimensions.get('window');

const SchoolScreen = () => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        />
        <View style={styles.dotsContainer}>
          {images.map((_, idx) => (
            <View
              key={idx}
              style={[styles.dot, currentIndex === idx && styles.activeDot]}
            />
          ))}
        </View>
      </View>
      <Text style={styles.title}>Okulumuz</Text>
      <Text style={styles.text}>
        Bilge Kaşifleri Anaokulu, modern sınıfları, geniş oyun alanları ve güvenli ortamı ile çocuklarımıza en iyi eğitimi sunmayı amaçlar. Okulumuzda her çocuğa bireysel ilgi gösterilir.
      </Text>
      <Text style={styles.info}>
        Okulumuz modern ve ferah bir bina yapısına sahiptir. Öğrencilerimizin güvenliği ve konforu için tüm alanlarımız titizlikle tasarlanmıştır.
      </Text>
      <Text style={styles.info}>
        Sınıflarımız, öğrenci sayısına uygun, geniş ve aydınlık ortamlar sunar. Teknolojik donanımlarıyla öğrenmeyi destekler.
      </Text>
      <Text style={styles.info}>
        Geniş ve güvenli oyun bahçemiz, çocukların enerjilerini atıp sosyalleşebileceği ideal bir alan sunar.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 0 },
  sliderContainer: {
    width: '100%',
    height: 220,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: '#790926',
    opacity: 1,
  },
  title: { fontSize: 26, fontWeight: 'bold', color: '#790926', marginBottom: 16, marginLeft: 20, marginRight: 20 },
  text: { fontSize: 16, color: '#333', marginLeft: 20, marginRight: 20 },
  info: { fontSize: 15, color: '#444', marginTop: 10, marginLeft: 20, marginRight: 20 },
});

export default SchoolScreen; 