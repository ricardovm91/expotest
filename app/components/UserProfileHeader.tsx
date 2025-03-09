import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

interface UserProfileHeaderProps {
  username: string;
  email: string;
  onAvatarPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  usernameStyle?: StyleProp<TextStyle>;
  emailStyle?: StyleProp<TextStyle>;
}

export function UserProfileHeader({
  username,
  email,
  onAvatarPress,
  containerStyle,
  usernameStyle,
  emailStyle,
}: UserProfileHeaderProps) {
  return (
    <ThemedView style={[styles.profileSection, containerStyle]}>
      <TouchableOpacity 
        style={styles.profileImageContainer}
        onPress={onAvatarPress}
        disabled={!onAvatarPress}
      >
        <Ionicons name="person" size={60} color="#999" />
      </TouchableOpacity>
      <ThemedText style={[styles.username, usernameStyle]}>{username}</ThemedText>
      <ThemedText style={[styles.email, emailStyle]}>{email}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
    padding: 20,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E5E5EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
});

export default UserProfileHeader; 