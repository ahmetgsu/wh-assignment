import React, {FC, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppStack} from './navigation/AppStack';
// import SplashScreen from 'react-native-splash-screen';

const App: FC = () => {
  return (
    <PaperProvider>
      <AppStack />
    </PaperProvider>
  );
};

export default App;