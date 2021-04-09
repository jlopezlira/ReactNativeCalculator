import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import {styles} from './theme/globalTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
