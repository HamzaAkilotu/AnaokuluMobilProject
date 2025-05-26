import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Image,
  PanResponder,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [moreMenuAnim] = useState(new Animated.Value(0));
  const [contentAnim] = useState(new Animated.Value(0));
  const pan = useRef(new Animated.ValueXY()).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const swipeThreshold = 50;

  // Menü öğeleri
  const menuItems = [
    { icon: '📢', label: 'Duyurular', slogan: 'Güncel Haberler' },
    { icon: '🎉', label: 'Etkinlikler', slogan: 'Eğlenceli Aktiviteler' },
    { icon: '🍽️', label: 'Yemek Listesi', slogan: 'Sağlıklı Beslenme' },
    { icon: '🧭', label: 'Rehberlik', slogan: 'Uzman Desteği' },
    { icon: '🏫', label: 'Okulumuz', slogan: 'Modern Eğitim' },
    { icon: '🖼️', label: 'Galeri', slogan: 'Anılarımız' },
    { icon: '☎️', label: 'İletişim', slogan: 'Bize Ulaşın' },
  ];

  const showMoreButton = {
    icon: showMoreMenu ? '⬆️' : '➕',
    label: showMoreMenu ? 'Daha az gör' : 'Hepsini gör',
    slogan: showMoreMenu ? 'Kapat' : 'Tüm Hizmetler',
    isShowMore: true,
  };

  const moreMenuItems = [
    { icon: 'ℹ️', label: 'Hakkımızda', slogan: 'Kurumsal Bilgi' },
    { icon: '📚', label: 'Branş derslerimiz', slogan: 'Zengin Eğitim' },
    { icon: '📝', label: 'İş başvurusu', slogan: 'Kariyer Fırsatı' },
    { icon: '🚌', label: 'Okul servisi', slogan: 'Güvenli Ulaşım' },
  ];

  const slogans = [
    {
      main: "Aktif Öğrenme Deneyimi",
      sub: "Deneyerek, yaşayarak ve keşfederek öğrenme sistemini benimsiyoruz."
    },
    {
      main: "Aile Sıcaklığı",
      sub: "Her çocuğa bireysel ilgi gösterilen, sevgi dolu bir ortam sunuyoruz."
    },
    {
      main: "Fiziksel ve Zihinsel Gelişim",
      sub: "Oyun, sanat ve bilimle gelişimi destekleyen zengin içerikler."
    }
  ];

  const animateSloganChange = (newIndex) => {
    // Önce sola kaydır ve soluklaştır
    Animated.parallel([
      Animated.timing(pan.x, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Sloganı değiştir
      setCurrentSloganIndex(newIndex);
      // Sağdan kaydır ve belirginleştir
      pan.x.setValue(100);
      Animated.parallel([
        Animated.timing(pan.x, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  // Sabit duyurular verisi
  const announcements = [
    {
      title: "Yaz Okulu Başlıyor!",
      date: "23 Mayıs",
      description: "Yaz okulu kayıtlarımız başlamıştır. Deta...",
      image: require('../Assets/yazokulu.png'),
    },
    {
      title: "Okul Gezisi Duyurusu",
      date: "25 Mayıs",
      description: "Öğrencilerimizle birlikte 5 Haziran'da d...",
      image: require('../Assets/balonlar.jpg'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentSloganIndex + 1) % slogans.length;
      animateSloganChange(newIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSloganIndex]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        pan.x.setValue(gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        if (Math.abs(gesture.dx) > swipeThreshold) {
          // Sağa kaydırma -> önceki slogan, sola kaydırma -> sonraki slogan
          const direction = gesture.dx > 0 ? -1 : 1;
          const newIndex = (currentSloganIndex + direction + slogans.length) % slogans.length;
          animateSloganChange(newIndex);
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const handleShowMore = () => {
    if (!showMoreMenu) {
      setShowMoreMenu(true);
      Animated.timing(moreMenuAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(contentAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(moreMenuAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setShowMoreMenu(false));
      Animated.timing(contentAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  // Menüdeki her öğe için ilgili ekrana yönlendirme fonksiyonu
  const handleMenuNavigation = (label) => {
    switch (label) {
      case 'Duyurular':
        navigation.navigate('Announcements'); break;
      case 'Etkinlikler':
        navigation.navigate('Events'); break;
      case 'Yemek Listesi':
        navigation.navigate('Menu'); break;
      case 'Rehberlik':
        navigation.navigate('Guidance'); break;
      case 'Okulumuz':
        navigation.navigate('School'); break;
      case 'Galeri':
        navigation.navigate('Gallery'); break;
      case 'İletişim':
        navigation.navigate('Contact'); break;
      case 'Hakkımızda':
        navigation.navigate('About'); break;
      case 'Branş derslerimiz':
        navigation.navigate('BranchLessons'); break;
      case 'İş başvurusu':
        navigation.navigate('JobApplication'); break;
      case 'Okul servisi':
        navigation.navigate('SchoolBus'); break;
      default:
        break;
    }
  };

  const renderMenuItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.menuItem}
      onPress={() => {
        if (item.isShowMore) handleShowMore();
        else handleMenuNavigation(item.label);
      }}
    >
      <View style={styles.menuIconContainer}>
        <Text style={styles.menuIcon}>{item.icon}</Text>
      </View>
      <Text style={styles.menuItemText}>{item.label}</Text>
      <Text style={styles.menuItemSlogan}>{item.slogan}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 18, alignItems: 'center' }}>
        {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#790926', textAlign: 'center', marginBottom: 6 }}>
          Her çocuk bir kaşiftir. Ona sadece yön vermek gerekir.
        </Text> */}
      </View>
      <ScrollView>
        <Image source={require('../Assets/AnaSayfa4.jpg')} style={{ width: '100%', height: 180, resizeMode: 'cover', marginBottom: 16 }} />
        {/* Hizmetlerimiz Başlığı */}
        <Text style={styles.servicesTitle}>Hizmetlerimiz</Text>
        {/* Menü Grid */}
        <View style={styles.menuGrid}>
          {[...menuItems, showMoreButton].map((item, index) => renderMenuItem(item, index))}
        </View>
        {showMoreMenu && (
          <Animated.View
            style={[
              styles.moreMenuGrid,
              {
                opacity: moreMenuAnim,
                transform: [
                  {
                    translateY: moreMenuAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-30, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {moreMenuItems.map((item, index) => renderMenuItem(item, 'more-' + index))}
          </Animated.View>
        )}
        {/* Slogan ve Duyurular Alanı */}
        <View>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: contentAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 30],
                  }),
                },
              ],
            }}
          >
            {/* Okul Sloganı */}
            <View style={styles.sloganContainer}>
              <Animated.View 
                style={[
                  styles.sloganContent,
                  {
                    transform: [{ translateX: pan.x }],
                    opacity: fadeAnim,
                  }
                ]}
                {...panResponder.panHandlers}
              >
                <View style={styles.sloganWrapper}>
                  <Image 
                    source={require('../Assets/child.png')} 
                    style={styles.sloganImage}
                    resizeMode="contain"
                  />
                  <View style={styles.sloganTextContainer}>
                    <Text style={styles.sloganText}>{slogans[currentSloganIndex].main}</Text>
                    <Text style={styles.sloganSubText}>{slogans[currentSloganIndex].sub}</Text>
                  </View>
                </View>
              </Animated.View>
              <View style={styles.dotsContainer}>
                {slogans.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      currentSloganIndex === index && styles.activeDot,
                    ]}
                  />
                ))}
              </View>
            </View>
            {/* Duyurular Bölümü */}
            <View style={styles.announcementsContainer}>
              <Text style={styles.announcementsMainTitle}>DUYURULAR</Text>
              {/* Tablo Başlığı */}
              <View style={styles.announcementTableHeader}>
                <Text style={[styles.announcementHeaderCell, styles.announcementDateCell]}>Tarih</Text>
                <Text style={[styles.announcementHeaderCell, styles.announcementTitleCell]}>Duyuru{"\n"}Başlığı</Text>
                <Text style={[styles.announcementHeaderCell, styles.announcementDescCell]}>Kısa{"\n"}Açıklama</Text>
                <Text style={[styles.announcementHeaderCell, styles.announcementImageHeaderCell]} numberOfLines={1} adjustsFontSizeToFit>Resim</Text>
              </View>
              {announcements.map((announcement, index) => (
                <View key={index} style={styles.announcementTableRow}>
                  <Text style={[styles.announcementCell, styles.announcementDateCell]}>{announcement.date}</Text>
                  <Text style={[styles.announcementCell, styles.announcementTitleCell]}>{announcement.title}</Text>
                  <Text style={[styles.announcementCell, styles.announcementDescCell]}>{announcement.description}</Text>
                  <View style={styles.announcementImageCell}>
                    <Image source={announcement.image} style={{ width: 36, height: 36, resizeMode: 'contain', borderRadius: 6 }} />
                  </View>
                </View>
              ))}
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5fb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#790926',
    elevation: 4,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 2,
    marginBottom: 2,
    opacity: 0.85,
    letterSpacing: 0.2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 16,
  },
  menuItem: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#790926',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 2,
  },
  menuIcon: {
    fontSize: 28,
    color: '#ffffff',
  },
  menuItemText: {
    fontSize: 12,
    color: '#790926',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: 'bold',
  },
  menuItemSlogan: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'center',
    marginTop: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#790926',
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navItemActive: {
    borderTopWidth: 2,
    borderTopColor: '#2196F3',
  },
  navText: {
    fontSize: 12,
    color: '#ffffff',
    marginTop: 4,
  },
  navTextActive: {
    color: '#2196F3',
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#790926',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  sloganContainer: {
    backgroundColor: '#790926',
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 2,
    minHeight: 100,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  sloganContent: {
    width: '100%',
    overflow: 'hidden',
  },
  sloganWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    width: '100%',
  },
  sloganTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 8,
  },
  sloganImage: {
    width: 100,
    height: 100,
  },
  sloganText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'left',
    lineHeight: 22,
  },
  sloganSubText: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    textAlign: 'left',
    lineHeight: 18,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
    backgroundColor: '#cccccc',
  },
  announcementsContainer: {
    marginTop: 24,
    marginHorizontal: 8,
  },
  announcementsMainTitle: {
    color: '#790926',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    letterSpacing: 1,
  },
  announcementTableHeader: {
    flexDirection: 'row',
    backgroundColor: '#fae3ea',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 4,
    marginBottom: 4,
    elevation: 2,
    shadowColor: '#790926',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  announcementHeaderCell: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#790926',
    paddingHorizontal: 4,
    lineHeight: 18,
  },
  announcementTableRow: {
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
    shadowColor: '#790926',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  announcementCell: {
    fontSize: 13,
    color: '#333',
    textAlign: 'left',
    paddingHorizontal: 4,
    flexWrap: 'wrap',
  },
  announcementDateCell: {
    width: 80,
    minWidth: 70,
    maxWidth: 90,
  },
  announcementTitleCell: {
    flex: 1.4,
    minWidth: 90,
    maxWidth: 130,
  },
  announcementDescCell: {
    flex: 2.2,
    minWidth: 120,
    maxWidth: 200,
  },
  announcementImageCell: {
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  announcementImagePlaceholder: {
    width: 36,
    height: 36,
    backgroundColor: '#fae3ea',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#790926',
  },
  announcementImageHeaderCell: {
    width: 54,
    minWidth: 44,
    maxWidth: 70,
    textAlign: 'center',
  },
  moreMenuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 0,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    paddingVertical: 8,
  },
  bottomNavIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginBottom: 2,
  },
});

export default HomePage;
