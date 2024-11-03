import React, { } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Feather from '@expo/vector-icons/Feather';

import StackRoutes from '../routes/stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

import CustomDrawer from '../componentes/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
       <Drawer.Navigator
       drawerContent={CustomDrawer}
       screenOptions={{
        headerShown: false,

        drawerActiveBackgroundColor: '#00dae4',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'
       }}
       >
        <Drawer.Screen 
            name='HomeStack'
            component={StackRoutes}
            options={{
                title: 'Inicio'
            }}
        />
        <Drawer.Screen 
            name='Sobre'
            component={Sobre}
        />
        <Drawer.Screen 
            name='Contato'
            component={Contato}
        />
       </Drawer.Navigator>
  );
}