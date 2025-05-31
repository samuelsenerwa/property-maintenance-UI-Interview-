import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { typography, colors } from '../utils/theme';
import { Home } from './screens/Home';
import { Discover } from './screens/Discover';
import { Maintenance } from './screens/Maintenance';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerTitle: () => (
          <Text style={typography.h3}>Dashboard</Text>
        ),
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity style={{
            padding: 10,
          }}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
        ),
        tabBarLabel: ({ color }) => (
          <Text style={{
            ...typography.caption,
            fontFamily: 'Outfit',
            color: color,
            fontSize: 12,
            marginTop: 0,
          }}>
            Home
          </Text>
        ),
      },
    },
    Payments: {
      screen: Discover,
      options: {
        headerTitle: () => (
          <Text style={typography.h3}>Payments</Text>
        ),
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity style={{
            padding: 10,
          }}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="card" size={24} color={color} />
        ),
        tabBarLabel: ({ color }) => (
          <Text style={{
            ...typography.caption,
            fontFamily: 'Outfit',
            color: color,
            fontSize: 12,
            marginTop: 0,
          }}>
            Payments
          </Text>
        ),
      },
    },
    Discover: {
      screen: Discover,
      options: {
        headerTitle: () => (
          <Text style={typography.h3}>Find a home</Text>
        ),
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity style={{
            padding: 10,
          }}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="search-sharp" size={24} color={color} />
        ),
        tabBarLabel: ({ color }) => (
          <Text style={{
            ...typography.caption,
            fontFamily: 'Outfit',
            color: color,
            fontSize: 12,
            marginTop: 0,
          }}>
            Discover
          </Text>
        ),
      },
    },
    Profile: {
      screen: Profile,
      options: {
        headerTitle: () => (
          <Text style={typography.h3}>Profile</Text>
        ),
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity style={{
            padding: 10,
          }}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="person" size={24} color={color} />
        ),
        tabBarLabel: ({ color }) => (
          <Text style={{
            ...typography.caption,
            fontFamily: 'Outfit',
            color: color,
            fontSize: 12,
            marginTop: 0,
          }}>
            Profile
          </Text>
        ),
      },
    },
  },
  screenOptions: {
    tabBarStyle: {
      height: 60,
      paddingTop: 5,
      paddingBottom: 5,
    },
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.textSecondary,
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={() => navigation.goBack()}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
          headerTitle: () => (
          <Text style={typography.h1}>404</Text>
        ),
      },
      linking: {
        path: '*',
      },
    },
    Maintenance: {
      screen: Maintenance,
      options: ({ navigation }) => ({
        headerTitle: () => (
          <Text style={typography.h3}>Maintenance</Text>
        ),
        headerTitleAlign: "center",
        headerLeft: ({ canGoBack }) => canGoBack && (
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      }),
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
