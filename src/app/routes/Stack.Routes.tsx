import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import PageBuy from '../pages/Buy';

export default function StackRoutes() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Buy"
                component={PageBuy}
            />
        </Stack.Navigator>

    );
}