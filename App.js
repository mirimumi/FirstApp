import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textbold}>Rama 9 in Head</Text>
      <Text>Rama 9 in Head</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FFCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold:{
    color: '#FF3333',
    fontsize: '50',
    fontWeight: 'bolder',

  }
});
