import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, Image, Text, Pressable, TextInput, View, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const onSubmit = (data) => {
        console.log(data)
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
                }} className="w-96 h-96"></Image>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-10 px-3 justify-center mt-5 items-center">
                <Text className="font-bold text-3xl text-[#32a1b9]"><Text className="italic font-extrabold">Login to your account!</Text></Text>
            </Animated.View>

            {/* Form */}
            <View className="flex items-center px5 space-y-4 mt-10 w-full z-50">
                <View className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput onBlur={(e) => setEmail(e.target.value)} placeholder='Email' placeholderTextColor={"#32a1b9"} className="w-full" />
                </View>
                <View className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput onBlur={(e) => setPassword(e.target.value)} placeholder='Password' placeholderTextColor={"#32a1b9"} secureTextEntry
                        className="w-full"
                    />
                </View>
                <View className="w-full">
                    <TouchableOpacity className=" bg-[#8BD8EA] p-4 rounded-2xl w-[95%] mx-auto">
                        <Text className="text-white text-center font-semibold">Login</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-full flex-row justify-center">
                    <Text className="font-semibold">Don't have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text className="text-[#32a1b9] text-center font-semibold">Sign up</Text>
                    </Pressable>
                </View>
            </View>




            <Image source={{
                uri: "https://i.ibb.co/YdtZqGS/bg1-01.png"
            }} className="h-full w-full absolute top-0"></Image>
        </SafeAreaView>
    );
}

export default LoginScreen;
