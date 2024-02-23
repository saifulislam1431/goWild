import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const CreateTourScreen = () => {
    const navigation = useNavigation();
    const [tourName, setTourName] = useState('');
    const [description, setDescription] = useState('');
    const [itinerary, setItinerary] = useState('');
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [meetingPoint, setMeetingPoint] = useState('');
    const [transportation, setTransportation] = useState('');
    const [cost, setCost] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

    const onSubmit = () => {



        const data = {
            tourName,
            description,
            itinerary,
            duration,
            meetingPoint,
            transportation,
            cost,
            startDate,
            endDate,
            destination
        }
        navigation.navigate("Manage_Tour")
    }
    return (

        <ScrollView className="flex-1 h-full w-full relative">
            <View className="absolute">
                <NavHeader />
            </View>
            <View className="w-full h-96 -z-10 relative flex items-center justify-center">
                <Image source={{
                    uri: "https://i.ibb.co/4FsWC2X/banner1.png"
                }} className="h-full w-full opacity-80"></Image>

                <View className="absolute bg-[#8BD8EA] px-10 py-5 bg-opacity-75 rounded-xl">
                    <Text className="text-white font-bold text-2xl">Start Your Journey!</Text>
                </View>
            </View>

            {/* Form */}
            <View className="flex px-2 space-y-4 my-10 w-full z-50 h-full">
                <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Tour Name"
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setTourName}
                    />

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Destination"
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setDestination}
                    />

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Description"
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setDescription}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Itinerary (e.g. Day 1: Safari drive) add Day 2 separated by comma."
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setItinerary}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Duration"
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setDuration}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Meeting Point"
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setMeetingPoint}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Transportation"
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setTransportation}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Cost"
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setCost}
                    />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="bg-[#32a1b9]/10 rounded-2xl w-[95%] mx-auto flex flex-row items-center justify-between">
                    <Pressable onPress={() => setStartDatePickerVisibility(true)} className="border border-[#32a1b9] p-4 rounded-2xl">
                        <View className="flex flex-row items-center gap-3">
                            <Text> <Icon name="calendar" size={25} color="#32a1b9" /></Text>
                            <Text className="text-[#32a1b9] font-bold">Start Date</Text>
                        </View>
                        <DateTimePickerModal
                            isVisible={isStartDatePickerVisible}
                            mode="date"
                            onConfirm={(date) => setStartDate(date)}
                            onCancel={() => setStartDatePickerVisibility(false)}
                        />
                    </Pressable>
                    <Pressable onPress={() => setEndDatePickerVisibility(true)} className="border border-[#32a1b9] p-4 rounded-2xl">
                        <View className="flex flex-row items-center gap-3">
                            <Text> <Icon name="calendar" size={25} color="#32a1b9" /></Text>
                            <Text className="text-[#32a1b9] font-bold">Start Date</Text>
                        </View>
                        <DateTimePickerModal
                            isVisible={isEndDatePickerVisible}
                            mode="date"
                            onConfirm={(date) => setEndDate(date)}
                            onCancel={() => setEndDatePickerVisibility(false)}
                        />
                    </Pressable>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(900).duration(1000).springify()} className="w-full">
                    <TouchableOpacity className=" bg-[#8BD8EA] p-4 rounded-2xl w-[95%] mx-auto" onPress={onSubmit}>
                        <Text className="text-white text-center font-semibold">Add Tour</Text>
                    </TouchableOpacity>
                </Animated.View>

            </View>


        </ScrollView>
    );
}

export default CreateTourScreen;
