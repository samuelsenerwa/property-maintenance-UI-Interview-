import React, { useCallback, useState } from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles/DiscoverStyles';
import { useDebounce } from '../../hooks/debounce';

// Import images
import property1 from '../../assets/property1.jpg';
import residence from '../../assets/residence.jpg';
import property2 from '../../assets/property2.jpg';
import cityImage from '../../assets/city.jpg';
import city1Image from '../../assets/city1.jpg';
import city2Image from '../../assets/city2.jpg';
import residence2 from '../../assets/residence2.jpg';

// Sample data for recommended properties
const recommendedProperties = [
  {
    id: '1',
    name: 'The Grandview',
    address: '123 Elm Street, Anytown',
    image: property1,
  },
  {
    id: '2',
    name: 'The Residences',
    address: '456 Oak Avenue, Anytown',
    image: residence,
  },
  {
    id: '3',
    name: 'Urban Heights',
    address: '789 Pine Road, Anytown',
    image: property2,
  },
];

// Sample data for cities
const cities = [
  {
    id: '1',
    name: 'San Francisco',
    image: cityImage,
  },
  {
    id: '2',
    name: 'New York',
    image: city1Image,
  },
  {
    id: '3',
    name: 'Los Angeles',
    image: city2Image,
  },
  {
    id: '4',
    name: 'Chicago',
    image: residence2,
  },
];

export function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(recommendedProperties);
  const [filteredCities, setFilteredCities] = useState(cities);

  // debounce searching
  const debounce = useDebounce();

  // creating debounce search function
  const handleSearch = useCallback(
    debounce((text: string) => {
      // Update search query state
      setSearchQuery(text);
      
      if (!text.trim()) {
        // If search is empty, show all items
        setFilteredProperties(recommendedProperties);
        setFilteredCities(cities);
        return;
      }

      // filtering properties based on search text
      const propertyResults = recommendedProperties.filter(
        property => 
          property.name.toLowerCase().includes(text.toLowerCase()) || 
          property.address.toLowerCase().includes(text.toLowerCase())
      );

      // filtering cities based on search text
      const cityResults = cities.filter(
        city => city.name.toLowerCase().includes(text.toLowerCase())
      );

      // updating state
      setFilteredProperties(propertyResults);
      setFilteredCities(cityResults);

      console.log('Searching for: =======>', text);
    }, 500),
    []
  );

  const onChangeText = (text: string) => {
    setSearchQuery(text);
    handleSearch(text);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by city, address, or ZIP code"
          placeholderTextColor="#666666"
          value={searchQuery}
          onChangeText={onChangeText}
        />
      </View>

      {/* Recommended Properties Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended for you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <TouchableOpacity key={property.id} style={styles.propertyCard}>
                <Image source={property.image} style={styles.propertyImage} />
                <View style={styles.propertyInfo}>
                  <Text style={styles.propertyName}>{property.name}</Text>
                  <Text style={styles.propertyAddress}>{property.address}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>No properties found</Text>
          )}
        </ScrollView>
      </View>

      {/* Explore by City Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore by city</Text>
        <View style={styles.cityGrid}>
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <TouchableOpacity key={city.id} style={styles.cityCard}>
                <Image source={city.image} style={styles.cityImage} />
                <Text style={styles.cityName}>{city.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>No cities found</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
