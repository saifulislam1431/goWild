import React from 'react';
import { Image, TextInput } from 'react-native';
import { View, StyleSheet, SafeAreaView, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const NavHeader = () => {


    const handleOut = () => {
        console.log("Clicked");
    }


    return (
        <SafeAreaView className="flex w-full flex-row items-center justify-between my-5 px-2 z-40">
            <View>
                <Image source={{
                    uri: "https://i.ibb.co/tqnD2S3/man.png"
                }} className="w-11 h-11" />
            </View>

            <View className="bg-[#098B42]/10 p-2 rounded-2xl w-[70%] mx-auto border border-[#098B42] relative flex flex-row items-center ju">
                <Text className="absolute right-3">
                    <Icon name="search1" size={25} color="#098B42" />
                </Text>
                <TextInput placeholder='Search...' placeholderTextColor={"#045326"}
                    className="w-full"
                />
            </View>

            <View>
                <Pressable>
                    <Text className="bg-[#6fb98f] px-3  py-3 rounded-full text-white font-medium border border-[#6fb98f]">
                        <Icon name="logout" size={17} color="#ffffff" />
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default NavHeader;
