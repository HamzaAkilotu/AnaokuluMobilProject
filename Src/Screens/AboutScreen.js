import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const tabItems = [
  { label: 'Hakkımızda', route: 'About' },
  { label: 'İş başvurusu', route: 'JobApplication' },
  { label: 'Branş derslerimiz', route: 'BranchLessons' },
];

const AboutScreen = ({ navigation, route }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.tabRow}>
      {tabItems.map((item, idx) => {
        const isActive = route?.name === item.route;
        return (
          <TouchableOpacity
            key={item.route}
            style={[styles.tabItem, isActive && styles.tabItemActive]}
            onPress={() => {
              if (!isActive) navigation.navigate(item.route);
            }}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
    <Image source={require('../Assets/Bina1.webp')} style={styles.headerImage} />
    <Text style={styles.title}>Hakkımızda</Text>
    <Text style={styles.text}>
      Biz, anne baba iki öğretmen olarak çocukların hayal dünyalarını beslemeye, onları keşfetmeye teşvik etmeye olan inancımızı bir araya getirdik ve Bilge Kaşifler Anaokulu'nu hayata geçirdik. {'\n\n'}
      Yıllarca öğretmenlik yapmanın getirdiği deneyim ve tutkuyla, çocukların öğrenmeye ve keşfetmeye olan açlığını ve ne yazık ki ezberci eğitim sistemini gözlemledik. Bilge Kaşifler Anaokulu, çocukların merakını ve yaratıcılığını besleyen bir ortam sunmayı amaçlayan bir rüyanın ürünüdür. {'\n\n'}
      Anaokulumuz, her çocuğun benzersiz olduğuna ve kendi öğrenme yolculuğunu keşfetmeye hak kazandığına inanır. Onları cesaretlendiriyoruz, soru sormaya teşvik ediyoruz ve dünyayı merakla keşfetmelerine yardımcı oluyoruz. Bilge Kaşifler, düşünmeyi, paylaşmayı ve empati yapmayı öğrenen bir topluluğun parçasıdır.
    </Text>
    <View style={styles.missionVisionRow}>
      <View style={styles.missionVisionCard}>
        <Text style={styles.missionVisionTitle}>MİSYONUMUZ</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>{'\u2022'} Ülkesini seven,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Kültürüne sahip çıkan,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Özgür, ve eleştirel düşünebilen,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Merak eden, sorgulayan, araştıran, yaşayarak öğrenen,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Yeteneklerinin ve ilgilerinin farkında olan,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Özgüveni yüksek bireyler yetiştirmektir.</Text>
        </View>
      </View>
      <View style={styles.missionVisionCard}>
        <Text style={styles.missionVisionTitle}>VİZYONUMUZ</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>{'\u2022'} Değerlerine bağlı,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Sanatsal ve kültürel etkinliklere önem veren,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Eğlenerek öğrenmeyi hedefleyen,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Aile katılımını teşvik eden,</Text>
          <Text style={styles.bulletItem}>{'\u2022'} Güvenilir ve çağdaş bir eğitim ortamında, sürekli gelişim gösteren bir kurum olmaktır.</Text>
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 4,
    gap: 8,
  },
  tabItem: {
    flex: 1,
    backgroundColor: '#f3e6ed',
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 3,
    alignItems: 'center',
    elevation: 2,
  },
  tabItemActive: {
    backgroundColor: '#790926',
    elevation: 5,
    shadowColor: '#790926',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  tabText: {
    color: '#790926',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  tabTextActive: {
    color: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 180,
    borderRadius: 18,
    marginBottom: 18,
    alignSelf: 'center',
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#790926', marginBottom: 18, textAlign: 'center', letterSpacing: 1 },
  text: { fontSize: 17, color: '#333', lineHeight: 25, marginBottom: 24, textAlign: 'justify' },
  missionVisionRow: {
    flexDirection: 'column',
    gap: 18,
    marginTop: 8,
    marginBottom: 24,
    width: '100%',
  },
  missionVisionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#790926',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    marginHorizontal: 0,
  },
  missionVisionTitle: { color: '#790926', fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 10, letterSpacing: 1 },
  bulletList: { marginLeft: 8 },
  bulletItem: { fontSize: 16, color: '#790926', marginBottom: 7, lineHeight: 24 },
});

export default AboutScreen; 