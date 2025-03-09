import { SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ComponentsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, padding: 20 }}>
        <ThemedText style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Components
        </ThemedText>
        {/* Add your components showcase here */}
      </ThemedView>
    </SafeAreaView>
  );
} 