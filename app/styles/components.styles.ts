import { StyleSheet } from 'react-native';

export const colors = {
  // Background gradients
  primaryGradientStart: '#E6E6FA', // Light lavender
  primaryGradientEnd: '#B8B8FF',   // Soft purple
  
  // Text colors
  textPrimary: '#1A1A2E',         // Dark navy
  textSecondary: '#4A4A6A',       // Muted navy
  
  // Surface colors
  surfacePrimary: '#FFFFFF',      // Pure white
  surfaceSecondary: '#F8F8FF',    // Ghost white
  
  // Accent colors
  accentPrimary: '#7B68EE',       // Medium slate blue
  accentSecondary: '#9370DB',     // Medium purple
};

export const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.surfacePrimary,
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: colors.primaryGradientStart, // Fallback
  },
  card: {
    backgroundColor: colors.surfacePrimary,
    borderRadius: 16,
    padding: 16,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  button: {
    backgroundColor: colors.accentPrimary,
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.surfacePrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});

// Adding default export to satisfy Expo Router
export default function ComponentStyles() {
  return null;
} 