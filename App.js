/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
// import BoxShadow from 'react-native-box-shadow';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NeoComp />
        {/* <NeoComp /> */}
        {/* <NeoComp /> */}
      </SafeAreaView>
    </>
  );
};

// const NeoComp = () => {
//   return <BoxShadow x={60} y={-16} color="teal" />;
// };

const NeoComp = () => {
  const shadowOpt = {
    width: 300,
    height: 80,
    color: '#000',
    border: 18,
    radius: 6,
    opacity: 0.04,
    x: 5,
    y: 5,
    style: {marginVertical: 18},
  };
  const shadowOpt2 = {
    width: 300,
    height: 80,
    color: '#fff',
    border: 16,
    radius: 6,
    opacity: 0.5,
    x: -5,
    y: -5,
    // style: {marginVertical: 18},
  };
  return (
    <BoxShadow setting={shadowOpt}>
      <BoxShadow setting={shadowOpt2}>
        <View style={styles.box} />
      </BoxShadow>
    </BoxShadow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 80,
    borderRadius: 6,
    backgroundColor: '#f5f5f5',
    // marginVertical: 18,
  },
});

export default App;
