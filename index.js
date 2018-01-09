// import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a  Component
const App = () => (
  <Text>Some text</Text>
);

// Render it on device
AppRegistry.registerComponent('albums', () => App);
