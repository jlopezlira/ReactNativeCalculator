import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type Color = 'alt' | 'warning';

interface Props {
  action: (value: string) => void;
  label: string;
  large?: boolean;
  variant?: Color;
}

const CalculatorButton = ({action, label, large, variant}: Props) => {
  const setBackgroundColor = (): string => {
    switch (variant) {
      case 'warning':
        return '#EC9E07';
      case 'alt':
        return '#9b9b9b';
      default:
        return '#343434';
    }
  };

  const setFontColor = (): string => {
    switch (variant) {
      case 'alt':
        return 'black';
      case 'warning':
      default:
        return 'white';
    }
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
      flex: large ? 1 : 0,
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
