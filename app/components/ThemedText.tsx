import React from 'react';
import { Text, TextProps } from 'react-native';
import { colors } from '@/app/styles/components.styles';

interface ThemedTextProps extends TextProps {
  variant?: 'primary' | 'secondary';
}

export function ThemedText(props: ThemedTextProps) {
  const { variant = 'primary', style, ...otherProps } = props;

  const textColor = variant === 'primary' ? colors.textPrimary : colors.textSecondary;

  return (
    <Text
      style={[{ color: textColor }, style]}
      {...otherProps}
    />
  );
}

export default ThemedText; 