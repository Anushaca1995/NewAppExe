import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  selectCount,
} from '../../reducers/counter/counterSlice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <View style={{padding: 20}}>
      <Text style={{padding: 20}}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {})}
      />
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default HomeScreen;
