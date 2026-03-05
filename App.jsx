import React from 'react'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      {/* <LoginScreen /> */}
      <RegisterScreen />
    </SafeAreaProvider>
  )
}

export default App
