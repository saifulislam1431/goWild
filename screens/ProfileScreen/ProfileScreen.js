import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';

const ProfileScreen = () => {
    return (
        <SafeAreaView className="flex-1 h-full w-full">
            <View>
                <NavHeader />
            </View>

            <View>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ProfileScreen;
