import {Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {Variants, Props} from '../types/index';

const CalculatorButton = ({action, label, large, variant}: Props) => {
  const setBackgroundColor = (): string => {
    switch (variant) {
      case Variants.warning:
        return '#EC9E07';
      case Variants.alt:
        return '#9b9b9b';
      default:
        return '#343434';
    }
  };

  const setFontColor = (): string => {
    switch (variant) {
      case Variants.alt:
        return 'black';
      case Variants.warning:
      default:
        return 'white';
    }
  };

  const ios = {
    flex: large ? 1 : 0,
  };

  const android = {
    width: large ? '43%' : 80,
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: setBackgroundColor(),
      borderRadius: 100,
      height: 80,
      justifyContent: 'center',
      width: 80,
      marginHorizontal: 5,
      ...(Platform.OS === 'android' ? android : ios),
    },
    buttonText: {
      color: setFontColor(),
      fontSize: 30,
      padding: 10,
      fontWeight: '500',
    },
  });

  return (
    <TouchableOpacity onPress={() => action(label)} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
