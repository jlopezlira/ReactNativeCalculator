import {styles} from '../theme/globalTheme';
import {Text, View} from 'react-native';
import React, {useState} from 'react';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousOperationResult, setPreviousOperationResult] = useState('0');

  const clear = () => {
    setNumber('0');
    setPreviousOperationResult('0');
  };

  const operationValues = (value: string) => {
    if (number.includes('.') && value === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (value === '.') {
        setNumber(number + value);
      } else if (value === '0' && number.includes('.')) {
        setNumber(number + value);
      } else if (value !== '0' && !number.includes('.')) {
        setNumber(value);
      } else if (value === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + value);
      }
    } else {
      setNumber(number + value);
    }
  };

  const positiveNegative = () =>
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber('-' + number);

  const del = () => {
    let negative = '';
    let value = number;

    if (number.includes('-')) {
      negative = '-';
      value = number.substr(1);
    }

    if (value.length > 1) {
      setNumber(negative + value.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.previousOperationResult}>
        {previousOperationResult}
      </Text>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.number}>
        {number}
      </Text>
      <View style={styles.row}>
        <CalculatorButton action={clear} variant="alt" label="C" />
        <CalculatorButton variant="alt" label="±" action={positiveNegative} />
        <CalculatorButton variant="alt" label="del" action={del} />
        <CalculatorButton variant="warning" label="/" action={clear} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="7" action={operationValues} />
        <CalculatorButton label="8" action={operationValues} />
        <CalculatorButton label="9" action={operationValues} />
        <CalculatorButton variant="warning" label="X" action={clear} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="4" action={operationValues} />
        <CalculatorButton label="5" action={operationValues} />
        <CalculatorButton label="6" action={operationValues} />
        <CalculatorButton variant="warning" label="-" action={clear} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="1" action={operationValues} />
        <CalculatorButton label="2" action={operationValues} />
        <CalculatorButton label="3" action={operationValues} />
        <CalculatorButton variant="warning" label="+" action={clear} />
      </View>
      <View style={styles.row}>
        <CalculatorButton large label="0" action={operationValues} />
        <CalculatorButton label="." action={operationValues} />
        <CalculatorButton variant="warning" label="=" action={clear} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
