import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Screens/Header';
import BottomNav from './Screens/BottomNav';

const MainLayout = ({ children, selectedTab, setSelectedTab, navigation }) => (
  <SafeAreaView style={styles.container}>
    <Header />
    <View style={styles.content}>{children}</View>
    <BottomNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} navigation={navigation} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f5fb' },
  content: { flex: 1 },
});

export default MainLayout; 