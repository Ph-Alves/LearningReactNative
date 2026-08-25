import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista from './components/lista';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista title={"teste"} num={100}></Lista>
      <Lista title={"teste"} num={100}></Lista>
      <Lista title={"teste"} num={100}></Lista>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
  },
});
