import React from 'react';
import { TextInput, StyleSheet, StyleProp, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface FormInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
}

export function FormInput({
  label,
  value,
  onChangeText,
  containerStyle,
  labelStyle,
  inputStyle,
  secureTextEntry = false,
  ...rest
}: FormInputProps) {
  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <ThemedText style={[styles.label, labelStyle]}>{label}</ThemedText>
      <TextInput
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
        {...rest}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
});

export default FormInput; 