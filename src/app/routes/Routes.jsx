import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6, AntDesign, MaterialIcons } from '@expo/vector-icons';

import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

import Home from '@/app/pages/Home';
import Wallet from '@/app/pages/Wallet'
import Transfer from '@/app/pages/Transfer';


const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{

                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.black,
                    borderTopWidth: 0,
                    borderRadius: 27,
                    width: '45%',
                    height: 60,
                    left: '27%',
                    position: 'absolute',
                    marginBottom: 15,
                },
                // tabBarActiveTintColor: theme.colors.yellow,    
            }}>


            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <FontAwesome6 style={styles.active} name="coins" size={32} color={theme.colors.yellow} />
                        }
                        return <FontAwesome6 name="coins" size={28} color={theme.colors.white} />
                    }
                }} />

            <Tab.Screen
                name='Transfer'
                component={Transfer}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <AntDesign style={styles.active} name="swap" size={32} color={theme.colors.yellow} />
                        }
                        return <AntDesign name="swap" size={28} color={theme.colors.white} />
                    }
                }}
            />

            <Tab.Screen
                name='Wallet'
                component={Wallet}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <MaterialIcons style={styles.active} name="wallet" size={32} color={theme.colors.yellow} />
                        }
                        return <MaterialIcons name="wallet" size={28} color={theme.colors.white} />
                    }
                }} />

        </Tab.Navigator>

    )

}

const styles = StyleSheet.create({
    active: {
        borderRadius: 20,
        padding: 5,
    }
})