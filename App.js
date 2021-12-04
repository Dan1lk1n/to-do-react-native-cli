/** 
 * Main script
 * all starts here
*/

import React, {useState } from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './components/header';
import ListItem from './components/list_item';
import Form from './components/form';

export default function App() {
  
  const [listOfItems, setListOfItems] = useState([ //  list with tasks
    {text: "Registration", key: '1'},
    {text: "Authorization", key: '2'},
    {text: "Course selection", key: '3'},
    {text: "Purchase", key:'4'},
    {text: "Passing the course", key:'5'},
    {text: "Get certificate", key:'6'},
  ])
  
  const addHandler = (text) => {// add element to list
    setListOfItems((list)=> {
      return[
        {text: text, key: Math.random.toString(36).substring(7)},
        ...list
      ]
    });
  }

  const deleteHandler = (key) => { // delete clicked element
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    }); 
  }

  return (
    <View>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => ( // render of tasks
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
