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
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Just Ask God Ministries' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );1
}
