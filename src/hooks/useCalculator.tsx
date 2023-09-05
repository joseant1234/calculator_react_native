import { useRef, useState } from "react";

enum Operators {
    addition,
    subtraction,
    multiplication,
    division,
}

export const useCalculator = () => {
    const [previousNumber, setPreviousNumber] = useState('0');
    const [number, setNumber] = useState('0');
    // para que al cambiar el valor no renderize
    const lastOperation = useRef<Operators>();

    const clean = () => {
      setNumber('0');
      setPreviousNumber('0');
    }

    const buildNumber = (numberStr: string) => {

      // No aceptar doble punto
      if (number.includes('.') && numberStr === '.') { return; }

      if (number.startsWith('0') || number.startsWith('-0')) {

        // Punto decimal
        if (numberStr === '.') {
          setNumber(number + numberStr);
          // Evaluar si es otro cero y hay un punto
        } else if (numberStr === '0' && number.includes('.')) {
          setNumber(number + numberStr);

          // Evaluar si es diferente de cero y no tiene un punto
        } else if (numberStr !== '0' && !number.includes('.')) {
          setNumber(numberStr);

          // Evitar 000.0
        } else if (numberStr === '0' && !number.includes('.')) {
          setNumber(number);
        } else {
          setNumber(number + numberStr);
        }

      } else {
        setNumber(number + numberStr);
      }

    }

    const positiveNegative = () => {
      if (number.includes('-')) {
        setNumber(number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    }

    const btnDelete = () => {
      let negative = '';
      let numberTmp = number;
      if (number.includes('-')) {
        negative = '-';
        // quitar el signo negativo
        numberTmp = number.substr(1);
      }

      // hay mas numeros
      if (numberTmp.length > 1) {
        // quita la ultima posicion
        // si tiene negativo se le concatena el signo negativo
        setNumber(negative + numberTmp.slice(0, -1));
      } else {
        setNumber('0');
      }
    }

    const changeNumberToPreviousOne = () => {
      if (number.endsWith('.')) {
        setPreviousNumber(number.slice(0, -1));
      } else {
        setPreviousNumber(number);
      }
      setNumber('0');
    }

    const btnDivision = () => {
      changeNumberToPreviousOne();
      lastOperation.current = Operators.division;
    }

    const btnMultiplication = () => {
      changeNumberToPreviousOne();
      lastOperation.current = Operators.multiplication;
    }

    const btnSubtraction = () => {
      changeNumberToPreviousOne();
      lastOperation.current = Operators.subtraction;
    }

    const btnAddition = () => {
      changeNumberToPreviousOne();
      lastOperation.current = Operators.addition;
    }

    const calculate = () => {
      const num1 = Number(number);
      const num2 = Number(previousNumber);

      switch (lastOperation.current) {
        case Operators.addition:
          setNumber(`${num1 + num2}`);
          break;
        case Operators.subtraction:
          setNumber(`${num2 - num1}`);
          break;
        case Operators.multiplication:
          setNumber(`${num1 * num2}`);
          break;
        case Operators.division:
          setNumber(`${num2 / num1}`);
          break;
      }
      setPreviousNumber('0');
    }

    return {
        previousNumber,
        number,
        clean,
        positiveNegative,
        btnDelete,
        btnDivision,
        btnMultiplication,
        btnSubtraction,
        btnAddition,
        buildNumber,
        calculate
    }
}


