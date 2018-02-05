import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {
    return (
      <View style={styles.containerStyle}>
      <Text>as</Text>
        {props.children}
      </View>
    );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;