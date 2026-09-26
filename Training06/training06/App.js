import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, Pressable, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [login, changeLogin] = useState("")
  const [completed, onComplete] = useState(false)
  const dados = [
    {id: 0, nome: "teste"},
    {id: 1, nome: "teste2"},
    {id: 2, nome: "teste3"},
    {id: 3, nome: "teste4"},
    {id: 4, nome: "teste5"},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.textField} onChangeText={changeLogin} value={login} placeholder='Qual seu nome?' placeholderTextColor={'rgba(0, 0, 0, 0.54)'}/>
      <Pressable onPress={() => {

      }}>
        <Text>Confirmar</Text> 
      </Pressable>
      <FlatList data={dados}, key></FlatList>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: 700,
  },

  textField: {
    backgroundColor: 'rgba(184, 184, 184, 0.37)',
    fontSize: 20,
    width: '90%',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});
