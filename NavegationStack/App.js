import React, {  } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* Cria as stacks de navegação, o name é depois utilizado para as rotas */}
        <Stack.Screen 
        name='Home' 
        component={Home}
        options={{
          title: 'Tela principal',
          
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name='Sobre' 
        component={Sobre} 
        options={{
          title: 'Pagina sobre',
          headerStyle:{
            backgroundColor: '#121212'
          },
          headerTintColor: '#fff',
        }}
        />

        <Stack.Screen
        name='Contato'
        component={Contato}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}