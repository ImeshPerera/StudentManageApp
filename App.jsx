import React from 'react'

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SearchScreen from './src/screens/SearchScreen';
import AddStudentScreen from './src/screens/AddStudentScreen';
import StudentListScreen from './src/screens/StudentListScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Drawer.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: 'Search Student', unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="AddStudentScreen"
        component={AddStudentScreen}
        options={{ title: 'Add Student', unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            // Prevent the default navigation action
            e.preventDefault();
            // Manually navigate and force the student param to be null
            navigation.navigate("AddStudentScreen", { student: null });
            // Close the drawer
            navigation.closeDrawer();
          },
        })}
      />
      <Drawer.Screen
        name="StudentListScreen"
        component={StudentListScreen}
        options={{ title: 'Student List', unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {/* Auth Screens */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

          {/* Main App with Drawer */}
          <Stack.Screen name="MainApp" component={DrawerRoutes} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
