import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Bem-vindo!</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Calculator')} style={styles.button}>
        Ir para Calculadora
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('API Example')} style={styles.button}>
        Ver API Pública
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginTop: 16,
    width: '80%',
  },
});
