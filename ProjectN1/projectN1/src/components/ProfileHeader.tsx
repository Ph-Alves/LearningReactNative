import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ProfileHeaderProps = {
  onAddPress: () => void;
};

export function ProfileHeader({ onAddPress }: ProfileHeaderProps) {
  return (
    <View style={styles.topContainer}>
      <Image source={require('../../assets/images/profile.png')} style={styles.profileImage}/>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Olá, <Text style={[styles.textStyle, {fontWeight: 700}]}>Thiago</Text></Text>
        <Text style={styles.textDescriptionStyle}>Hoje é dia de vitória</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
        <Image source={require('../../assets/images/plus.png')} style={styles.plusText}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 34,
  },

  profileImage: {
    width: 46,
    height: 46,
    backgroundColor: '#E51C44',
    borderWidth: 1,
    borderColor: '#1B2565',
    borderRadius: 8,
    marginRight: 22,
    marginLeft: 24,
  },

  textContainer: {
    flex: 1,
  },

  textDescriptionStyle: {
    fontSize: 13,
    color: '#ABB1CC',
    fontWeight: 400,
  },

  textStyle: {
    fontSize: 24,
    color: '#DDE3F0',
    fontWeight: 400,
  },

  addButton: {
    backgroundColor: '#E51C44',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 24,
  },

  plusText: {
    width: 14,
    height: 14,
  },
});
