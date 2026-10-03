import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SelectableCardProps = {
  tipo?: string;
  image?: ImageSourcePropType;
  selected: boolean;
  onPress: () => void;
};

export function SelectableCard({ tipo, image, selected, onPress }: SelectableCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, selected && styles.cardSelected]}>
      <View style={[styles.checkbox, selected && styles.checkboxSelected]} />
      <Image source={image} style={[styles.cardImage, !selected && styles.cardImageDim]}></Image>
      <Text style={styles.cardText}>{tipo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 104,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
    backgroundColor: '#0E1647',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },

  cardSelected: {
    borderColor: '#3243BD',
    backgroundColor: '#1D2766',
  },

  checkbox: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#243189',
  },

  checkboxSelected: {
    backgroundColor: '#E51C44',
    borderColor: '#E51C44',
  },

  cardImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },

  cardImageDim: {
    opacity: 0.6,
  },

  cardText: {
    color: '#DDE3F0',
    fontWeight: 700,
  },
});
