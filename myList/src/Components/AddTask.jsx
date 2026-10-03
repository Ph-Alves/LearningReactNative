import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function AddTask({ text, onChangeText }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput onChangeText={onChangeText} value={text} style={styles.titleInput}>
        <Text style={{ color: '#7A7A7A' }}>Adicione algo a sua lista</Text>
      </TextInput>

      <TouchableOpacity style={styles.addButton}>
        <Image source={require('../../assets/plus.png')} style={styles.addImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginHorizontal: 24,
  },

  titleInput: {
    backgroundColor: '#262626',
    flex: 1,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 72,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderRadius: 6,
  },

  addButton: {
    padding: 18,
    backgroundColor: '#007CB5',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    height: 52,
  },

  addImage: {
    width: 16,
    height: 16,
  },
});
