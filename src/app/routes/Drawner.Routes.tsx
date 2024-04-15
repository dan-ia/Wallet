import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from './Tab.Routes';
import Buy from '../pages/Buy';
import Sell from '../pages/Sell';
import Convert from '../pages/Convert';
import Deposit from '../pages/Deposit';
import Profile from '../pages/Profile';

const Drawer = createDrawerNavigator();

export default function DrawnRouters() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: false,

            }}>
            <Drawer.Screen
                name='Home'
                component={TabRoutes}
            />
            <Drawer.Screen
                name='Profile'
                component={Profile}
            />
            <Drawer.Screen
                name='Buy'
                component={Buy}
            />
            <Drawer.Screen
                name='Sell'
                component={Sell}
            />
            <Drawer.Screen
                name='Convert'
                component={Convert}
            />
            <Drawer.Screen
                name='Deposit'
                component={Deposit}
            />
        </Drawer.Navigator>
    )
}