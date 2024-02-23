import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, { FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const SingleTour = ({ item }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Manage_Tour_Details', { id: item?.id });
    };

    return (
        <View className="flex flex-row items-center p-2 shadow-2xl rounded border border-[#32a1b9] mx-1 space-x-3 mb-5">
            <Animated.View entering={FadeInLeft.delay(100).duration(1000)}>
                <Image source={{ uri: `${item?.image}` }} className="h-32 w-32 rounded" />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(100).duration(1000)} className="space-y-1 flex-1">
                <Text className="font-bold">{item.tourName}</Text>
                <View className="flex flex-row items-center gap-1">
                    <Text><Icon name='location-arrow' size={15} color="#32a1b9" /></Text>
                    <Text className="font-semibold text-[#32a1b9]">{item?.destination}</Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                    <Text><Icon name='calendar-alt' size={15} color="#32a1b9" /></Text>
                    <Text className="font-semibold text-[#32a1b9]">{item?.startDate}</Text>
                </View>
                <Text className="font-semibold text-[#32a1b9]">{item?.duration}</Text>
                <View className="flex flex-row items-center gap-1">
                    <Text><Icon name='dollar-sign' size={15} color="#32a1b9" /></Text>
                    <Text className="font-semibold text-[#32a1b9]">{item?.cost}</Text>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-50">
                <Pressable
                    onPress={handlePress}
                >
                    <Text className="bg-[#8BD8EA] px-3  py-3 rounded-full text-white font-medium border border-[#8BD8EA]">
                        <Icon name="arrow-right" size={20} color="#ffffff" />
                    </Text>
                </Pressable>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SingleTour;
