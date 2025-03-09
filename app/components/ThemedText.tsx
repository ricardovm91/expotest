import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

interface ThemedTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
}

export function ThemedText(props: ThemedTextProps) {
  const {
    lightColor = '#000000',
    darkColor = '#FFFFFF',
    style,
    ...otherProps
  } = props;

  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? darkColor : lightColor;

  return (
    <Text
      style={[{ color }, style]}
      {...otherProps}
    />
  );
}

export default ThemedText; 