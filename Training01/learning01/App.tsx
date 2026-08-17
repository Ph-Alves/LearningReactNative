import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.horizontalContainer}>
        <View style= {styles.containerOne}>
          <Image 
          style={styles.imageStyle} 
          source={require('./assets/ironMan1.jpg')}
          />
        </View>
        <View style= {styles.containerTwo}>
          <Image 
          style={styles.imageStyle} 
          source={require('./assets/ironMan2.jpeg')}
          />
        </View>
      </View>

      <View style={styles.horizontalContainer}>
        <View style= {styles.containerThree}>
          <Image 
          style={styles.imageStyle} 
          source={require('./assets/ironMan3.jpg')}
          />
        </View>
        <View style= {styles.containerFour}>
          <Image 
          style={styles.imageStyle} 
          source={require('./assets/ironMan4.jpeg')}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },

  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  containerOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f01',
  },

  containerTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3BCD54'
  },

  containerThree: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f09'
  },

  containerFour: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3BCDE6'
  },

  imageStyle: {
    width: 150,
    height: 150,
  }
});
