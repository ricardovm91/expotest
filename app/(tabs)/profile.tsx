import { useState } from 'react';
import { SafeAreaView, Image, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { profileStyles } from '../styles/profile.styles';
import { Ionicons } from '@expo/vector-icons';

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
          <ThemedText style={profileStyles.title}>Profile</ThemedText>
          
          {/* Profile Section */}
          <ThemedView style={profileStyles.profileSection}>
            <TouchableOpacity style={profileStyles.profileImageContainer}>
              <Ionicons name="person" size={60} color="#999" />
            </TouchableOpacity>
            <ThemedText style={profileStyles.username}>John Doe</ThemedText>
            <ThemedText style={profileStyles.email}>john.doe@example.com</ThemedText>
          </ThemedView>

          {/* Settings Section */}
          <ThemedView style={profileStyles.section}>
            <ThemedText style={profileStyles.sectionTitle}>Settings</ThemedText>
            
            {/* Notifications */}
            <ThemedView style={profileStyles.settingItem}>
              <ThemedText style={profileStyles.settingText}>Push Notifications</ThemedText>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={notificationsEnabled ? '#007AFF' : '#f4f3f4'}
              />
            </ThemedView>

            {/* Face ID */}
            <ThemedView style={profileStyles.settingItem}>
              <ThemedText style={profileStyles.settingText}>Face ID Login</ThemedText>
              <Switch
                value={faceIdEnabled}
                onValueChange={setFaceIdEnabled}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={faceIdEnabled ? '#007AFF' : '#f4f3f4'}
              />
            </ThemedView>
          </ThemedView>

          {/* Support Section */}
          <ThemedView style={profileStyles.section}>
            <ThemedText style={profileStyles.sectionTitle}>Support</ThemedText>
            <TouchableOpacity 
              style={profileStyles.supportButton}
              onPress={handleContactSupport}
            >
              <ThemedText style={profileStyles.supportButtonText}>Contact Support</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          {/* Account Section */}
          <ThemedView style={profileStyles.section}>
            <ThemedText style={profileStyles.sectionTitle}>Account</ThemedText>
            <TouchableOpacity 
              style={profileStyles.dangerButton}
              onPress={handleCloseAccount}
            >
              <ThemedText style={profileStyles.dangerButtonText}>Close Account</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
} 