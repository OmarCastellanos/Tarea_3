import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuItem}>Menu Item 1</Text>
      <Text style={styles.menuItem}>Menu Item 2</Text>
      <Text style={styles.menuItem}>Menu Item 3</Text>
      {/* Más elementos de menú */}
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
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MenuScreen;