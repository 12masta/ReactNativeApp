// import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a  Component
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it on device
AppRegistry.registerComponent('albums', () => App);
