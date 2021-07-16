import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';
import { Feather, EvilIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation, route }) => ({
            headerTitle: 'Blogs',
            headerStyle: {
              backgroundColor: '#f0eeee'
            },
            headerTintColor: '#fff',
          })}
          headerShown={false}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            headerShown={false}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            headerShown={false}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            headerShown={false}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
