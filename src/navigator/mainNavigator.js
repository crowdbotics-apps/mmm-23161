import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps181667Navigator from '../features/Maps181667/navigator';
import Additem181666Navigator from '../features/Additem181666/navigator';
import Maps181662Navigator from '../features/Maps181662/navigator';
import UserProfile181658Navigator from '../features/UserProfile181658/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps181667: { screen: Maps181667Navigator },
Additem181666: { screen: Additem181666Navigator },
Maps181662: { screen: Maps181662Navigator },
UserProfile181658: { screen: UserProfile181658Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
