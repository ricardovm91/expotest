import { StyleSheet } from 'react-native';
import { colors } from '@/app/styles/components.styles';

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.surfacePrimary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
  },
  messagesContainer: {
    flex: 1,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginHorizontal: 8,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  sentMessage: {
    backgroundColor: colors.accentPrimary,
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: colors.surfaceSecondary,
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  sentMessageText: {
    color: colors.surfacePrimary,
  },
  receivedMessageText: {
    color: colors.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceSecondary,
    backgroundColor: colors.surfacePrimary,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 16,
    color: colors.textPrimary,
  },
  sendButton: {
    backgroundColor: colors.accentPrimary,
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: colors.surfacePrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});

// Adding default export to satisfy Expo Router
export default function ChatStyles() {
  return null;
} 