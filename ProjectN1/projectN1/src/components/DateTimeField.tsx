import { StyleSheet, Text, TextInput, View } from "react-native";

type DateTimeFieldProps = {
  title: string;
  separator: string;
  first: string;
  second: string;
  onChangeFirst: (value: string) => void;
  onChangeSecond: (value: string) => void;
};

export function DateTimeField({ title, separator, first, second, onChangeFirst, onChangeSecond }: DateTimeFieldProps) {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.dataTitle}>{title}</Text>
      <View style={styles.dataRow}>
        <TextInput style={styles.dataInput}
          value={first}
          onChangeText={onChangeFirst}
          keyboardType="number-pad"
          maxLength={2}
          textAlign="center" />

        <Text style={styles.dataMiddleText}>{separator}</Text>

        <TextInput style={styles.dataInput}
          value={second}
          onChangeText={onChangeSecond}
          keyboardType="number-pad"
          maxLength={2}
          textAlign="center" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    gap: 12,
  },

  dataTitle: {
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 700,
  },

  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  dataInput: {
    backgroundColor: '#1D2766',
    width: 48,
    height: 48,
    borderRadius: 8,
    borderColor: '#243189',
    borderWidth: 1,
    color: '#DDE3F0',
  },

  dataMiddleText: {
    color: '#ABB1CC',
    fontSize: 15,
    fontWeight: 500,
  },
});
