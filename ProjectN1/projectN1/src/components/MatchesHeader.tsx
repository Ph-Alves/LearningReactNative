import { StyleSheet, Text, View } from "react-native";

export function MatchesHeader() {
  return (
    <View style={styles.matchesTitleContainer}>
      <Text style={styles.matchesTitle}>Partidas Agendadas</Text>
      <Text style={styles.matchesCount}>Total 6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  matchesTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 43,
    marginBottom: 24,
  },

  matchesTitle: {
    color: '#DDE3F0',
    fontWeight: 700,
    fontSize: 18,
  },

  matchesCount: {
    color: '#ABB1CC',
    fontSize: 13,
    fontWeight: 400,
  },
});
