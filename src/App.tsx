import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './theme/globalTheme';
import CalculatorScreen from './screens/CalculatorScreen';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
