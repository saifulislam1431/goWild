import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, Button, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const UpdateModal = ({ isModalUpdateVisible, data, handleUpdate }) => {
    const navigation = useNavigation();
    const [tourName, setTourName] = useState(data?.tourName);
    const [description, setDescription] = useState(data?.description);
    const [itinerary, setItinerary] = useState(data?.itinerary);
    const [destination, setDestination] = useState(data?.destination);
    const [duration, setDuration] = useState(data?.duration);
    const [meetingPoint, setMeetingPoint] = useState(data?.meetingPoint);
    const [transportation, setTransportation] = useState(data?.transportation);
    const [cost, setCost] = useState(data?.cost.toString());
    const [startDate, setStartDate] = useState(data?.startDate);
    const [endDate, setEndDate] = useState(data?.endDate);
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
            cost: parseInt(cost),
            startDate,
            endDate,
            destination
        }
        console.log(data);
        handleUpdate();
    }
    return (
        <View>
            {
                isModalUpdateVisible && <Modal isVisible={isModalUpdateVisible}>
                    <ScrollView className="flex-1 mx-2 my-5">

                        <View>
                            <Text className="font-bold text-2xl text-center text-[#32a1b9]">Update Tour Details!</Text>
                        </View>

                        {/* Form */}
                        <View className="flex px-2 space-y-4 my-10 w-full z-50 h-full">
                            <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Tour Name"
                                    value={tourName}
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setTourName}
                                />

                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Destination"
                                    value={destination}
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setDestination}
                                />

                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Description"
                                    value={description}
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setDescription}
                                />
                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    value={itinerary}
                                    placeholder="Itinerary (e.g. Day 1: Safari drive) add Day 2 separated by comma."
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setItinerary}
                                />
                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Duration"
                                    value={duration}
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setDuration}
                                />
                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Meeting Point"
                                    value={meetingPoint}
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setMeetingPoint}
                                />
                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Transportation"
                                    value={transportation}
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setTransportation}
                                />
                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Cost"
                                    value={cost}
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
                                    <Text className="text-white text-center font-semibold">Update Tour</Text>
                                </TouchableOpacity>
                            </Animated.View>

                        </View>
                    </ScrollView>
                </Modal>
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default UpdateModal;
