import {styles} from '../theme/globalTheme';
import {Text, View} from 'react-native';
import React from 'react';
import CalculatorButton from '../components/CalculatorButton';
import {Variants} from '../types/index';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    clear,
    del,
    divide,
    minus,
    multiply,
    plus,
    calculate,
    number,
    previousNumber,
    positiveNegative,
    operationValues,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {previousNumber !== '0' && (
        <Text style={styles.previousNumber}>{previousNumber}</Text>
      )}
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.number}>
        {number}
      </Text>
      <View style={styles.row}>
        <CalculatorButton action={clear} variant={Variants.alt} label="C" />
        <CalculatorButton
          variant={Variants.alt}
          label="±"
          action={positiveNegative}
        />
        <CalculatorButton variant={Variants.alt} label="del" action={del} />
        <CalculatorButton
          variant={Variants.warning}
          label="/"
          action={divide}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="7" action={operationValues} />
        <CalculatorButton label="8" action={operationValues} />
        <CalculatorButton label="9" action={operationValues} />
        <CalculatorButton
          variant={Variants.warning}
          label="X"
          action={multiply}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="4" action={operationValues} />
        <CalculatorButton label="5" action={operationValues} />
        <CalculatorButton label="6" action={operationValues} />
        <CalculatorButton variant={Variants.warning} label="-" action={minus} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="1" action={operationValues} />
        <CalculatorButton label="2" action={operationValues} />
        <CalculatorButton label="3" action={operationValues} />
        <CalculatorButton variant={Variants.warning} label="+" action={plus} />
      </View>
      <View style={styles.row}>
        <CalculatorButton large label="0" action={operationValues} />
        <CalculatorButton label="." action={operationValues} />
        <CalculatorButton
          variant={Variants.warning}
          label="="
          action={calculate}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
