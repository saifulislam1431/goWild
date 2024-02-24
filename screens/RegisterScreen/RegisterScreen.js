import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, Image, Text, Pressable, TextInput, View, TouchableOpacity, Button } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import { logger } from "react-native-logs";
import * as ImagePicker from 'expo-image-picker';
import { useRegisterUserMutation } from '../../redux/features/apis/auth/authApi';


const RegisterScreen = () => {
    const [registerUser] = useRegisterUserMutation()
    const log = logger.createLogger();
    const [email, setEmail] = useState("");
    const [user_name, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null)

    const navigation = useNavigation();


    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setFile(result)
            console.log(result);
        } else {
            alert('You did not select any image.');
        }
    };


    const onSubmit = async () => {
        const userInfo = {
            userName: user_name,
            email: email,
            password: password,
            file: file ? file : "https://i.ibb.co/rfZKBdg/man.png"
        }
        const res = await registerUser(userInfo).unwrap();
        console.log(res);
        // navigation.navigate("Home");
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
                    uri: "https://i.ibb.co/gyZk8M9/register-01.png"
                }} className="w-80 h-80"></Image>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-10 px-3 justify-center mt-5 items-center">
                <Text className="font-bold text-3xl text-[#32a1b9]"><Text className="italic font-extrabold">Create an account!</Text></Text>
            </Animated.View>

            {/* Form */}
            <View className="flex items-center px5 space-y-4 mt-10 w-full z-50">
                <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput onChangeText={setUserName} placeholder='User Name' placeholderTextColor={"#32a1b9"} className="w-full" />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput onChangeText={setEmail} placeholder='Email' placeholderTextColor={"#32a1b9"} className="w-full" />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput onChangeText={setPassword} placeholder='Password' placeholderTextColor={"#32a1b9"} secureTextEntry
                        className="w-full"
                    />
                </Animated.View>


                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                    <TouchableOpacity className=" bg-[#8BD8EA] p-4 rounded-2xl w-[95%] mx-auto flex flex-row items-center justify-center" onPress={pickImageAsync}>
                        <Text className="text-white mr-3">
                            <Icon name="clouduploado" size={25} color="#ffffff" />
                        </Text>
                        <Text className="text-white text-center font-semibold">Upload Image</Text>

                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="w-full">
                    <TouchableOpacity className=" bg-[#8BD8EA] p-4 rounded-2xl w-[95%] mx-auto" onPress={onSubmit}>
                        <Text className="text-white text-center font-semibold">Register</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} className="w-full flex-row justify-center mb-6">
                    <Text className="font-semibold">Do have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text className="text-[#32a1b9] text-center font-semibold">Sign In</Text>
                    </Pressable>
                </Animated.View>

            </View>




            <Image source={{
                uri: "https://i.ibb.co/YdtZqGS/bg1-01.png"
            }} className="h-full w-full absolute top-0"></Image>
        </SafeAreaView>
    );
}


export default RegisterScreen;
