import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("Untitled3");
    }}><Image source={require("./deer-4425706.jpg")} style={styles.logo} /></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  }
});
export default SplashScreen;