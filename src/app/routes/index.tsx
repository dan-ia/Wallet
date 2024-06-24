import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from "./Stack.Routes"


export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}