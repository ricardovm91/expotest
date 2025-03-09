import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { GradientView } from './components/GradientView';
import { loginStyles } from './styles/login_styles';

// Import our reusable components
import { Button } from '@/app/components/Button';
import { FormInput } from '@/app/components/FormInput';

export default function LoginScreen() {
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('so_easy_with_AI');
  const router = useRouter();

  const handleLogin = () => {
    // Add your login logic here
    router.push('/components');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GradientView>
        <ThemedView style={[loginStyles.container, { backgroundColor: 'transparent' }]}>
          <ThemedView style={[loginStyles.logoContainer, { backgroundColor: 'transparent' }]}>
            <ThemedText style={loginStyles.title}>Serenity</ThemedText>
          </ThemedView>
          
          <ThemedView style={loginStyles.formContainer}>
            <ThemedText style={loginStyles.welcomeText}>
              Welcome back
            </ThemedText>
            
            <FormInput
              label="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              containerStyle={loginStyles.inputContainer}
            />
            
            <FormInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              containerStyle={loginStyles.inputContainer}
            />
            
            <Button
              title="Sign In"
              onPress={handleLogin}
              variant="primary"
              style={loginStyles.loginButton}
              textStyle={loginStyles.loginButtonText}
            />
          </ThemedView>
        </ThemedView>
      </GradientView>
    </SafeAreaView>
  );
} 