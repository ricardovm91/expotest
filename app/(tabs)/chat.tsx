import { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { chatStyles } from '../styles/chat.styles';

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
            <View key={msg.id} style={chatStyles.messageRow}>
              <View style={[
                chatStyles.messageBubble,
                msg.sent ? chatStyles.sentMessage : chatStyles.receivedMessage
              ]}>
                <ThemedText style={[
                  chatStyles.messageText,
                  msg.sent ? chatStyles.sentMessageText : chatStyles.receivedMessageText
                ]}>
                  {msg.text}
                </ThemedText>
              </View>
            </View>
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
          <TouchableOpacity 
            style={chatStyles.sendButton}
            onPress={handleSend}
          >
            <ThemedText style={chatStyles.sendButtonText}>Send</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
} 