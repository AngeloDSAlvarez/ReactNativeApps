import React, { } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';

import { Inicio } from '../pages/Inicio'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
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
                component={Inicio}
                name='Inicio'
                options={{
                    //tabBarLabel: 'Inicio'
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name='home' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}