import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  import auth from '@react-native-firebase/auth';
  
  const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onLogin = () => {
      auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(() => {
          Alert.alert('Success', 'Login successful!');
        })
        .catch(error => {
          // Handle specific Firebase error codes
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Error', 'Password is not correct!');
          } else if (error.code === 'auth/user-not-found') {
            Alert.alert('Error', 'No user found with this email!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('Error', 'The email address is invalid!');
          } else {
            Alert.alert('Error', 'An unexpected error occurred!');
          }
          console.error('Login error:', error);
        });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.signup}>Login Screen</Text>
        <TextInput
          placeholder="Email"
          style={styles.inputBox}
          value={email}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.inputBox}
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <TouchableOpacity onPress={onLogin} style={styles.register}>
          <Text style={styles.registerTitle}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    inputBox: {
      borderWidth: 1,
      borderColor: 'grey',
      paddingHorizontal: 12,
      borderRadius: 5,
      width: '90%',
      marginTop: 20,
    },
    register: {
      width: '90%',
      backgroundColor: '#FCAF03',
      padding: 12,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 40,
    },
    registerTitle: {
      fontSize: 16,
      color: '#000000',
      fontWeight: '600',
    },
    signup: {
      fontSize: 20,
      color: '#000000',
      fontWeight: '600',
      marginBottom: 80,
    },
  });
  
  export default LoginScreen;
  