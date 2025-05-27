import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Dashboard } from './screens/Dashboard';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { typography } from '../utils/theme';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Dashboard,
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
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        headerTitle: () => (
          <Text style={typography.h3}>Updates</Text>
        ),
        headerLeft: () => {
          const navigation = useNavigation();
          return (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{
                padding: 10,
              }}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          );
        },
        headerTitleAlign: "center",
        tabBarIcon: ({ color, size }) => (
          <Image
            source={bell}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
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
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
