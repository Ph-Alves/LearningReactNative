import { StyleSheet, Text, View } from "react-native";

export function IntroText() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.fontTitleStyle}>Conecte-se e organize suas jogatinas</Text>
      <Text style={styles.fontDescriptionStyle}>Crie grupos para jogar seus games favoritos com seus amigos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    zIndex: 3,
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 35,
    paddingRight: 25,
  },

  fontTitleStyle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 40,
    textAlign: 'center',
  },

  fontDescriptionStyle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 500,
    marginHorizontal: 40,
    lineHeight: 25,
  },
});
