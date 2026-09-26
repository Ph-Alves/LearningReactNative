import { Image, StyleSheet, View } from "react-native";

export function HeroImage() {
  return (
    <View style={styles.imageContainer}>
      <Image source={require('../../assets/images/leeImageBckg.png')} style={styles.imageBackgroundStyle}/>
      <Image source={require('../../assets/images/leesin.png')} style={styles.leeImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginTop: 100,
  },

  imageBackgroundStyle: {
    position: 'absolute',
    width: '100%',
    height: 359,
    zIndex: 1,
  },

  leeImage: {
    position: 'absolute',
    width: 375,
    marginTop: 14,
    height: 354,
    zIndex: 2,
  },
});
