import React, { } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true, //esconde a tabbar quando abre o teclado
          tabBarShowLabel: false, //para exibir ou não o label do icone
          tabBarActiveTintColor: '#fff', //altera a cor do icone ativo
          
          tabBarStyle: {
            backgroundColor: '#202225',
            borderTopWidth: 0, // bordar acima da tab
          }

        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            //tabBarLabel: 'Inicio'
            tabBarIcon: ({ color, size }) => {
              return <Feather name='home' color={color} size={size} />
            }
          }}
        />
        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='file-text' color={color} size={size} />
            }
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            //headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name='phone-call' color={color} size={size} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}