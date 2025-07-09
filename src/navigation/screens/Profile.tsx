import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Switch, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { selectUser } from '../../store/slices/authSlice';
import { colors, typography, spacing, borderRadius, darkColors, lightColors } from '../../utils/theme';
import { styles } from './styles/ProfileStyles';
import { selectDarkMode } from '../../store/slices/themeSlice';
import { setDarkMode } from '../../store/slices/themeSlice';

export function Profile() {
  const navigation = useNavigation();
 
  // get user data from redux
  const user = useSelector(selectUser);
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const themeColors = isDarkMode ? darkColors : lightColors;
  
  // State for toggle switches
  const [pushReminders, setPushReminders] = React.useState(false);
  const [confirmations, setConfirmations] = React.useState(false);
 
  const handleDarkModeToggle = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColors.background }]}>
      <ScrollView contentContainerStyle={[styles.scrollContent, { backgroundColor: themeColors.background }]}>
        {/* Profile Section */}
        <View style={[styles.profileSection, { backgroundColor: themeColors.background }]}>
          <View style={[styles.profileImageContainer, { backgroundColor: themeColors.card }]}>
            <Image 
              source={require('../../assets/profile-avatar.jpeg')} 
              style={styles.profileImage}
              defaultSource={require('../../assets/profile-avatar.jpeg')}
            />
          </View>
          <Text style={[styles.profileName, { color: themeColors.text }]}>
            Sophia Carter
          </Text>
          <Text style={[styles.memberSince, { color: themeColors.textSecondary }]}>
            Member since 2021
          </Text>
        </View>

        {/* Account Section */}
        <View style={[styles.section, { backgroundColor: themeColors.card }]}>
          <Text style={[styles.sectionTitle, { color: themeColors.text }]}>
            Account
          </Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="mail" size={20} color={themeColors.textSecondary} />
            </View>
            <View style={[styles.menuContent, { backgroundColor: themeColors.card }]}>
              <Text style={[styles.menuLabel, { color: themeColors.textSecondary }]}>
                Email
              </Text>
              <Text style={[styles.emailValue, { color: themeColors.textSecondary }]}>
                sophia.carter@email.com
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="lock-closed" size={20} color={themeColors.textSecondary} />
            </View>
            <View style={[styles.menuContent, { backgroundColor: themeColors.card }]}>
              <Text style={[styles.menuLabel, { color: themeColors.textSecondary }]}>
                Change Password
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={[styles.section, { backgroundColor: themeColors.card }]}>
          <Text style={[styles.sectionTitle, { color: themeColors.text }]}>
            Preferences
          </Text>
          
          <View style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="notifications" size={20} color={themeColors.textSecondary} />
            </View>
            <View style={[styles.menuContent, { backgroundColor: themeColors.card }]}>
              <Text style={[styles.menuLabel, { color: themeColors.textSecondary }]}>
                Push Reminders
              </Text>
            </View>
            <Switch
              value={pushReminders}
              onValueChange={setPushReminders}
              trackColor={{ false: '#E9E9EA', true: colors.primary }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#E9E9EA"
            />
          </View>

          <View style={[styles.menuItem, { backgroundColor: themeColors.card }]}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="checkmark-circle" size={20} color={themeColors.textSecondary} />
            </View>
            <View style={[styles.menuContent, { backgroundColor: themeColors.card }]}>
              <Text style={[styles.menuLabel, { color: themeColors.textSecondary }]}>
                Confirmations
              </Text>
            </View>
            <Switch
              value={confirmations}
              onValueChange={setConfirmations}
              trackColor={{ false: '#E9E9EA', true: colors.primary }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#E9E9EA"
            />
          </View>

          <View style={[styles.menuItem, { backgroundColor: themeColors.card }]}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="moon" size={20} color={themeColors.textSecondary} />
            </View>
            <View style={[styles.menuContent, { backgroundColor: themeColors.card }]}>
              <Text style={[styles.menuLabel, { color: themeColors.textSecondary }]}>
                Dark Mode
              </Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={handleDarkModeToggle}
              trackColor={{ false: '#E9E9EA', true: colors.primary }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#E9E9EA"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}