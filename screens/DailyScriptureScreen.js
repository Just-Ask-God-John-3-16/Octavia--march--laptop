import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import colors from '../components/ColorTheme';

export default function DailyScriptureScreen({ navigation }) {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        
        <Header title="Daily Scripture" />

        <Card title="Today's Verse">
          <Text style={styles.scripture}>
            “For we walk by faith, not by sight.”
          </Text>
          <Text style={styles.reference}>— 2 Corinthians 5:7</Text>
        </Card>

        <Button 
          label="Back to Home" 
          onPress={() => navigation.navigate('Home')} 
        />

      </View>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scripture: {
    fontSize: 18,
    color: colors.burgundy,
    fontWeight: '600',
    marginBottom: 6,
  },
  reference: {
    fontSize: 14,
    color: colors.black,
    fontStyle: 'italic',
  },
});
