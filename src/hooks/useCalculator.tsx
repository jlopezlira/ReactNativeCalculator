import {useRef, useState} from 'react';
import {Operations} from '../types/index';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const operation = useRef<Operations>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
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

  const changePreviousOperationValue = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divide = () => {
    changePreviousOperationValue();
    operation.current = Operations.divide;
  };

  const minus = () => {
    changePreviousOperationValue();
    operation.current = Operations.minus;
  };

  const multiply = () => {
    changePreviousOperationValue();
    operation.current = Operations.multiply;
  };

  const plus = () => {
    changePreviousOperationValue();
    operation.current = Operations.plus;
  };

  const calculate = () => {
    const value1 = Number(number);
    const value2 = Number(previousNumber);

    switch (operation.current) {
      case Operations.divide:
        if (value1 === 0 || value2 === 0) {
          setNumber('Division not supported!');
          setTimeout(() => {
            setNumber('0');
            setPreviousNumber('0');
          }, 5000);
        } else {
          setNumber(`${value2 / value1}`);
        }
        break;
      case Operations.minus:
        setNumber(`${value1 - value2}`);
        break;
      case Operations.multiply:
        setNumber(`${value1 * value2}`);
        break;
      case Operations.plus:
        setNumber(`${value1 + value2}`);
        break;
    }
    setPreviousNumber('0');
  };

  return {
    calculate,
    clear,
    del,
    divide,
    minus,
    multiply,
    number,
    operationValues,
    plus,
    positiveNegative,
    previousNumber,
  };
};
