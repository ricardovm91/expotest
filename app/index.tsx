import { TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { loginStyles } from './login_styles';

export default function LoginScreen() {
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('so_easy_with_AI');
  const router = useRouter();

  const handleLogin = () => {
    // Add your login logic here
    router.push('/(tabs)');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={loginStyles.container}>
        <ThemedView style={loginStyles.logoContainer}>
          <ThemedText style={loginStyles.title}>Nanci</ThemedText>
        </ThemedView>
        
        <ThemedView style={loginStyles.formContainer}>
          <ThemedText style={loginStyles.welcomeText}>Welcome, please sign in.</ThemedText>
          
          <ThemedView style={loginStyles.inputContainer}>
            <ThemedText style={loginStyles.label}>Username</ThemedText>
            <TextInput
              style={loginStyles.input}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </ThemedView>
          
          <ThemedView style={loginStyles.inputContainer}>
            <ThemedText style={loginStyles.label}>Password</ThemedText>
            <TextInput
              style={loginStyles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </ThemedView>
          
          <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
            <ThemedText style={loginStyles.loginButtonText}>Login</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
} 