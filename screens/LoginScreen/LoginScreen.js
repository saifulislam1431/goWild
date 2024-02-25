import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, Image, Text, Pressable, TextInput, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const onSubmit = async () => {
        if (email === "") {
            return setError("Email is required.");
        }
        else if (password === "") {
            return setError("password is required.");
        } else {
            const userInfo = {
                email: email,
                password: password
            }
            const res = await axios.post("https://tour-management-server-beryl.vercel.app/api/v1/login", userInfo);
            if (res?.data?.success) {
                setEmail("");
                setPassword("");
                setError("");
                await AsyncStorage.setItem('user', JSON.stringify(res?.data?.result));
                Alert.alert(
                    "🎉 Success 🎉",
                    "You have successfully logged in!",
                    [
                        { text: "OK" }
                    ],
                    { cancelable: false }
                );

                navigation.navigate("Home")
            }
        }

    }
    return (
        <SafeAreaView className="flex-1 h-full w-full items-center justify-center relative">


            <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-50 px-3 mt-4 absolute top-8 left-0">
                <Pressable
                    onPress={() => navigation.navigate("Welcome")}
                >
                    <Text className="bg-[#8BD8EA] px-3  py-3 rounded-full text-white font-medium border border-[#8BD8EA]">
                        <Icon name="left" size={20} color="#ffffff" />
                    </Text>
                </Pressable>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-50 px-3 justify-center mt-10 items-center ">
                <Image source={{
                    uri: "https://i.ibb.co/BN1wT57/login-01.png"
                }} className="w-80 h-80"></Image>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-10 px-3 justify-center mt-5 items-center">
                <Text className="font-bold text-3xl text-[#32a1b9]"><Text className="italic font-extrabold">Login to your account!</Text></Text>
            </Animated.View>

            {/* Form */}
            <View className="flex items-center px5 space-y-4 mt-10 w-full z-50">
                <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput onChangeText={setEmail} placeholder='Email' placeholderTextColor={"#32a1b9"} className="w-full" />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput onChangeText={setPassword} placeholder='Password' placeholderTextColor={"#32a1b9"} secureTextEntry
                        className="w-full"
                    />
                </Animated.View>

                {
                    error && <View>
                        <Text className="text-base font-medium text-red-500">{error}</Text>
                    </View>
                }

                <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="w-full">
                    <TouchableOpacity className=" bg-[#8BD8EA] p-4 rounded-2xl w-[95%] mx-auto" onPress={onSubmit}>
                        <Text className="text-white text-center font-semibold">Login</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full flex-row justify-center">
                    <Text className="font-semibold">Don't have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text className="text-[#32a1b9] text-center font-semibold">Sign up</Text>
                    </Pressable>
                </Animated.View>

            </View>



            <Image source={{
                uri: "https://i.ibb.co/YdtZqGS/bg1-01.png"
            }} className="h-full w-full absolute top-0"></Image>
        </SafeAreaView>
    );
}

export default LoginScreen;
