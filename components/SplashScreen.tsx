import React from "react";
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SplashScreen =()=>{
    const navigation = useNavigation();

    const handlePress =()=>{
        navigation.navigate('Login');
};

return(
<View style={styles.container}>
    <TouchableOpacity onPress={handlePress}/>
    <Text style={styles.logo}>Starbucks LOGO! </Text>
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
    },
  });

  export default SplashScreen;