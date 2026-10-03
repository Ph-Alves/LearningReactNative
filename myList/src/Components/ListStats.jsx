import { StyleSheet, Text, View } from 'react-native';

export default function ListStats({ created, completed }) {
  return (
    <View style={styles.topListContainer}>
      <View style={styles.group}>
        <Text style={styles.textListLeft}>Criadas</Text>
        <Text style={styles.textCount}>{created}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.textListRight}>Concluidas</Text>
        <Text style={styles.textCount}>{completed}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
  },

  group: {
    flexDirection: 'row',
    gap: 8,
  },

  textListLeft: {
    color: '#00CBCE',
    fontSize: 14,
  },

  textListRight: {
    color: '#109AE5',
    fontSize: 14,
  },

  textCount: {
    borderRadius: 999,
    width: 25,
    height: 19,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
  },
});
