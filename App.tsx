import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { Teams } from 'src/screens/Teams';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Teams /> : <Loading />}
    </ThemeProvider>
  );
}
