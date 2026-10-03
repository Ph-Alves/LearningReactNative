import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Header from './Components/Header';
import AddTask from './Components/AddTask';
import ListStats from './Components/ListStats';

export default function Main() {
  const [text, changeText] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask text={text} onChangeText={changeText} />
        <ListStats created={5} completed={2} />
        <View style={{ flex: 1 }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -23,
    gap: 23,
  },
});
