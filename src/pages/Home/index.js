import { StyleSheet, Text, View, FlatList  } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list=[
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type:0 //receita / entradas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '20/09/2022',
    type:1 //receita / entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '22/09/2022',
    type:1 //receita / entradas
  }
]


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gustavo Dias"/>
      <Balance saldo="9.250,00" gastos="-527,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas moviementações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Text><Moviments data={item}/></Text> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    margin:14,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop:14
  },
  list:{
    marginStart: 14,
    marginEnd:14,
  }
});
