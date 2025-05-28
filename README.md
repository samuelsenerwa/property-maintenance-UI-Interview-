# Property Maintenance App

A modern React Native mobile application for property management and maintenance, designed to streamline communication between tenants and property managers.

## Features

### Dashboard
- **Rent Payment Tracking**: View upcoming rent payments with amount and due date
- **Bill Management**: Monitor utility bills (electricity, water, internet) with payment status
- **Maintenance Requests**: Track the status of maintenance issues in your property
- **Quick Actions**: Easily submit new maintenance requests

### Maintenance Management
- **Request Submission**: Submit detailed maintenance requests with descriptions and photos
- **Location Selection**: Specify the exact location of the issue within the property
- **Request Tracking**: Monitor the status of all maintenance requests (Submitted, In Progress, Completed)
- **Photo Documentation**: Attach photos to provide visual context for maintenance issues

## UI Screens

### Dashboard Screen
The dashboard provides a comprehensive overview of the tenant's property information:
- **Upcoming Rent Section**: Shows the next rent payment of $1,200.00 due in 7 days with a "Pay Now" button
- **Utility Bills Section**: Displays electricity ($150), water ($50), and internet ($75) bills with their respective due dates and payment options
- **Maintenance Requests**: Shows active maintenance requests with status indicators (e.g., "Leaky Faucet (Kitchen)" marked as "In Progress")
- **Quick Actions**: "Raise New Request" button for immediate reporting of new issues

  ![Image](https://github.com/user-attachments/assets/1254307b-8bef-4840-a65e-0064436e41db)

### Maintenance Screen
The maintenance screen allows tenants to:
- **New Request Form**: Input fields for issue description, location selection, and additional details
- **Photo Upload**: Option to attach photos of the maintenance issue
- **Request History**: List of previous maintenance requests (#12345, #67890, #ABCDE) with their current status
- **Status Indicators**: Color-coded badges showing "In Progress" (yellow), "Completed" (green), and "Submitted" (blue)

  ![Image](https://github.com/user-attachments/assets/56253529-d589-4393-946f-6cca54f903a7)

## Technology Stack

- **React Native**: Cross-platform mobile application framework
- **Expo**: Development toolchain for React Native
- **React Navigation v7**: Navigation library for screen transitions
- **Expo Google Fonts**: Custom typography with Outfit font
- **Vector Icons**: Ionicons and Material Icons for UI elements

## Implementation Details

### UI/UX Design
- **Modern Interface**: Clean, intuitive design with a focus on usability
- **Typography System**: Consistent text styling with the Outfit font family
- **Color Scheme**: Thoughtful color palette for status indicators and interactive elements
- **Responsive Layout**: Adapts to different screen sizes and orientations

### Architecture
- **Component-Based Structure**: Modular components for maintainability
- **Separated Styling**: Clean separation of UI logic and styling
- **Navigation Flow**: Intuitive screen transitions with React Navigation
- **State Management**: React hooks for local state management

### Code Organization
- **Screens**: Main UI views (Home, Maintenance, etc.)
- **Navigation**: Screen routing and tab configuration
- **Styles**: Separated style files for cleaner components
- **Utils**: Shared utilities for fonts, themes, and constants
- **Assets**: Images and icons used throughout the app

## Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/property-maintenance.git
cd property-maintenance
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on a device or emulator:
   - Scan the QR code with the Expo Go app (Android) or Camera app (iOS)
   - Press 'a' for Android emulator
   - Press 'i' for iOS simulator

## Future Enhancements

- **Payment Integration**: Direct rent and bill payments through the app
- **Push Notifications**: Real-time updates on maintenance request status
- **Chat Feature**: Direct communication with property managers
- **Document Storage**: Store important property documents and lease agreements
- **Smart Home Integration**: Control smart home devices within the property

## Design Decisions

### Font Selection
The app uses the Outfit font family for a modern, clean appearance:
- **Bold** for headings and important information
- **Medium** for subheadings and buttons
- **Regular** for body text
- **Light** for secondary information

### Color System
- **Primary Blue**: Used for buttons and interactive elements
- **Status Colors**: Yellow for "In Progress", Green for "Completed", Blue for "Submitted"
- **Neutral Tones**: Clean whites and grays for backgrounds and cards

### Navigation Experience
- **Bottom Tab Navigation**: Easy access to main sections (Home, Payments, Devices, Profile)
- **Stack Navigation**: Intuitive flow between related screens
- **Back Navigation**: Clear return paths from detail screens

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from modern property management applications
- Icons provided by Ionicons and Material Icons
- Outfit font by Rodrigo Fuenzalida
