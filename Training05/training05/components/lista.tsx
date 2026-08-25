import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

type ComponentProps = {
    title: string;
    num: number;
};


export default function Lista({title, num}: ComponentProps) {

    let idade = 16;
    let mensagem;

    if (idade >= 18) {
        mensagem = <Text>maior de idade</Text>;
    } else {
        mensagem = <Text>menor de idade</Text>;
    };

    const tarefas = [
        {
            id: 1,
            titulo: "Estudar javaScript",
            concluida: true,
        }, {
            id: 2,
            titulo: "Criar app react native",
            concluida: false,
        }, {
            id: 3,
            titulo: "Treinar",
            concluida: true,
        }
    ]

    return (
        <View style={styles.container}>
            <Text> {title} {num} </Text>
            <Text> {title} {num} </Text>
            <Text> {title} {num} </Text>
            <Text> {title} {num} </Text>
            { mensagem }

            { tarefas.map( (tarefa) => (
                <View key={tarefa.id} style={styles.tarefaBackground}>
                    <Text style={styles.textoTarefa} >{tarefa.titulo}</Text>
                </View>
            ))}
            <Button title={'Aperte aqui'} onPress={() => alert('botão pressionado')}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(1, 1, 1)',
    gap: 15,
  },

  tarefaBackground: {
    backgroundColor: 'rgb(78, 59, 59)',
    padding: 10,
    borderRadius: 10,
  },

  textoTarefa: {
    color: 'white',
  },
});
