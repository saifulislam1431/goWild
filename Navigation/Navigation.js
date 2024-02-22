import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import CreateTourScreen from '../screens/CreateTourScreen/CreateTourScreen';
import TourSummaryScreen from '../screens/TourSummaryScreen/TourSummaryScreen';
import ManageTourScreen from '../screens/ManageTourScreen/ManageTourScreen';
const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={RegisterScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Create_Tour" component={CreateTourScreen} />
                <Stack.Screen name="Summary_Tour" component={TourSummaryScreen} />
                <Stack.Screen name="Manage_Tour" component={ManageTourScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
