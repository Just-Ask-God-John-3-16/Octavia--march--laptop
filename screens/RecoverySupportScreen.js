import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import colors from '../components/ColorTheme';

export default function RecoverySupportScreen({ navigation }) {
  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>

        <Header title="Recovery & Support" />

        <Card title="You Are Not Alone">
          <Text style={styles.bodyText}>
            If you're struggling with addiction, recovery, trauma, or emotional pain,
            you deserve real support from real people. Healing happens in community.
          </Text>
        </Card>

        <Card title="Recovery Mentorship">
          <Text style={styles.bodyText}>
            Connect with mentors, sponsors, church leaders, or trusted adults who can
            walk with you through your journey.
          </Text>
        </Card>

        <Card title="Recovery Communities">
          <Text style={styles.bodyText}>
            Explore recovery groups like Celebrate Recovery, church support groups,
            mentorship programs, and community outreach.
          </Text>
        </Card>

        <Card title="Private Support">
          <Text style={styles.bodyText}>
            If you need someone to talk to privately, reach out to a mentor or trusted
            support person. You don’t have to speak out loud to be heard.
          </Text>
        </Card>

        <Card title="Safety Note">
          <Text style={styles.bodyText}>
            This app does not replace professional help. If you're in danger or facing
            a crisis, please reach out to someone you trust immediately.
          </Text>
        </Card>

        <Button 
          label="Back to Home" 
          onPress={() => navigation.navigate('Home')} 
        />

      </ScrollView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 12,
    lineHeight: 22,
  },
});
