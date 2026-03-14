import Dashboard from './screens/Dashboard';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all your screens
import HomeScreen from './screens/HomeScreen';
import DailyScriptureScreen from './screens/DailyScriptureScreen';
import PrayerScreen from './screens/PrayerScreen';
import BibleStudyScreen from './screens/BibleStudyScreen';
import TestimonyScreen from './screens/TestimonyScreen';
import RecoverySupportScreen from './screens/RecoverySupportScreen';
import DonationsScreen from './screens/DonationsScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Dashboard is the home screen */}
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ headerShown: false }}
        />

        {/* Other screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyScripture" component={DailyScriptureScreen} />
        <Stack.Screen name="Prayer" component={PrayerScreen} />
        <Stack.Screen name="BibleStudy" component={BibleStudyScreen} />
        <Stack.Screen name="Testimony" component={TestimonyScreen} />
        <Stack.Screen name="Recovery" component={RecoverySupportScreen} />
        <Stack.Screen name="Donations" component={DonationsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
