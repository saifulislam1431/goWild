import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, ActivityIndicator, FlatList, Pressable } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';
import { useEffect, useState } from 'react';
import tourData from "./tour.json"
import SingleTour from './SingleTour';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, { FadeInUp } from 'react-native-reanimated';

const ManageTourScreen = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        setTours(tourData);
        setLoading(false);
    }, []);
    // console.log(tours);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#32a1b9" />
            </View>
        );
    }



    return (
        <ScrollView className="flex-1 h-full w-full relative">
            <View className="flex-1 relative">
                <View className="absolute">
                    <NavHeader />
                </View>
                <View className="w-full h-96 -z-10 relative flex items-center justify-center">
                    <Image source={{ uri: "https://i.ibb.co/YtPgr8Z/banner2.png" }} className="h-full w-full opacity-80" />
                </View>
                <View className="px-2">
                    <Text className="text-2xl font-bold text-[#32a1b9]">My Tour:</Text>
                </View>

                {/* Data*/}
                <View className="flex px-2 my-10 w-full z-50 h-full">
                    {
                        tours?.map(item => <SingleTour key={item?.id} item={item} />)
                    }
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    verticalText: {
        transform: [{ rotate: '-90deg' }],
    },
})

export default ManageTourScreen;
