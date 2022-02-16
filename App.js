import { NativeBaseProvider } from 'native-base';
import  Header  from './src/components/layout/Header';
import MoviesContainer from './src/components/containers/MoviesContainer';
import AppStack from './src/components/stacks/AppStack';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <AppStack />
    </NativeBaseProvider>
  ); 
}

export default App; 