import { Text } from '@react-navigation/elements';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/HomeStyles';
import Water from '../../assets/water.png';
import Wifi from '../../assets/wifi.png';
import Plug from '../../assets/plug.png';
import Tool from '../../assets/tool.png';

export function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header} />
        {/* Upcoming Rent Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Upcoming Rent</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.rentContent}>
            <View>
              <Text style={styles.dueText}>Due in 7 days</Text>
              <Text style={styles.amountText}>$1,200.00</Text>
              <Text style={styles.periodText}>Rent for May</Text>
            </View>
            <TouchableOpacity style={styles.payNowButton}>
              <Text style={styles.payNowText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Bills Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Upcoming Bills</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetailsText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {/* Electricity Bill */}
          <View style={styles.billItem}>
            <View style={styles.billIconContainer}>
              <View style={[styles.billIcon, { backgroundColor: '#FFEBEE' }]}>
                <Image source={Plug} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.billDetails}>
              <Text style={styles.billTitle}>Electricity</Text>
              <Text style={styles.billDueText}>Due in 14 days</Text>
            </View>
            <View style={styles.billAmountContainer}>
              <Text style={styles.billAmount}>$150.00</Text>
              <TouchableOpacity>
                <Text style={styles.payText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Water Bill */}
          <View style={styles.billItem}>
            <View style={styles.billIconContainer}>
              <View style={[styles.billIcon, { backgroundColor: '#E3F2FD' }]}>
                <Image source={Water} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.billDetails}>
              <Text style={styles.billTitle}>Water</Text>
              <Text style={styles.billDueText}>Due in 7 days</Text>
            </View>
            <View style={styles.billAmountContainer}>
              <Text style={styles.billAmount}>$50.00</Text>
              <TouchableOpacity>
                <Text style={styles.payText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Internet Bill */}
          <View style={styles.billItem}>
            <View style={styles.billIconContainer}>
              <View style={[styles.billIcon, { backgroundColor: '#E8F5E9' }]}>
                <Image source={Wifi} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.billDetails}>
              <Text style={styles.billTitle}>Internet</Text>
              <Text style={styles.billDueText}>Due in 30 days</Text>
            </View>
            <View style={styles.billAmountContainer}>
              <Text style={styles.billAmount}>$75.00</Text>
              <TouchableOpacity>
                <Text style={styles.payText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Maintenance Requests Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Maintenance Requests</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetailsText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {/* Maintenance Request Item */}
          <TouchableOpacity style={styles.maintenanceItem}>
            <View style={styles.maintenanceIconContainer}>
              <View style={styles.maintenanceIcon}>
                <Image source={Tool} style={{ width: 24, height: 24 }} />
              </View>
            </View>
            <View style={styles.maintenanceDetails}>
              <Text style={styles.maintenanceTitle}>Leaky Faucet (Kitchen)</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>In Progress</Text>
              </View>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          
          {/* Raise New Request Button */}
          <TouchableOpacity 
            style={styles.raiseRequestButton}
            onPress={() => navigation.navigate('Maintenance')}
          >
            <Text style={styles.raiseRequestText}>Raise New Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
