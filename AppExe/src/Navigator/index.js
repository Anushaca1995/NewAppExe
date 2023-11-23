import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#400080', color: 'white'},
        headerTintColor: '#fefefe',
      }}>
      <Stack.Screen
        options={{
          headerTitleStyle: {color: 'white'},
          headerLeftContainerStyle: {color: 'white'},
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: {color: 'white'},
          headerLeftContainerStyle: {color: 'white'},
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
