import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
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
    title: 'Make a Coffee',
  },
  {
    id: 'todo4',
    title: 'Make Breakfast',
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
    title: 'Go Home After Work',
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
    title: 'Prepare Dinner',
  },
  {
    id: 'todo15',
    title: 'Go to bed',
  },
];

type ItemProps = {
  item: {
    title: string;
  };
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Morning</Text>
      <FlatList
        data={morning}
        renderItem={({item}) => (
          <Item
            item={item}
            onPress={() => {}}
            backgroundColor="lightgreen"
            textColor="black"
          />
        )}
        keyExtractor={item => item.id}
      />
      <Text style={styles.heading}>Afternoon</Text>
      <FlatList
        data={afternoon}
        renderItem={({item}) => (
          <Item
            item={item}
            onPress={() => {}}
            backgroundColor="lightgreen"
            textColor="black"
          />
        )}
        keyExtractor={item => item.id}
      />
      <Text style={styles.heading}>Evening</Text>
      <FlatList
        data={evening}
        renderItem={({item}) => (
          <Item
            item={item}
            onPress={() => {}}
            backgroundColor="lightgreen"
            textColor="black"
          />
        )}
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
  heading: {
    borderColor: 'black',
    borderWidth: 5,
    textAlign: 'center',
    padding: 10,
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'grey',
    borderColor: 'tomato',
  },
});

export default App;
