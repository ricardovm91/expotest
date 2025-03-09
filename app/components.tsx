import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from './components/ThemedText';
import { Button } from './components/Button';
import { FormInput } from './components/FormInput';
import { MessageBubble } from './components/MessageBubble';
import { ProfileSection } from './components/ProfileSection';
import { SettingsToggle } from './components/SettingsToggle';
import { UserProfileHeader } from './components/UserProfileHeader';

export default function ComponentsScreen() {
  const [inputValue, setInputValue] = useState('');
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Component Showcase</ThemedText>

      {/* Button Examples */}
      <ProfileSection title="Buttons">
        <View style={styles.buttonContainer}>
          <Button title="Primary Button" onPress={() => {}} />
          <Button title="Secondary" variant="secondary" onPress={() => {}} />
          <Button title="Support" variant="support" onPress={() => {}} />
          <Button title="Danger" variant="danger" onPress={() => {}} />
          <Button title="Disabled Button" disabled onPress={() => {}} />
        </View>
      </ProfileSection>

      {/* UserProfileHeader Example */}
      <ProfileSection title="User Profile Header">
        <UserProfileHeader
          username="John Doe"
          email="john.doe@example.com"
          onAvatarPress={() => {}}
        />
      </ProfileSection>

      {/* FormInput Example */}
      <ProfileSection title="Form Inputs">
        <FormInput
          label="Username"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter your username"
        />
        <FormInput
          label="Password"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter your password"
          secureTextEntry
        />
      </ProfileSection>

      {/* MessageBubble Examples */}
      <ProfileSection title="Message Bubbles">
        <MessageBubble
          text="Hey, how are you?"
          sent={false}
        />
        <MessageBubble
          text="I'm doing great, thanks for asking!"
          sent={true}
        />
      </ProfileSection>

      {/* SettingsToggle Examples */}
      <ProfileSection title="Settings Toggles">
        <SettingsToggle
          label="Enable Notifications"
          value={toggleValue}
          onValueChange={setToggleValue}
        />
        <SettingsToggle
          label="Dark Mode"
          value={!toggleValue}
          onValueChange={(value: boolean) => setToggleValue(!value)}
        />
        <SettingsToggle
          label="Disabled Setting"
          value={false}
          onValueChange={() => {}}
          disabled
        />
      </ProfileSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 12,
  },
}); 