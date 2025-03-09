import React from 'react';
import { View, ViewProps } from 'react-native';
import { colors } from '@/app/styles/components.styles';

export function ThemedView(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <View
      style={[{ backgroundColor: colors.surfacePrimary }, style]}
      {...otherProps}
    />
  );
}

export default ThemedView; 