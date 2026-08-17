import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {

  const letters = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J' , 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V' , 'W', 'X',
    'Y', 'Z'
  ];

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/forca.png')}/>

      <View style={styles.grid}>
        {letters.map((letter) => (
          <Text key={letter} style={styles.letterBox}>{ letter }</Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },

  image: {
    width: 100,
    height: 200,
    marginTop: 100,
  },

  grid: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25
  },

  letterBox: {
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 12,
    width: 50,
    height: 50,
    margin: 10
  }
});
