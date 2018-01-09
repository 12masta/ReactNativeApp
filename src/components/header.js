//import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 20
  }
};

// make the componenet available to other parts of the App
export default Header;
