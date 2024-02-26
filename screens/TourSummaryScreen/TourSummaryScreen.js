import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView, ActivityIndicator, Pressable } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';
import { useNavigation } from '@react-navigation/native';
import useTours from '../../hooks/useTours';
import Animated, { FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

const TourSummaryScreen = () => {
    const { tours, toursFetching, refetch } = useTours();
    const navigation = useNavigation();

    const handlePress = (id) => {
        navigation.navigate('Summary', { id: id });
        refetch();
    };

    if (toursFetching) {
        return (
            <View>
                <ActivityIndicator size="large" color="#32a1b9" />
            </View>
        );
    }
    return (
        <ScrollView className="flex-1 h-full w-full relative">

            <View className="absolute">
                <NavHeader />
            </View>
            <View className="w-full h-[380px] -z-10 relative flex items-center justify-center">
                <Image source={{ uri: "https://i.ibb.co/R6k17Jd/banner3.png" }} className="h-full w-full opacity-80" />
            </View>


            <View className="my-4">
                <Text className="text-center font-bold text-3xl text-[#8BD8EA]">Summary of tour</Text>
            </View>

            {/* Data*/}
            <View className="flex px-2 my-10 w-full z-50 h-full">
                {
                    tours.length > 0 ? tours?.map(item => <View className="flex flex-row items-center p-2 shadow-2xl rounded border border-[#32a1b9] mx-1 space-x-3 mb-5" key={item?._id}>
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
                                <Text className="font-semibold text-[#32a1b9]">{moment(item?.startDate).format('l')} To {moment(item?.endDate).format('l')}</Text>
                            </View>


                        </Animated.View>

                        <Animated.View entering={FadeInUp.delay(100).duration(1000)} className="z-50">
                            <Pressable
                                onPress={() => handlePress(item?._id)}
                            >
                                <Text className="bg-[#8BD8EA] px-3  py-3 rounded-full text-white font-medium border border-[#8BD8EA]">
                                    <Icon name="arrow-right" size={20} color="#ffffff" />
                                </Text>
                            </Pressable>
                        </Animated.View>
                    </View>) : <View>
                        <Text className="text-2xl font-bold text-red-500">Empty Tour List!</Text>
                    </View>
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default TourSummaryScreen;
