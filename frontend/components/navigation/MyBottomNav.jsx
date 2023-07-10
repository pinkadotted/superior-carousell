import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Explore from '../../screens/Explore';
import Sell from '../../screens/Sell';

const Tab = createMaterialBottomTabNavigator();

function MyBottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Sell" component={Sell} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
}
export default MyBottomNav;
