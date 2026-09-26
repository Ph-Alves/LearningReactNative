import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type PlayerItemProps = {
  image: ImageSourcePropType;
  name: string;
  available: boolean;
  last?: boolean;
};

export function PlayerItem({ image, name, available, last }: PlayerItemProps) {
  const color = available ? '#34C759' : '#E51C44';

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <View style={[styles.info, !last && styles.divider]}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.dot, {backgroundColor: color}]} />
          <Text style={styles.status}>{available ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#243189',
    backgroundColor: '#1D2766',
  },

  info: {
    flex: 1,
    gap: 6,
    paddingVertical: 12,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#1D2766',
  },

  name: {
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 700,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  status: {
    color: '#ABB1CC',
    fontSize: 13,
  },
});
