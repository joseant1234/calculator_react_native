import React from 'react'
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/appTheme';

const App = () => {
  // como esta de color negro el safeArea no se ve el statusbar. Para mostrar en este caso el statusbar colocar el componente StatusBar con el backgroundColor del color del safeArea (para android) y barStyle (para ios)
  return (
    <SafeAreaView style={ styles.wrapper }>
      <StatusBar
        backgroundColor='back'
        barStyle='light-content'
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;