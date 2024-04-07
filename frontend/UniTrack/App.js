import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Home from "./pages/Home";
import Stats from 

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="" component={Home} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  //
});