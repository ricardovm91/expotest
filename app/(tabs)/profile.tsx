import { useState } from 'react';
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import { profileStyles } from '../styles/profile.styles';
import { ThemedView } from '@/components/ThemedView';

// Import our reusable components
import { Button } from '@/app/components/Button';
import { SettingsToggle } from '@/app/components/SettingsToggle';
import { ProfileSection } from '@/app/components/ProfileSection';
import { UserProfileHeader } from '@/app/components/UserProfileHeader';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);

  const handleContactSupport = () => {
    Alert.alert('Contact Support', 'Support functionality would be implemented here');
  };

  const handleCloseAccount = () => {
    Alert.alert(
      'Close Account',
      'Are you sure you want to close your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Close Account', 
          style: 'destructive',
          onPress: () => Alert.alert('Account Closing', 'Account closing functionality would be implemented here')
        }
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ThemedView style={profileStyles.container}>
          {/* Profile Header */}
          <UserProfileHeader 
            username="John Doe" 
            email="john.doe@example.com" 
          />
          
          {/* Settings Section */}
          <ProfileSection title="Settings">
            <SettingsToggle
              label="Push Notifications"
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
            
            <SettingsToggle
              label="Face ID Login"
              value={faceIdEnabled}
              onValueChange={setFaceIdEnabled}
            />
          </ProfileSection>

          {/* Support Section */}
          <ProfileSection title="Support">
            <Button
              title="Contact Support"
              onPress={handleContactSupport}
              variant="support"
            />
          </ProfileSection>

          {/* Account Section */}
          <ProfileSection title="Account">
            <Button
              title="Close Account"
              onPress={handleCloseAccount}
              variant="danger"
            />
          </ProfileSection>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
} 