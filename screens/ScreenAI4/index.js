import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgetPasswordScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email address to reset your password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#A6A6A6" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#A6A6A6',
    marginBottom: 30
  },
  inputContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    marginBottom: 20
  },
  input: {
    fontSize: 16,
    color: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
export default ForgetPasswordScreen;