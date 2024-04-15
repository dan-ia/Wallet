import { createStackNavigator } from '@react-navigation/stack'
import TabRoutes from './Tab.Routes';
import Profile from '../pages/Profile';
import Buy from '../pages/Buy';
import Sell from '../pages/Sell';
import Convert from '../pages/Convert';
import Deposit from '../pages/Deposit';

const Stack = createStackNavigator()

declare global {
    namespace ReactNavigation {

        interface RootParamList {
            Home: undefined
            Profile: undefined
            Buy: undefined
            Sell: undefined
            Convert: undefined
            Deposit: undefined
        }
    }
}

export default function StackRoutes() {
    return (

        <Stack.Navigator

            screenOptions={{
                title: '',
                headerTintColor: '#fff',
                headerTransparent: true,
            }}>
            <Stack.Screen
                name='Home'
                component={TabRoutes}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{
                    presentation: 'modal',
                    gestureDirection: 'horizontal-inverted',

                }}
            />
            <Stack.Screen
                name='Buy'
                component={Buy}
                options={{
                    presentation: 'transparentModal'
                }}
            />

            <Stack.Screen
                name='Sell'
                component={Sell}
                options={{
                    presentation: 'transparentModal'
                }}
            />
            <Stack.Screen
                name='Convert'
                component={Convert}
                options={{
                    presentation: 'transparentModal'
                }}
            />
            <Stack.Screen
                name='Deposit'
                component={Deposit}
                options={{
                    presentation: 'transparentModal'
                }}
            />
        </Stack.Navigator>

    );
}