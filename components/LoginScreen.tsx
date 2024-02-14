import React from "react";
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {
    const navigation=useNavigation();

    const handleSignIn =()=> {
        navigation.navigate('OTP');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.logo}>Starbucks LOGO!</Text>
            <TextInput style={styles.input} placeholder="Correo Electronico"/>
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true}/>
            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                <Text style={styles.buttonText}>Iniciar Sesion</Text>
            </TouchableOpacity>
        </View>
        );
    };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00704a', // Color de Starbucks
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#00704a', // Color de Starbucks
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;