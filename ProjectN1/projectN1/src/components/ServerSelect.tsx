import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ServerSelectProps = {
  name?: string;
  onPress?: () => void;
};

export function ServerSelect({ name, onPress }: ServerSelectProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon} />
      <Text style={styles.text}>{name ?? 'Selecione um servidor'}</Text>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 68,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#243189',
    backgroundColor: '#0E1647',
    overflow: 'hidden',
    marginHorizontal: 24,
  },

  icon: {
    width: 68,
    alignSelf: 'stretch',
    backgroundColor: '#1D2766',
    borderRightWidth: 1,
    borderColor: '#243189',
  },

  text: {
    flex: 1,
    textAlign: 'center',
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 700,
  },

  chevron: {
    color: '#DDE3F0',
    fontSize: 28,
    marginRight: 20,
  },
});
