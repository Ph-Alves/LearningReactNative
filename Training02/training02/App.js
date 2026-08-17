import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Olha o fundo rosa ae!</Text>
      <Pressable onPress={onPressFunction} style={styles.logBox}>
        <Text style={styles.textStyle}>Teste</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function onPressFunction() {
  console.log("Apertou")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f09',
  },
  textStyle: {
    backgroundColor: "#f02",
    fontSize: 35,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 10,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  }
});
