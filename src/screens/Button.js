import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 8,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        paddingHorizonta: 7,
        marginVertical: 8,
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}