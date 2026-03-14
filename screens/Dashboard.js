
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Just Ask God Ministries</Text>
      <Text style={styles.subheader}>Where Covenant Meets Calling</Text>

      <View style={styles.grid}>
        <Tile title="Daily Scripture" color="#D4AF37" onPress={() => navigation.navigate('DailyScripture')} />
        <Tile title="Prayer Requests" color="#800020" onPress={() => navigation.navigate('Prayer')} />
        <Tile title="Bible Study" color="#FF00AA" onPress={() => navigation.navigate('BibleStudy')} />
        <Tile title="Testimony" color="#CC0000" onPress={() => navigation.navigate('Testimony')} />
        <Tile title="Recovery Support" color="#000000" onPress={() => navigation.navigate('Recovery')} />
        <Tile title="Donations" color="#FFD700" onPress={() => navigation.navigate('Donations')} />
      </View>
    </ScrollView>
  );
}

function Tile({ title, color, onPress }) {
  return (
    <TouchableOpacity style={[styles.tile, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.tileText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#800020',
    textAlign: 'center',
    marginTop: 20,
  },
  subheader: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: '48%',
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tileText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
