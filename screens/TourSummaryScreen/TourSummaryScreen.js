import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';

const TourSummaryScreen = () => {
    return (
        <SafeAreaView className="flex-1 items-center h-full w-full">
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

export default TourSummaryScreen;
