import Dashboard from './screens/Dashboard';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
   <Stack.Screen name="Dashboard" component={Dashboard} /> 
        <Stack.Screen 
          name="Home" 
<Stack.Screen name="DailyScripture" component={DailyScriptureScreen} />
<Stack.Screen name="Prayer" component={PrayerScreen} />
<Stack.Screen name="BibleStudy" component={BibleStudyScreen} />
<Stack.Screen name="Testimony" component={TestimonyScreen} />
<Stack.Screen name="Recovery" component={RecoverySupportScreen} />
<Stack.Screen name="Donations" component={DonationsScreen} />  
          component={HomeScreen} 
          options={{ title: 'Just Ask God Ministries' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
