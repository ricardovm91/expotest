import { StyleSheet, View } from 'react-native';

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

// Adding default export to satisfy Expo Router
export default function ChatStyles() {
  return null;
} 