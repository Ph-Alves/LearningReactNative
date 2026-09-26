import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageSourcePropType, StyleSheet, Text } from "react-native";

type CategoryCardProps = {
  tipo?: string;
  image?: ImageSourcePropType;
};

export function CategoryCard({ tipo, image }: CategoryCardProps) {
  return (
    <LinearGradient
      colors={['#1D2766', '#171F52']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.cardBackground}>
      <Image source={image} style={[styles.cardImage, tipo == 'Diversão' && {height: 48}]}></Image>
      <Text style={styles.cardText}>{tipo}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    borderRadius: 8,
    height: 120,
    width: 104,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },

  cardImage: {
    width: 48,
    height: 48,
  },

  cardText: {
    color: '#DDE3F0',
    fontWeight: 700,
  },
});
