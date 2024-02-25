import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, Pressable } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';
import CarouselCards from './CarouselCards';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const navigation = useNavigation();



    // const handleLog = async () => {
    //     const value = await AsyncStorage.getItem('user');
    //     if (value !== null) {

    //         console.log("User data: ", JSON.parse(value));

    //     } else {
    //         console.log("Error");
    //     }
    // }

    return (
        <ScrollView className="flex-1 h-full w-full bg-white relative">
            <View>
                <NavHeader />
            </View>
            <View className="absolute top-0 w-full h-1/2 -z-10 opacity-40">
                <Image source={{
                    uri: "https://i.ibb.co/0hdg3G5/world.png"
                }} className="h-full w-full"></Image>
            </View>

            <View className="w-full px-2 mt-3 z-20">
                <View className="space-y-2">
                    <Text className="text-4xl font-light">Explore the</Text>
                    <Text className="text-4xl font-bold">Beautiful <Text className="text-[#3dc0dd] underline">world</Text></Text>
                </View>
            </View>

            <View className="w-full px-2 mt-10 z-20">
                <View className="w-full flex flex-row items-center justify-between">
                    <Text className="text-xl font-bold">Best Destination</Text>
                    <Text className="text-xl font-bold text-[#56c8e2] underline">View all</Text>
                </View>

                <View className="w-full mt-14">
                    <CarouselCards />

                </View>
            </View>

            <View className="w-full px-2 my-10 z-20">
                <View className="w-full items-center">
                    <Pressable className="bg-[#8BD8EA] py-4 px-8 rounded-2xl border border-[#8BD8EA]"
                        onPress={() => navigation.navigate("Create_Tour")}
                    >
                        <Text className="font-semibold text-base text-white">Create Your Own Trip</Text>
                    </Pressable>
                    {/* <Pressable className="bg-[#8BD8EA] py-4 px-8 rounded-2xl border border-[#8BD8EA]"
                        onPress={handleLog}
                    >
                        <Text className="font-semibold text-base text-white">Log</Text>
                    </Pressable> */}
                </View>
            </View>
        </ScrollView>
    );
}


export default Home;
