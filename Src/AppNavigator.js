import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Screens/homePage';
import AnnouncementsScreen from './Screens/AnnouncementsScreen';
import EventsScreen from './Screens/EventsScreen';
import MenuScreen from './Screens/MenuScreen';
import GuidanceScreen from './Screens/GuidanceScreen';
import SchoolScreen from './Screens/SchoolScreen';
import GalleryScreen from './Screens/GalleryScreen';
import ContactScreen from './Screens/ContactScreen';
import AboutScreen from './Screens/AboutScreen';
import BranchLessonsScreen from './Screens/BranchLessonsScreen';
import JobApplicationScreen from './Screens/JobApplicationScreen';
import SchoolBusScreen from './Screens/SchoolBusScreen';
import MainLayout from './Screens/MainLayout';

const Stack = createStackNavigator();

const withMainLayout = (Component) => (props) => (
  <MainLayout navigation={props.navigation}>
    <Component {...props} />
  </MainLayout>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={withMainLayout(HomePage)} />
      <Stack.Screen name="Announcements" component={withMainLayout(AnnouncementsScreen)} />
      <Stack.Screen name="Events" component={withMainLayout(EventsScreen)} />
      <Stack.Screen name="Menu" component={withMainLayout(MenuScreen)} />
      <Stack.Screen name="Guidance" component={withMainLayout(GuidanceScreen)} />
      <Stack.Screen name="School" component={withMainLayout(SchoolScreen)} />
      <Stack.Screen name="Gallery" component={withMainLayout(GalleryScreen)} />
      <Stack.Screen name="Contact" component={withMainLayout(ContactScreen)} />
      <Stack.Screen name="About" component={withMainLayout(AboutScreen)} />
      <Stack.Screen name="BranchLessons" component={withMainLayout(BranchLessonsScreen)} />
      <Stack.Screen name="JobApplication" component={withMainLayout(JobApplicationScreen)} />
      <Stack.Screen name="SchoolBus" component={withMainLayout(SchoolBusScreen)} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator; 