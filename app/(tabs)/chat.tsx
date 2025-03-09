import { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { chatStyles } from '../styles/chat.styles';

// Import our reusable components
import { Button } from '@/app/components/Button';
import { MessageBubble } from '@/app/components/MessageBubble';

const exampleMessages = [
  { id: 1, text: "Hey there! How are you?", sent: false },
  { id: 2, text: "I'm doing great, thanks! How about you?", sent: true },
  { id: 3, text: "Pretty good! Just working on some React Native stuff.", sent: false },
  { id: 4, text: "That's awesome! Need any help?", sent: true },
];

export default function ChatScreen() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Handle sending message here
    setMessage('');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={chatStyles.container}>
        <ThemedText style={chatStyles.title}>Chat</ThemedText>
        
        <ScrollView style={chatStyles.messagesContainer}>
          {exampleMessages.map((msg) => (
            <MessageBubble
              key={msg.id}
              text={msg.text}
              sent={msg.sent}
            />
          ))}
        </ScrollView>

        <View style={chatStyles.inputContainer}>
          <TextInput
            style={chatStyles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            placeholderTextColor="#999"
          />
          <Button
            title="Send"
            onPress={handleSend}
            variant="primary"
            style={chatStyles.sendButton}
            textStyle={chatStyles.sendButtonText}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
} 