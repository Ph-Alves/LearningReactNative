import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.verticalContainer}>
        <Text style={styles.title}>Jogo da velha!!</Text>
        <View style={styles.horizontalContainer}>
          <View style={styles.quadOne}></View>
          <View style={styles.quadTwo}></View>
          <View style={styles.quadThree}></View>
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.quadFour}></View>
          <View style={styles.quadFive}></View>
          <View style={styles.quadSix}></View>
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.quadSeven}></View>
          <View style={styles.quadEight}></View>
          <View style={styles.quadNine}></View>
        </View>
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
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },

  verticalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  horizontalContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  quadOne: {
    width: 100,
    height: 100,
    borderEndColor: '#000000',
    borderEndWidth: 3,
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },

  quadTwo: {
    width: 100,
    height: 100,
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },

  quadThree: {
    width: 100,
    height: 100,
    borderStartColor: '#000000',
    borderStartWidth: 3,
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },

  quadFour: {
    width: 100,
    height: 100,
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
    borderEndColor: '#000000',
    borderEndWidth: 3,
  },
  
  quadFive: {
    width: 100,
    height: 100,
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },

  quadSix: {
    width: 100,
    height: 100,
    borderStartColor: '#000000',
    borderStartWidth: 3,
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },

  quadSeven: {
    width: 100,
    height: 100,
    borderEndColor: '#000000',
    borderEndWidth: 3,
  },

  quadEight: {
    width: 100,
    height: 100,
  },

  quadNine: {
    width: 100,
    height: 100,
    borderStartColor: '#000000',
    borderStartWidth: 3,
  },
});
