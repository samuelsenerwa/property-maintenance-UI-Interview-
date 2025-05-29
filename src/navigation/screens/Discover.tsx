import React from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles/DiscoverStyles';

// Sample data for recommended properties
const recommendedProperties = [
  {
    id: '1',
    name: 'The Grandview',
    address: '123 Elm Street, Anytown',
    image: require('../../assets/property1.jpg'),
  },
  {
    id: '2',
    name: 'The Residences',
    address: '456 Oak Avenue, Anytown',
    image: require('../../assets/residence.jpg'),
  },
  {
    id: '3',
    name: 'Urban Heights',
    address: '789 Pine Road, Anytown',
    image: require('../../assets/property2.jpg'),
  },
];

// Sample data for cities
const cities = [
  {
    id: '1',
    name: 'San Francisco',
    image: require('../../assets/city.jpg'),
  },
  {
    id: '2',
    name: 'New York',
    image: require('../../assets/city1.jpg'),
  },
  {
    id: '3',
    name: 'Los Angeles',
    image: require('../../assets/city2.jpg'),
  },
  {
    id: '4',
    name: 'Chicago',
    image: require('../../assets/residence2.jpg'),
  },
];

export function Discover() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by city, address, or ZIP code"
          placeholderTextColor="#666666"
        />
      </View>

      {/* Recommended Properties Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended for you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {recommendedProperties.map((property) => (
            <TouchableOpacity key={property.id} style={styles.propertyCard}>
              <Image source={property.image} style={styles.propertyImage} />
              <View style={styles.propertyInfo}>
                <Text style={styles.propertyName}>{property.name}</Text>
                <Text style={styles.propertyAddress}>{property.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Explore by City Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore by city</Text>
        <View style={styles.cityGrid}>
          {cities.map((city) => (
            <TouchableOpacity key={city.id} style={styles.cityCard}>
              <Image source={city.image} style={styles.cityImage} />
              <Text style={styles.cityName}>{city.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
