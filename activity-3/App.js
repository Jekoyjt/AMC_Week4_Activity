import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const morning = [
  {
    id: 'todo1',
    title: 'Wake-up',
  },
  {
    id: 'todo2',
    title: 'Turn off alarm',
  },
  {
    id: 'todo3',
    title: 'Make a Boffee',
  },
  {
        id: 'todo4',
    title: 'Make a Breakfast',
  },
   {
        id: 'todo5',
    title: 'Watch News',
  },
];
const afternoon = [
  {
    id: 'todo6',
    title: 'Take a shower',
  },
  {
    id: 'todo7',
    title: 'Go to Work',
  },
  {
    id: 'todo8',
    title: 'Do my job as a Service Crew',
  },
  {
        id: 'todo9',
    title: 'Go to Home After Work',
  },
   {
        id: 'todo10',
    title: 'Prepare my clothes for school',
  },
];

const evening = [
  {
    id: 'todo11',
    title: 'Go to School',
  },
  {
    id: 'todo12',
    title: 'Take Notes',
  },
  {
    id: 'todo13',
    title: 'Go Home',
  },
  {
        id: 'todo14',
    title: 'Preapare Dinner',
  },
   {
        id: 'todo15',
    title: 'Goto bed',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text       style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
          color: 'skyblue',
          fontWeight: 'bold',
          fontSize: 30,
          backgroundColor: 'grey',
          borderColor: 'tomato',
        }}> Morning </Text>
      <FlatList
        data={morning}
        renderItem={({item}) => <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />
    <Text
    style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
          color: 'skyblue',
          fontWeight: 'bold',
          fontSize: 30,
          backgroundColor: 'grey',
          borderColor: 'tomato',
        }}> Afternoon </Text>

      <FlatList
        data={afternoon}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text
      style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
          color: 'skyblue',
          fontWeight: 'bold',
          fontSize: 30,
          backgroundColor: 'grey',
          borderColor: 'tomato',
        }}> Evening </Text>

      <FlatList
        data={evening}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
  item: {
    backgroundColor: 'lightgreen',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
 
});

export default App;