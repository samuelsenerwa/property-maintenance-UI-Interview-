import React from 'react';
import { Text } from '@react-navigation/elements';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/HomeStyles';
import Water from '../../assets/water.png';
import Wifi from '../../assets/wifi.png';
import Plug from '../../assets/plug.png';
import Tool from '../../assets/tool.png';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../store/slices/themeSlice';
import { darkColors, lightColors } from '../../utils/theme';

export function Home() {

  const isDarkMode = useSelector(selectDarkMode);
  const themeColors = isDarkMode ? darkColors : lightColors;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColors.background }]}>
      <ScrollView style={[styles.scrollView, { backgroundColor: themeColors.background }]}>
        <View style={styles.header} />
        {/* Upcoming Rent Section */}
        <View style={[styles.card, { backgroundColor: themeColors.background }]}>
          <View style={[styles.cardHeader, { backgroundColor: themeColors.background }]}>
            <Text style={[styles.cardTitle, { color: themeColors.textSecondary }]}>Upcoming Rent</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.rentContent, { backgroundColor: themeColors.card }]}>
            <View>
              <Text style={[styles.dueText, { color: themeColors.textSecondary }]}>Due in 7 days</Text>
              <Text style={[styles.amountText, { color: themeColors.textSecondary }]}>$1,200.00</Text>
              <Text style={[styles.periodText, { color: themeColors.textSecondary }]}>Rent for May</Text>
            </View>
            <TouchableOpacity style={[styles.payNowButton, { backgroundColor: themeColors.primary }]}>
              <Text style={[styles.payNowText, { color: themeColors.whiteText }]}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Bills Section */}
        <View style={[styles.card, { backgroundColor: themeColors.background }]}>
          <View style={[styles.cardHeader, { backgroundColor: themeColors.background }]}>
            <Text style={[styles.cardTitle, { color: themeColors.textSecondary }]}>Upcoming Bills</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetailsText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {/* Electricity Bill */}
          <View style={[styles.billItem, { backgroundColor: themeColors.background }]}>
            <View style={styles.billIconContainer}>
              <View style={[styles.billIcon, { backgroundColor: '#FFEBEE' }]}>
                <Image source={Plug} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.billDetails}>
              <Text style={[styles.billTitle, { color: themeColors.textSecondary }]}>Electricity</Text>
              <Text style={styles.billDueText}>Due in 14 days</Text>
            </View>
            <View style={styles.billAmountContainer}>
              <Text style={[styles.billAmount, { color: themeColors.textSecondary }]}>$150.00</Text>
              <TouchableOpacity>
                <Text style={styles.payText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Water Bill */}
          <View style={[styles.billItem, { backgroundColor: themeColors.background }]}>
            <View style={styles.billIconContainer}>
              <View style={[styles.billIcon, { backgroundColor: '#E3F2FD' }]}>
                <Image source={Water} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.billDetails}>
              <Text style={[styles.billTitle, { color: themeColors.textSecondary }]}>Water</Text>
              <Text style={styles.billDueText}>Due in 7 days</Text>
            </View>
            <View style={styles.billAmountContainer}>
              <Text style={[styles.billAmount, { color: themeColors.textSecondary }]}>$50.00</Text>
              <TouchableOpacity>
                <Text style={styles.payText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Internet Bill */}
          <View style={[styles.billItem, { backgroundColor: themeColors.background }]}>
            <View style={styles.billIconContainer}>
              <View style={[styles.billIcon, { backgroundColor: '#E8F5E9' }]}>
                <Image source={Wifi} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.billDetails}>````
              <Text style={[styles.billTitle, { color: themeColors.textSecondary }]}>Internet</Text>
              <Text style={styles.billDueText}>Due in 30 days</Text>
            </View>
            <View style={styles.billAmountContainer}>
              <Text style={[styles.billAmount, { color: themeColors.textSecondary }]}>$75.00</Text>
              <TouchableOpacity>
                <Text style={styles.payText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Maintenance Requests Section */}
        <View style={[styles.card, { backgroundColor: themeColors.background }]}>
          <View style={[styles.cardHeader, { backgroundColor: themeColors.background }]}>
            <Text style={[styles.cardTitle, { color: themeColors.textSecondary }]}>Maintenance Requests</Text>
            <TouchableOpacity>
              <Text style={[styles.viewDetailsText, { color: themeColors.textSecondary }]}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {/* Maintenance Request Item */}
          <TouchableOpacity style={[styles.maintenanceItem, { backgroundColor: themeColors.background }]}>
            <View style={styles.maintenanceIconContainer}>
              <View style={styles.maintenanceIcon}>
                <Image source={Tool} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.maintenanceDetails}>
              <Text style={[styles.maintenanceTitle, { color: themeColors.textSecondary }]}>Leaky Faucet (Kitchen)</Text>
              <View style={styles.statusContainer}>
                <Text style={[styles.statusText, { color: themeColors.textSecondary }]}>In Progress</Text>
              </View>
            </View>
            <Text style={[styles.chevron, { color: themeColors.textSecondary }]}>›</Text>
          </TouchableOpacity>
          
          {/* Raise New Request Button */}
          <TouchableOpacity 
            style={[styles.raiseRequestButton, { backgroundColor: themeColors.backgroundSecondary }]}
            onPress={() => navigation.navigate('Maintenance')}
          >
            <Text style={[styles.raiseRequestText, { color: themeColors.whiteText }]}>Raise New Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
