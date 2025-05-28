import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from './styles/MaintenanceStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function Maintenance() {
  const [issueDescription, setIssueDescription] = useState('');
  const [location, setLocation] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  // Mock data for existing requests
  const existingRequests = [
    {
      id: '12345',
      issue: 'Leaky faucet in Kitchen',
      status: 'inProgress'
    },
    {
      id: '67890',
      issue: 'Broken window in Living Room',
      status: 'completed'
    },
    {
      id: 'ABCDE',
      issue: 'AC not cooling in Bedroom',
      status: 'submitted'
    }
  ];

  const renderStatusBadge = (status: string) => {
    let badgeStyle, textStyle, label;

    switch (status) {
      case 'inProgress':
        badgeStyle = [styles.statusBadge, styles.statusInProgress];
        textStyle = [styles.statusText, styles.statusTextInProgress];
        label = 'In Progress';
        break;
      case 'completed':
        badgeStyle = [styles.statusBadge, styles.statusCompleted];
        textStyle = [styles.statusText, styles.statusTextCompleted];
        label = 'Completed';
        break;
      case 'submitted':
        badgeStyle = [styles.statusBadge, styles.statusSubmitted];
        textStyle = [styles.statusText, styles.statusTextSubmitted];
        label = 'Submitted';
        break;
      default:
        badgeStyle = styles.statusBadge;
        textStyle = styles.statusText;
        label = status;
    }

    return (
      <View style={badgeStyle}>
        <Text style={textStyle}>{label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* New Request Section */}
        <View style={styles.card}>
        <Text style={styles.sectionTitle}>New Request</Text>
          <Text style={styles.inputLabel}>Describe the issue</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Kitchen sink clogged"
            value={issueDescription}
            onChangeText={setIssueDescription}
          />

          <Text style={styles.inputLabel}>Location</Text>
          <TouchableOpacity style={styles.locationPicker}>
            <Text style={styles.locationPickerText}>Select location</Text>
            <Ionicons name="chevron-down" size={20} color={styles.locationPickerText.color} />
          </TouchableOpacity>

          <Text style={styles.inputLabel}>Additional details (optional)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Provide more information if needed"
            multiline
            numberOfLines={4}
            value={additionalDetails}
            onChangeText={setAdditionalDetails}
          />

          <Text style={styles.inputLabel}>Upload photos (optional)</Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="camera-outline" size={24} color={styles.uploadButtonText.color} />
            <Text style={styles.uploadButtonText}>Add Photos</Text>
          </TouchableOpacity>
        </View>

        {/* Existing Requests Section */}
        <View style={styles.card}>
        <Text style={styles.sectionTitle}>Existing Requests</Text>
          {existingRequests.map((request) => (
            <View key={request.id} style={styles.requestItem}>
              <View style={styles.requestInfo}>
                <Text style={styles.requestId}>Request #{request.id}</Text>
                <Text style={styles.requestDescription}>Issue: {request.issue}</Text>
              </View>
              {renderStatusBadge(request.status)}
            </View>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <MaterialIcons name="send" size={24} color="white" /> 
          <Text style={styles.submitButtonText}>
            Submit Request
          </Text>
        </TouchableOpacity>

        {/* a view to divide the screen */}
        <View style={styles.divider} />
      </ScrollView>
    </SafeAreaView>
  );
}
