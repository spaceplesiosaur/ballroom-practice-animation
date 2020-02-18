import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Numbers({stylePropz, styleProp, one, two, three, four, five, six}) {
  return (
    <View style={stylePropz}>
      <Text style={styleProp}>{one}</Text>
      <Text style={styleProp}>{two}</Text>
      <Text style={styleProp}>{three}</Text>
      <Text style={styleProp}>{four}</Text>
      <Text style={styleProp}>{five}</Text>
      <Text style={styleProp}>{six}</Text>
    </View>
  );
}
