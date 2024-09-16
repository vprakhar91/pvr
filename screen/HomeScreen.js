import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

import MovieCards from '../component/MovieCards'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#F0F0F0",flex:1}}>
        <MovieCards/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})