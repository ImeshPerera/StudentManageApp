import React from 'react'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import StudentListScreen from './src/screens/StudentListScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <DashboardScreen /> */}
      <StudentListScreen />
    </SafeAreaProvider>
  )
}

export default App
