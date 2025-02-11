import React from 'react';
import {Linking, Pressable} from 'react-native';

const PressableOrNotChild = ({url, children}) => {
  if (url) {
    return (
      <Pressable
        style={{flexShrink: 1}}
        onPress={() => {
          Linking.openURL(url);
        }}>
        {children}
      </Pressable>
    );
  }
  return children;
};

export default PressableOrNotChild;
