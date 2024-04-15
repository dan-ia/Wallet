import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from '@/app/routes';

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style='light' />
      <Routes />
    </NavigationContainer>

  );
}