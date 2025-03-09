import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TextStyle, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { colors } from '@/app/styles/components.styles';

interface MessageBubbleProps {
  text: string;
  sent: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  bubbleStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function MessageBubble({
  text,
  sent,
  containerStyle,
  bubbleStyle,
  textStyle,
}: MessageBubbleProps) {
  return (
    <View style={[styles.messageRow, containerStyle]}>
      <View
        style={[
          styles.messageBubble,
          sent ? styles.sentMessage : styles.receivedMessage,
          bubbleStyle,
        ]}
      >
        <ThemedText
          style={[
            styles.messageText,
            sent ? styles.sentMessageText : styles.receivedMessageText,
            textStyle,
          ]}
        >
          {text}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    maxWidth: '80%',
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  sentMessage: {
    backgroundColor: colors.accentPrimary,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    borderTopRightRadius: 4,
  },
  receivedMessage: {
    backgroundColor: colors.surfaceSecondary,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 4,
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
});

export default MessageBubble; 