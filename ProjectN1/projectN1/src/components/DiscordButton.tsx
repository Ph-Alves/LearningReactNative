import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type DiscordButtonProps = {
  onPress: () => void;
};

export function DiscordButton({ onPress }: DiscordButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <View/>
      <TouchableOpacity style={styles.discordButton} onPress={onPress}>
        <Image source={require('../../assets/images/discord.png')} style={styles.discordImage}/>
        <View style={styles.divider}></View>
        <Text style={styles.fontDescriptionStyle}>Entrar com Discord</Text>
      </TouchableOpacity>
      <View/>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    gap: 50,
    marginBottom: 127,
    flexDirection: 'row',
    alignItems: 'center',
  },

  discordButton: {
    backgroundColor: '#E51C44',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 3,
    flex: 2,
    borderRadius: 8,
  },

  discordImage: {
    marginVertical: 19,
    marginLeft: 16
  },

  fontDescriptionStyle: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 500,
    marginHorizontal: 40,
    lineHeight: 25,
  },

  divider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: '#991F36',
    marginHorizontal: 15,
  },
});
