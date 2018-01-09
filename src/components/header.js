//import libraries for making a Component
import React from 'react';
import { Text } from 'react-native';

// make a Component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// make the componenet available to other parts of the App
export default Header;
