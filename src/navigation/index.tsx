import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  ParamListBase,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { typography, lightColors, darkColors } from '../utils/theme';
import { Home } from './screens/Home';
import { Discover } from './screens/Discover';
import { Maintenance } from './screens/Maintenance';
import { Payment } from './screens/Payment';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../store/slices/themeSlice';

// Custom navigation component that uses the theme
export function Navigation(props: any) {
  const isDarkMode = useSelector(selectDarkMode);
  const colors = isDarkMode ? darkColors : lightColors;

  // Create tab navigator with theme-aware options
  const TabNavigator = createBottomTabNavigator({
    screens: {
      Home: {
        screen: Home,
        options: {
          headerTitle: () => (
            <Text style={{...typography.h3, color: colors.text}}>Dashboard</Text>
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity style={{
              padding: 10,
            }}>
              <Ionicons name="menu" size={24} color={colors.text} />
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
          headerStyle: {
            backgroundColor: colors.card,
          },
        },
      },
      Payment: {
        screen: Payment,
        options: {
          headerTitle: () => (
            <Text style={{...typography.h3, color: colors.text}}>Payment</Text>
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity style={{
              padding: 10,
            }}>
              <Ionicons name="menu" size={24} color={colors.text} />
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
              Payment
            </Text>
          ),
          headerStyle: {
            backgroundColor: colors.card,
          },
        },
      },
      Discover: {
        screen: Discover,
        options: {
          headerTitle: () => (
            <Text style={{...typography.h3, color: colors.text}}>Find a home</Text>
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity style={{
              padding: 10,
            }}>
              <Ionicons name="menu" size={24} color={colors.text} />
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
          headerStyle: {
            backgroundColor: colors.card,
          },
        },
      },
      Profile: {
        screen: Profile,
        options: {
          headerTitle: () => (
            <Text style={{...typography.h3, color: colors.text}}>Profile</Text>
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity style={{
              padding: 10,
            }}>
              <Ionicons name="menu" size={24} color={colors.text} />
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
          headerStyle: {
            backgroundColor: colors.card,
          },
        },
      },
    },
    screenOptions: {
      tabBarStyle: {
        height: 60,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: colors.card,
        borderTopColor: colors.border,
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
    },
  });

  // Create stack navigator with theme-aware options
  const Stack = createNativeStackNavigator({
    screens: {
      HomeTabs: {
        screen: TabNavigator,
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
              <Text style={{color: colors.text}}>Close</Text>
            </HeaderButton>
          ),
          headerStyle: {
            backgroundColor: colors.card,
          },
          headerTintColor: colors.text,
        }),
      },
      NotFound: {
        screen: NotFound,
        options: {
          headerTitle: () => (
            <Text style={{...typography.h1, color: colors.text}}>404</Text>
          ),
          headerStyle: {
            backgroundColor: colors.card,
          },
        },
        linking: {
          path: '*',
        },
      },
      Maintenance: {
        screen: Maintenance,
        options: ({ navigation }) => ({
          headerTitle: () => (
            <Text style={{...typography.h3, color: colors.text}}>Maintenance</Text>
          ),
          headerTitleAlign: "center",
          headerLeft: ({ canGoBack }) => canGoBack && (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color={colors.text} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: colors.card,
          },
        }),
      },
    },
    screenOptions: {
      contentStyle: {
        backgroundColor: colors.background,
      },
    },
  });

  // Create and return the static navigation with the stack
  const StaticNavigation = createStaticNavigation(Stack);
  return <StaticNavigation {...props} />;
}

type RootStackParamList = ParamListBase & {
  readonly HomeTabs: undefined;
  readonly Profile: {
    readonly user: string;
  };
  readonly Settings: undefined;
  readonly NotFound: undefined;
  readonly Maintenance: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
