import "react-native-gesture-handler";

import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import AppNavigation from "./navigation/AppNavigation";


export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
  );
}