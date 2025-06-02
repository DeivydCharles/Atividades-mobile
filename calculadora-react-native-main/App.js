import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Calculator from './src/Calculator';

export default function App() {
  return (
    <PaperProvider>
      <Calculator />
    </PaperProvider>
  );
}
