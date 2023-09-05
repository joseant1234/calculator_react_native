import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'


export const CalculatorScreen = () => {

  const {
    previousNumber,
    number,
    clean,
    positiveNegative,
    btnDelete,
    btnDivision,
    buildNumber,
    btnMultiplication,
    btnSubtraction,
    btnAddition,
    calculate,
  } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>
      {
        (previousNumber !== '0') && (
          <Text style={ styles.smallResult }>{ previousNumber }</Text>
        )
      }
      <Text
        style={ styles.result }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        { number }
      </Text>
      <View style={ styles.row }>
        {/* Button */}
        <ButtonCalc
          text='C'
          color='#9B9B9B'
          action={ clean }
        />
        <ButtonCalc
          text='+/-'
          color='#9B9B9B'
          action={ positiveNegative }
        />
        <ButtonCalc
          text='del'
          color='#9B9B9B'
          action={ btnDelete }
        />
        <ButtonCalc
          text='/'
          color='#FF9427'
          action={ btnDivision }
        />
      </View>

      {/* Fila de botones */}
      <View style={ styles.row }>
        {/* Button */}
        <ButtonCalc
          text='7'
          action={ buildNumber }
        />
        <ButtonCalc
          text='8'
          action={ buildNumber }
        />
        <ButtonCalc
          text='9'
          action={ buildNumber }
        />
        <ButtonCalc
          text='X'
          color='#FF9427'
          action={ btnMultiplication }
        />
      </View>

      {/* Fila de botones */}
      <View style={ styles.row }>
        {/* Button */}
        <ButtonCalc
          text='4'
          action={ buildNumber }
        />
        <ButtonCalc
          text='5'
          action={ buildNumber }
        />
        <ButtonCalc
          text='6'
          action={ buildNumber }
        />
        <ButtonCalc
          text='-'
          color='#FF9427'
          action={ btnSubtraction }
        />
      </View>

      {/* Fila de botones */}
      <View style={ styles.row }>
        {/* Button */}
        <ButtonCalc
          text='1'
          action={ buildNumber }
        />
        <ButtonCalc
          text='2'
          action={ buildNumber }
        />
        <ButtonCalc
          text='3'
          action={ buildNumber }
        />
        <ButtonCalc
          text='+'
          color='#FF9427'
          action={ btnAddition }
        />
      </View>

      {/* Fila de botones */}
      <View style={ styles.row }>
        {/* Button */}
        <ButtonCalc
          text='0'
          width
          action={ buildNumber }
        />
        <ButtonCalc
          text='.'
          action={ buildNumber }
        />
        <ButtonCalc
          text='='
          color='#FF9427'
          action={ calculate }
        />
      </View>

    </View>
  )
}

