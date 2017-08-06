import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Home from './Home';
import Profile from './Profile';

const Drawer= DrawerNavigator({

  home:{screen: Home},
  profile:{screen: Profile},

},{

})
export default Drawer;