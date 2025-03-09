import { SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { chatStyles } from './styles/chat.styles';

export default function ChatScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={chatStyles.container}>
        <ThemedText style={chatStyles.title}>
          Chat
        </ThemedText>
        {/* Add your chat interface here */}
      </ThemedView>
    </SafeAreaView>
  );
} 