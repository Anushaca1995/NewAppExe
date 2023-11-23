import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <Text style={{padding: 20}}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {})}
      />
    </View>
  );
};

export default HomeScreen;
