import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Modal, Text, Button, Pressable, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import useTours from '../../hooks/useTours';

const UpdateModal = () => {
    const route = useRoute();
    const { id, data } = route.params;
    const navigation = useNavigation()
    const { triggerRefetch, tours, toursFetching } = useTours();

    const [tourName, setTourName] = useState("");
    const [description, setDescription] = useState("");
    const [itinerary, setItinerary] = useState("");
    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [meetingPoint, setMeetingPoint] = useState("");
    const [transportation, setTransportation] = useState("");
    const [cost, setCost] = useState(data?.cost);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

    const onSubmit = async () => {
        const updatedData = {
            organizerId: data?.organizerId,
            organizerBy: data?.organizerBy,
            tourName: tourName === "" ? data?.tourName : tourName,
            description: description === "" ? data?.description : description,
            itinerary: itinerary === "" ? data?.itinerary : itinerary,
            duration: duration === "" ? data?.duration : duration,
            meetingPoint: meetingPoint === "" ? data?.meetingPoint : meetingPoint,
            transportation: transportation === "" ? data?.transportation : transportation,
            cost: cost === "" ? data?.cost : parseInt(cost),
            startDate: startDate === "" ? data?.startDate : startDate,
            endDate: endDate === "" ? data?.endDate : endDate,
            destination: destination === "" ? data?.destination : destination,
        }
        const response = await axios.patch(`https://tour-management-server-beryl.vercel.app/api/v1/update-tour/${data?._id}`, updatedData)
        if (response?.data?.modifiedCount > 0) {
            navigation.navigate("Manage_Tour");

            Alert.alert(
                "🎉 Success 🎉",
                "Tour Updated!",
                [
                    {
                        text: "OK", onPress: () => {
                            triggerRefetch();
                        }
                    }
                ],
                { cancelable: false }
            );
            // handleUpdate();

        }

    }

    // useEffect(() => {
    //     triggerRefetch();
    //     const res = tours?.find(item => item?._id == id);
    //     setData(res);
    //     setLoading(false);
    // }, [id]);

    const handleBack = () => {
        navigation.navigate('Manage_Tour_Details', { id: id })
    }

    if (toursFetching) {
        return (
            <View>
                <ActivityIndicator size="large" color="#32a1b9" />
            </View>
        );
    }

    return (
        // <View>
        //     {
        //         isModalUpdateVisible && <Modal isVisible={isModalUpdateVisible}>
        //             <ScrollView className="flex-1 mx-2 my-5">

        //                 <View className="flex flex-row items-center justify-between">
        //                     <Pressable
        //                         onPress={handleUpdate}
        //                     >
        //                         <Text className="bg-[#8BD8EA] px-3  py-3 rounded-full text-white font-medium border border-[#8BD8EA]">
        //                             <Icon name="left" size={20} color="#ffffff" />
        //                         </Text>
        //                     </Pressable>

        //                 </View>
        //                 <View>
        //                     <Text className="font-bold text-2xl text-center text-[#32a1b9]">Update Tour Details!</Text>
        //                 </View>

        //                 {/* Form */}
        //                 <View className="flex px-2 space-y-4 my-10 w-full z-50 h-full">
        //                     <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             placeholder="Tour Name"
        //                             value={tourName}
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setTourName}
        //                         />

        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             placeholder="Destination"
        //                             value={destination}
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setDestination}
        //                         />

        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             placeholder="Description"
        //                             value={description}
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setDescription}
        //                         />
        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             value={itinerary}
        //                             placeholder="Itinerary (e.g. Day 1: Safari drive) add Day 2 separated by comma."
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setItinerary}
        //                         />
        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             placeholder="Duration"
        //                             value={duration}
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setDuration}
        //                         />
        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             placeholder="Meeting Point"
        //                             value={meetingPoint}
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setMeetingPoint}
        //                         />
        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             placeholder="Transportation"
        //                             value={transportation}
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setTransportation}
        //                         />
        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
        //                         <TextInput
        //                             className="w-full"
        //                             placeholder="Cost"
        //                             value={cost?.toString()}
        //                             placeholderTextColor={"#32a1b9"}
        //                             onChangeText={setCost}
        //                         />
        //                     </Animated.View>
        //                     <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="bg-[#32a1b9]/10 rounded-2xl w-[95%] mx-auto flex flex-row items-center justify-between">
        //                         <Pressable onPress={() => setStartDatePickerVisibility(true)} className="border border-[#32a1b9] p-4 rounded-2xl">
        //                             <View className="flex flex-row items-center gap-3">
        //                                 <Text> <Icon name="calendar" size={25} color="#32a1b9" /></Text>
        //                                 <Text className="text-[#32a1b9] font-bold">Start Date</Text>
        //                             </View>
        //                             <DateTimePickerModal
        //                                 isVisible={isStartDatePickerVisible}
        //                                 mode="date"
        //                                 onConfirm={(date) => setStartDate(date)}
        //                                 onCancel={() => setStartDatePickerVisibility(false)}
        //                             />
        //                         </Pressable>
        //                         <Pressable onPress={() => setEndDatePickerVisibility(true)} className="border border-[#32a1b9] p-4 rounded-2xl">
        //                             <View className="flex flex-row items-center gap-3">
        //                                 <Text> <Icon name="calendar" size={25} color="#32a1b9" /></Text>
        //                                 <Text className="text-[#32a1b9] font-bold">End Date</Text>
        //                             </View>
        //                             <DateTimePickerModal
        //                                 isVisible={isEndDatePickerVisible}
        //                                 mode="date"
        //                                 onConfirm={(date) => setEndDate(date)}
        //                                 onCancel={() => setEndDatePickerVisibility(false)}
        //                             />
        //                         </Pressable>
        //                     </Animated.View>

        //                     <Animated.View entering={FadeInDown.delay(900).duration(1000).springify()} className="w-full">
        //                         <TouchableOpacity className=" bg-[#8BD8EA] p-4 rounded-2xl w-[95%] mx-auto" onPress={onSubmit}>
        //                             <Text className="text-white text-center font-semibold">Update Tour</Text>
        //                         </TouchableOpacity>
        //                     </Animated.View>

        //                 </View>
        //             </ScrollView>
        //         </Modal>
        //     }
        // </View>

        <ScrollView className="flex-1 mx-2 my-5">

            <View className="flex flex-row items-center justify-between">
                <Pressable
                    onPress={handleBack}
                >
                    <Text className="bg-[#8BD8EA] px-3  py-3 rounded-full text-white font-medium border border-[#8BD8EA]">
                        <Icon name="left" size={20} color="#ffffff" />
                    </Text>
                </Pressable>

            </View>
            <View>
                <Text className="font-bold text-2xl text-center text-[#32a1b9]">Update Tour Details!</Text>
            </View>

            {/* Form */}
            <View className="flex px-2 space-y-4 my-10 w-full z-50 h-full">
                <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Tour Name"
                        defaultValue={data?.tourName}
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setTourName}
                    />

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Destination"
                        defaultValue={data?.destination}
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setDestination}
                    />

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Description"
                        defaultValue={data?.description}
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setDescription}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        defaultValue={data?.itinerary}
                        placeholder="Itinerary (e.g. Day 1: Safari drive) add Day 2 separated by comma."
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setItinerary}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Duration"
                        defaultValue={data?.duration}
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setDuration}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Meeting Point"
                        defaultValue={data?.meetingPoint}
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setMeetingPoint}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Transportation"
                        defaultValue={data?.transportation}
                        placeholderTextColor={"#32a1b9"}
                        onChangeText={setTransportation}
                    />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                    <TextInput
                        className="w-full"
                        placeholder="Cost"
                        defaultValue={data?.cost?.toString()}
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
                            <Text className="text-[#32a1b9] font-bold">End Date</Text>
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
    );
}

const styles = StyleSheet.create({})

export default UpdateModal;
