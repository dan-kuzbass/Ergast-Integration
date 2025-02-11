import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DriverScreenNames, DriverStackParamList} from './types';
import DriversList from '../screens/DriverList';
import DriverInfo from '../screens/DriverInfo';

const DriversStack = () => {
  const Stack = createNativeStackNavigator<DriverStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={DriverScreenNames.DRIVER_LIST}
        options={{title: 'Список гонщиков'}}
        component={DriversList}
      />
      <Stack.Screen
        name={DriverScreenNames.DRIVER_INFO}
        component={DriverInfo}
      />
    </Stack.Navigator>
  );
};

export default DriversStack;
