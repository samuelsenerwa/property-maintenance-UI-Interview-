import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Modal,
  FlatList,
  Alert,
  ActionSheetIOS,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from './styles/MaintenanceStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';

// Define the photo type
interface Photo {
  id: string;
  uri: string;
}

// Define location type
interface Location {
  id: string;
  name: string;
}

// Define existing request type
interface ExistingRequest {
  id: string;
  issue: string;
  status: string;
  date: string;
}

export function Maintenance() {
  const [issueDescription, setIssueDescription] = useState('');
  const [location, setLocation] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<Photo[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dummy data for locations
  const locations: Location[] = [
    { id: '1', name: 'Kitchen' },
    { id: '2', name: 'Living Room' },
    { id: '3', name: 'Master Bedroom' },
    { id: '4', name: 'Bathroom' },
    { id: '5', name: 'Balcony' },
    { id: '6', name: 'Garage' },
    { id: '7', name: 'Yard' },
    { id: '8', name: 'Basement' }
  ];

  // Mock data for existing requests
  const existingRequests: ExistingRequest[] = [
    {
      id: '12345',
      issue: 'Leaky faucet in Kitchen',
      status: 'inProgress',
      date: '2025-05-24'
    },
    {
      id: '67890',
      issue: 'Broken window in Living Room',
      status: 'completed',
      date: '2025-05-18'
    },
    {
      id: 'ABCDE',
      issue: 'AC not cooling in Bedroom',
      status: 'submitted',
      date: '2025-05-27'
    }
  ];

  const handleLocationSelect = (selectedLocation: Location) => {
    setLocation(selectedLocation.name);
    setShowLocationModal(false);
  };

  const handleAddPhoto = async () => {
    if (selectedPhotos.length >= 3) {
      Alert.alert('Limit Reached', 'You can upload a maximum of 3 photos per request.');
      return;
    }

    // Show options to choose camera or photo library
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Take Photo', 'Choose from Library'],
          cancelButtonIndex: 0,
        },
        async (buttonIndex) => {
          if (buttonIndex === 1) {
            await takePhoto();
          } else if (buttonIndex === 2) {
            await pickImage();
          }
        }
      );
    } else {
      Alert.alert(
        'Add Photo',
        'Choose an option',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Take Photo', onPress: takePhoto },
          { text: 'Choose from Library', onPress: pickImage },
        ]
      );
    }
  };

  const takePhoto = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need camera permissions to take photos.');
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const newPhoto: Photo = {
          id: Date.now().toString(),
          uri: result.assets[0].uri
        };
        setSelectedPhotos([...selectedPhotos, newPhoto]);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to take photo. Please try again.');
      console.error('Error taking photo:', error);
    }
  };

  const pickImage = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need media library permissions to select photos.');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const newPhoto: Photo = {
          id: Date.now().toString(),
          uri: result.assets[0].uri
        };
        setSelectedPhotos([...selectedPhotos, newPhoto]);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to select photo. Please try again.');
      console.error('Error selecting photo:', error);
    }
  };

  const handleRemovePhoto = (photoId: string) => {
    setSelectedPhotos(selectedPhotos.filter((photo: Photo) => photo.id !== photoId));
  };

  const handleSubmit = () => {
    // Validate form
    if (!issueDescription.trim()) {
      Alert.alert('Missing Information', 'Please describe the issue.');
      return;
    }

    if (!location) {
      Alert.alert('Missing Information', 'Please select a location.');
      return;
    }

    // Simulate submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Request Submitted',
        'Your maintenance request has been submitted successfully. Request #' + 
        Math.floor(10000 + Math.random() * 90000),
        [
          { 
            text: 'OK', 
            onPress: () => {
              // Reset form
              setIssueDescription('');
              setLocation('');
              setAdditionalDetails('');
              setSelectedPhotos([]);
            }
          }
        ]
      );
    }, 1500);
  };

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
          <TouchableOpacity 
            style={styles.locationPicker}
            onPress={() => setShowLocationModal(true)}
          >
            <Text style={location ? styles.locationPickerTextSelected : styles.locationPickerText}>
              {location || 'Select location'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#666666" />
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
          <TouchableOpacity 
            style={styles.uploadButton}
            onPress={handleAddPhoto}
          >
            <Ionicons name="camera-outline" size={24} color="#2196F3" />
            <Text style={styles.uploadButtonText}>Add Photos</Text>
          </TouchableOpacity>

          {selectedPhotos.length > 0 && (
            <View style={styles.photoContainer}>
              {selectedPhotos.map((photo, index) => (
                <View key={index} style={styles.photoPreview}>
                  <Image source={{ uri: photo.uri }} style={styles.photoImage} />
                  <TouchableOpacity 
                    style={styles.removePhotoButton}
                    onPress={() => handleRemovePhoto(photo.id)}
                  >
                    <Ionicons name="close-circle" size={20} color="#F44336" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Existing Requests Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Existing Requests</Text>
          {existingRequests.map((request) => (
            <TouchableOpacity 
              key={request.id} 
              style={styles.requestItem}
              onPress={() => Alert.alert('Request Details', `Request #${request.id}\nIssue: ${request.issue}\nSubmitted: ${request.date}\nStatus: ${request.status === 'inProgress' ? 'In Progress' : request.status === 'completed' ? 'Completed' : 'Submitted'}`)}
            >
              <View style={styles.requestInfo}>
                <Text style={styles.requestId}>Request #{request.id}</Text>
                <Text style={styles.requestDescription}>Issue: {request.issue}</Text>
              </View>
              {renderStatusBadge(request.status)}
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Text style={styles.submitButtonText}>
              Submitting...
            </Text>
          ) : (
            <>
              <MaterialIcons name="send" size={24} color="white" /> 
              <Text style={styles.submitButtonText}>
                Submit Request
              </Text>
            </>
          )}
        </TouchableOpacity>

        {/* a view to divide the screen */}
        <View style={styles.divider} />
      </ScrollView>

      {/* Location Selection Modal */}
      <Modal
        visible={showLocationModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Location</Text>
              <TouchableOpacity onPress={() => setShowLocationModal(false)}>
                <Ionicons name="close" size={24} color="#333333" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={locations}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.locationItem}
                  onPress={() => handleLocationSelect(item)}
                >
                  <Text style={styles.locationItemText}>{item.name}</Text>
                  {location === item.name && (
                    <Ionicons name="checkmark" size={20} color="#2196F3" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
