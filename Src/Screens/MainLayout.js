import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import BottomNav from './BottomNav';

const MainLayout = ({ children, navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const routeName = navigation.getState().routes[navigation.getState().index].name;
    
    // Map route names to tab indices
    const routeToTabIndex = {
      'Home': 0,
      'School': 1,
      'About': 2,
      'Contact': 3
    };

    if (routeToTabIndex[routeName] !== undefined) {
      setSelectedTab(routeToTabIndex[routeName]);
    }
  }, [navigation.getState().index]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <BottomNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingBottom: 8,
  },
});

export default MainLayout; 