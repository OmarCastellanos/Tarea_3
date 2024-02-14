import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WelcomeScreenProps {
  name: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido, {name}!</Text>
      <Text style={styles.instructions}>Escoge una bebida del menu debajo:</Text>
      {/* menú de bebidas */}
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default WelcomeScreen;