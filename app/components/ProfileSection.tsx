import React, { ReactNode } from 'react';
import { StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export function ProfileSection({
  title,
  children,
  containerStyle,
  titleStyle,
}: ProfileSectionProps) {
  return (
    <ThemedView style={[styles.section, containerStyle]}>
      <ThemedText style={[styles.sectionTitle, titleStyle]}>{title}</ThemedText>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProfileSection; 