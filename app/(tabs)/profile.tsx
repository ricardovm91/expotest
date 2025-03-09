import { SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { profileStyles } from './styles/profile.styles';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={profileStyles.container}>
        <ThemedText style={profileStyles.title}>
          Profile
        </ThemedText>
        {/* Add your profile content here */}
      </ThemedView>
    </SafeAreaView>
  );
} 