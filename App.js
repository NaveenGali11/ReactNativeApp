import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  const [name, setName] = useState('naveen');
  const [person, setPerson] = useState({name:'mario',age:40});

  const [userName, setUserName] = useState('naveen');
  const [userAge, setUserAge] = useState(18);

  const clickHandler = () => {
   setName('G.Naveen')
   setPerson({name:'Naveen',age:18})
 }


  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>His Name is {person.name} and his age is {person.age}</Text>
      <Text>UserName : {userName}</Text>
      <Text>UserAge : {userAge}</Text>

      <View>
        <Text>Enter Name :</Text>
        <TextInput multiline placeholder='Enter User Name' placeholderTextColor='red' style={styles.input} onChangeText={(val) => setUserName(val)}/>
      </View>

        <View>
            <Text>Enter Age :</Text>
            <TextInput keyboardType='numeric' placeholder='Enter User Age' placeholderTextColor='red' style={styles.input} onChangeText={(val) => setUserAge(val)}/>
        </View>

      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop : 20,
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding: 8,
    margin:10,
    width:200,
  }
});
