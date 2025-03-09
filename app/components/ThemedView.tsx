import React from 'react';
import { View, ViewProps, useColorScheme } from 'react-native';

interface ThemedViewProps extends ViewProps {
  lightColor?: string;
  darkColor?: string;
}

export function ThemedView(props: ThemedViewProps) {
  const {
    lightColor = '#FFFFFF',
    darkColor = '#000000',
    style,
    ...otherProps
  } = props;

  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? darkColor : lightColor;

  return (
    <View
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export default ThemedView; 