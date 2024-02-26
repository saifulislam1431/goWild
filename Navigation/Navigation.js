import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import useUser from '../hooks/useUser';
import { ActivityIndicator, ScrollView, View } from 'react-native';
const Stack = createStackNavigator();



const Navigation = () => {
    const { user, loading } = useUser();
    if (loading) {
        return (
            <ScrollView className="flex-1 items-center justify-center w-full h-full">
                <ActivityIndicator size="large" color="#32a1b9" />
            </ScrollView>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={user !== null ? "Home" : "Welcome"} screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
