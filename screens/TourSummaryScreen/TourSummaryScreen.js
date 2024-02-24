import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';

const TourSummaryScreen = () => {
    return (
        <ScrollView className="flex-1 h-full w-full relative">
            <View className="flex-1 relative">
                <View className="absolute">
                    <NavHeader />
                </View>
                <View className="w-full h-[380px] -z-10 relative flex items-center justify-center">
                    <Image source={{ uri: "https://i.ibb.co/R6k17Jd/banner3.png" }} className="h-full w-full opacity-80" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default TourSummaryScreen;
