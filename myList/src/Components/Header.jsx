import { StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top + 24 }]}>
      <View style={styles.titleContainer}>
        <Image style={styles.titleImage} source={require('../../assets/titleIcon.png')} />
        <Text style={styles.titleTextOne}>My</Text>
        <Text style={styles.titleTextTwo}>List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
    paddingBottom: 70,
    gap: 42,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleImage: {
    width: 32,
    height: 32,
  },

  titleTextOne: {
    color: '#04CBCE',
    fontSize: 24,
    fontWeight: '900',
  },

  titleTextTwo: {
    color: '#1099E5',
    fontSize: 24,
    fontWeight: '900',
  },
});
