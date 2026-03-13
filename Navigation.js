import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import DailyScriptureScreen from './screens/DailyScriptureScreen';
import PrayerScreen from './screens/PrayerScreen';
import BibleStudyScreen from './screens/BibleStudyScreen';
import TestimonyScreen from './screens/TestimonyScreen';
import RecoverySupportScreen from './screens/RecoverySupportScreen';
import DonationsScreen from './screens/DonationsScreen';
import AboutMinistryScreen from './screens/AboutMinistryScreen';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyScripture" component={DailyScriptureScreen} />
        <Stack.Screen name="Prayer" component={PrayerScreen} />
        <Stack.Screen name="BibleStudy" component={BibleStudyScreen} />
        <Stack.Screen name="Testimony" component={TestimonyScreen} />
        <Stack.Screen name="Recovery" component={RecoverySupportScreen} />
        <Stack.Screen name="Donations" component={DonationsScreen} />
        <Stack.Screen name="AboutMinistry" component={AboutMinistryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );

