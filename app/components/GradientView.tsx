import React from 'react';
import { ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/app/styles/components.styles';

export function GradientView(props: ViewProps) {
  const { style, ...otherProps } = props;
  
  return (
    <LinearGradient
      colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
      style={[{ flex: 1 }, style]}
      {...otherProps}
    />
  );
}

export default GradientView; 