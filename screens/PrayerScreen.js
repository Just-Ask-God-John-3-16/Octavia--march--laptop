import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Button from '../components/Button';
import Card from '../components/Card';
import colors from '../components/ColorTheme';

export default function PrayerScreen({ navigation }) {
  const [prayerText, setPrayerText] = useState('');

  const handleSubmit = () => {
    // For now, we just clear the text.
    // Later we can save it to a database or email.
    setPrayerText('');
    alert('Your prayer request has been submitted.');
  };

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        
        <Header title="Prayer Requests" />

        <Card title="Share Your Prayer">
          <Text style={styles.label}>What would you like prayer for?</Text>

          <TextInput
            style={styles.input}
            placeholder="Type your prayer request here..."
            placeholderTextColor={colors.black}
            multiline
            value={prayerText}
            onChangeText={setPrayerText}
          />

          <Button label="Submit Prayer Request" onPress={handleSubmit} />
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
  label: {
    fontSize: 16,
    color: colors.burgundy,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    minHeight: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.gold,
  },
});
