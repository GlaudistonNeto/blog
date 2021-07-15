import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{
              title: 'Blogs',
              headerStyle: {
                backgroundColor: '#f0eeee'
              },
              headerTintColor: '#fff',
            }}
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}