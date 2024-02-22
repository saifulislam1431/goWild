import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Image, View, Text, Button, Pressable } from 'react-native';
import Animated, { FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';



const WelcomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 items-center  h-full w-full relative bg-sky-50">
            <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-50 mt-20 px-3">
                <Text className="font-bold text-4xl text-[#8BD8EA]">Welcome to <Text className="italic font-extrabold">TripWallet!</Text></Text>
            </Animated.View>
            <Animated.View className="z-50 my-10 px-3" entering={FadeInLeft.delay(200).duration(1000)}>
                <Text className="font-semibold text-lg text-[#8BD8EA]">TripWallet is the perfect companion for travelers. With TripWallet, organizing group tours becomes a breeze, providing transparency and efficiency in tracking and managing travel costs effortlessly.</Text>
            </Animated.View>
            <Animated.View className="z-50" entering={FadeInDown.delay(300).duration(1000)}>
                <Pressable
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text className="bg-[#8BD8EA] px-4  py-3 rounded text-white font-medium border border-[#8BD8EA]">Get Started</Text>
                </Pressable>
            </Animated.View>
            <Image source={{
                uri: "https://i.ibb.co/J7dFBDg/img1-01.png"
            }} className="h-full w-full absolute top-0"></Image>
        </SafeAreaView>
    );
}

export default WelcomeScreen;
