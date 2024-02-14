import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,ScrollView, StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';

// Importacion de componentes
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import OTPScreen from './components/OTPScreen';
import UserInfoScreen from './components/UserInfoScreen';
import WelcomeScreen from './components/WelcomeScreen';
import MenuScreen from './components/MenuScreen';

const stack = createStackNavigator();
const drawer= createDrawerNavigator();

const MainStack =() =>{
  return ( 
  <NavigationContainer>
  <stack.Navigator initialRouteName='Splash'>
    <stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
    <stack.Screen name='Login' component={LoginScreen}/>
    <stack.Screen name='OTP' component={OTPScreen}/>
    <stack.Screen name='UserInfo' component={UserInfoScreen}/>
    <stack.Screen name='Welcome' component={WelcomeScreen}/>
    <stack.Screen name='Menu' component={MenuScreen}/>
  </stack.Navigator>
</NavigationContainer> 
  );
};
const App=() =>{
  return (
  <NavigationContainer>
    <drawer.Navigator initialRouteName="Main" drawerContent={()=> <MenuScreen/>}>
      <drawer.Screen name="Main" component={MainStack}/>
      </drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
