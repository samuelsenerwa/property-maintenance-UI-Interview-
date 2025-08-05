import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../components/ThemeProvider';
import { styles } from './styles/SignUpStyles';

export function SignUp() {
  const navigation = useNavigation();
  const { colors, isDarkMode } = useTheme();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    // Validation
    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (fullName.trim().length < 2) {
      Alert.alert('Error', 'Please enter a valid full name');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Password validation
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement actual sign up logic here
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to login or handle successful signup
      Alert.alert('Success', 'Account created successfully!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const dynamicStyles = styles(colors);

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <KeyboardAvoidingView
        style={dynamicStyles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={dynamicStyles.scrollView}
          contentContainerStyle={dynamicStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={dynamicStyles.content}>
            {/* Header */}
            <View style={dynamicStyles.header}>
              <TouchableOpacity
                style={dynamicStyles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={colors.text}
                />
              </TouchableOpacity>
              <Text style={dynamicStyles.headerTitle}>Sign up</Text>
              <View style={dynamicStyles.placeholder} />
            </View>

            {/* Form */}
            <View style={dynamicStyles.form}>
              {/* Full Name Input */}
              <View style={dynamicStyles.inputGroup}>
                <Text style={dynamicStyles.inputLabel}>Full name</Text>
                <View style={dynamicStyles.inputContainer}>
                  <TextInput
                    style={dynamicStyles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor={colors.textSecondary}
                    value={fullName}
                    onChangeText={setFullName}
                    autoCapitalize="words"
                    autoComplete="name"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Email Input */}
              <View style={dynamicStyles.inputGroup}>
                <Text style={dynamicStyles.inputLabel}>Email</Text>
                <View style={dynamicStyles.inputContainer}>
                  <TextInput
                    style={dynamicStyles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={colors.textSecondary}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={dynamicStyles.inputGroup}>
                <Text style={dynamicStyles.inputLabel}>Password</Text>
                <View style={dynamicStyles.inputContainer}>
                  <TextInput
                    style={[dynamicStyles.input, dynamicStyles.passwordInput]}
                    placeholder="Enter your password"
                    placeholderTextColor={colors.textSecondary}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                    autoCapitalize="none"
                    autoComplete="password-new"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    style={dynamicStyles.passwordToggle}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    <Ionicons
                      name={isPasswordVisible ? 'eye-off' : 'eye'}
                      size={20}
                      color={colors.textSecondary}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Confirm Password Input */}
              <View style={dynamicStyles.inputGroup}>
                <Text style={dynamicStyles.inputLabel}>Confirm password</Text>
                <View style={dynamicStyles.inputContainer}>
                  <TextInput
                    style={[dynamicStyles.input, dynamicStyles.passwordInput]}
                    placeholder="Confirm your password"
                    placeholderTextColor={colors.textSecondary}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    autoCapitalize="none"
                    autoComplete="password-new"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    style={dynamicStyles.passwordToggle}
                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  >
                    <Ionicons
                      name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
                      size={20}
                      color={colors.textSecondary}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity
                style={[
                  dynamicStyles.signUpButton,
                  isLoading && dynamicStyles.signUpButtonDisabled,
                ]}
                onPress={handleSignUp}
                disabled={isLoading}
              >
                <Text style={dynamicStyles.signUpButtonText}>
                  {isLoading ? 'Creating account...' : 'Sign up'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login Link */}
            <View style={dynamicStyles.loginContainer}>
              <Text style={dynamicStyles.loginText}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={dynamicStyles.loginLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
