import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Surface } from 'react-native-paper';

const buttons = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
  ['C']
];

export default function CalculatorScreen() {
  const [input, setInput] = useState('');

  const handlePress = (val) => {
    if (val === 'C') {
      setInput('');
    } else if (val === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Erro');
      }
    } else {
      setInput((prev) => prev + val);
    }
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.display}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </Surface>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <Button
                key={btn}
                mode="contained"
                style={styles.button}
                labelStyle={styles.buttonLabel}
                onPress={() => handlePress(btn)}
              >
                {btn}
              </Button>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  display: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 16,
    marginBottom: 24,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  displayText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  buttonContainer: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
  },
  buttonLabel: {
    fontSize: 20,
  },
});
