import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { colors } from '@/app/styles/components.styles';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textPrimary,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    lineHeight: 100,
  },
  formContainer: {
    width: '100%',
    backgroundColor: colors.surfacePrimary,
    padding: 24,
    borderRadius: 16,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.textSecondary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.surfaceSecondary,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: colors.textPrimary,
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    fontWeight: '600',
  },
});

// Adding a default export component to satisfy the route requirements
export default function LoginStyles() {
  return null; // This component doesn't render anything
}