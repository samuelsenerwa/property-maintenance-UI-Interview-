import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Switch, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { selectUser } from '../../store/slices/authSlice';
import { colors, typography, spacing, borderRadius } from '../../utils/theme';
import { styles } from './styles/ProfileStyles';

export function Profile() {
  const navigation = useNavigation();
  const user = useSelector(selectUser);
  
  // State for toggle switches
  const [pushReminders, setPushReminders] = React.useState(false);
  const [confirmations, setConfirmations] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('../../assets/profile-avatar.jpeg')} 
              style={styles.profileImage}
              defaultSource={require('../../assets/profile-avatar.jpeg')}
            />
          </View>
          <Text style={styles.profileName}>Sophia Carter</Text>
          <Text style={styles.memberSince}>Member since 2021</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="mail" size={20} color={colors.textSecondary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuLabel}>Email</Text>
              <Text style={styles.emailValue}>sophia.carter@email.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="lock-closed" size={20} color={colors.textSecondary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuLabel}>Change Password</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="notifications" size={20} color={colors.textSecondary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuLabel}>Push Reminders</Text>
            </View>
            <Switch
              value={pushReminders}
              onValueChange={setPushReminders}
              trackColor={{ false: '#E9E9EA', true: colors.primary }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#E9E9EA"
            />
          </View>

          <View style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="checkmark-circle" size={20} color={colors.textSecondary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuLabel}>Confirmations</Text>
            </View>
            <Switch
              value={confirmations}
              onValueChange={setConfirmations}
              trackColor={{ false: '#E9E9EA', true: colors.primary }}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#E9E9EA"
            />
          </View>

          <View style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="moon" size={20} color={colors.textSecondary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuLabel}>Dark Mode</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
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