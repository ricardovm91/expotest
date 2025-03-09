import { SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { componentStyles } from './styles/components.styles';

export default function ComponentsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={componentStyles.container}>
        <ThemedText style={componentStyles.title}>
          Components
        </ThemedText>
        {/* Add your components showcase here */}
      </ThemedView>
    </SafeAreaView>
  );
} 