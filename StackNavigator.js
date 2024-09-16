import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import MovieScreen from './screen/MovieScreen';
import ThreaterScreen from './screen/ThreaterScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Movie' component={MovieScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Theater' component={ThreaterScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})