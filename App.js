import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
// import { styles } from './src/styles';
import Screen from "./src/Screen";


export default function App() {
  return (
    // <Provider store={}>
    <Screen />
    // </Provider>
    // <View style={styles.container}>
    //   <Text>haha</Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
