import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, LayoutAnimation, Platform, UIManager } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const lessonData = [
  {
    name: 'Kodlama',
    desc: 'Kodlama derslerimiz, çocuklarımızın algoritmik düşünme yeteneklerini geliştirirken, problem çözme becerilerini artırmayı hedefler.',
    img: require('../Assets/algoritma.jpg'),
  },
  {
    name: 'Matematik',
    desc: 'Matematik derslerimiz, temel kavramlardan başlayarak analitik düşünmeyi destekleyen etkinliklerle zenginleştirilmiştir.',
    img: require('../Assets/matematik.jpg'),
  },
  {
    name: 'İngilizce',
    desc: 'İngilizce derslerimiz, çocukların yabancı dili doğal ve eğlenceli yöntemlerle öğrenmelerini sağlar.',
    img: require('../Assets/ingilizce.jpg'),
  },
  {
    name: 'Müzik',
    desc: 'Müzik derslerimiz, çocukların ritim duygusunu geliştirmelerine ve yaratıcılıklarını ortaya koymalarına olanak tanır.',
    img: require('../Assets/muzik.jpg'),
  },
  { name: 'Satranç' },
  { name: 'Drama' },
  { name: 'Jimnastik' },
];

const BranchLessonsScreen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Branş Derslerimiz</Text>
      {lessonData.map((lesson, idx) => (
        <View key={idx} style={styles.lessonBox}>
          {'desc' in lesson ? (
            <TouchableOpacity onPress={() => handleToggle(idx)} activeOpacity={0.8} style={styles.lessonHeader}>
              <Text style={styles.lessonName}>{lesson.name}</Text>
              <Text style={styles.arrow}>{openIndex === idx ? '▲' : '▼'}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonName}>{lesson.name}</Text>
            </View>
          )}
          {openIndex === idx && lesson.desc && (
            <View style={styles.lessonContent}>
              <Image source={lesson.img} style={styles.lessonImg} />
              <Text style={styles.lessonDesc}>{lesson.desc}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#790926', marginBottom: 16, textAlign: 'center' },
  lessonBox: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 0,
    marginBottom: 18,
    elevation: 2,
    shadowColor: '#790926',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#f7f5fb',
  },
  lessonName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#790926',
    letterSpacing: 0.5,
  },
  arrow: {
    fontSize: 18,
    color: '#790926',
    marginLeft: 8,
  },
  lessonContent: {
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f3e6ed',
    backgroundColor: '#fff',
  },
  lessonImg: {
    width: 180,
    height: 110,
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#eee',
  },
  lessonDesc: {
    fontSize: 15,
    color: '#790926',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default BranchLessonsScreen; 