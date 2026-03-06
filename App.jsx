import React from 'react'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SearchScreen from './src/screens/SearchScreen';
import AddStudentScreen from './src/screens/AddStudentScreen';
import StudentListScreen from './src/screens/StudentListScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      {/* <LoginScreen /> */}
      <RegisterScreen />
      {/* <DashboardScreen /> */}
      {/* <SearchScreen /> */}
      {/* <AddStudentScreen /> */}
      {/* <StudentListScreen /> */}
    </SafeAreaProvider>
  )
}

export default App
