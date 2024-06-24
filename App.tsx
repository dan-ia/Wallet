import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';


import Routes from '@/app/routes';

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <Routes />
    </>
  );
}