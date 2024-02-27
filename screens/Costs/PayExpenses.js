import React, { useState } from 'react';
import { View, StyleSheet, Pressable, ScrollView, Text, TextInput, Modal, TouchableOpacity, Alert } from 'react-native';
import useUser from '../../hooks/useUser';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';
import axios from 'axios';
import useTours from '../../hooks/useTours';


const PayExpenses = ({ handleAddCost, isModalCostAddVisible, id }) => {
    const { triggerRefetch } = useTours();
    const navigation = useNavigation();
    const { user } = useUser();
    const [amount, setAmount] = useState();
    const [details, setDetails] = useState();

    const onSubmit = async () => {

        const data = {
            payer: user?.userName,
            amount: parseInt(amount),
            email: user?.email,
            details: details
        }
        // console.log(data, id);
        const response = await axios.patch(`https://tour-management-server-beryl.vercel.app/api/v1/tours/${id}/addExpense`, data)
        if (response?.data?.modifiedCount > 0) {

            Alert.alert(
                "🎉 Success 🎉",
                "Cost expense added!",
                [
                    {
                        text: "OK", onPress: async () => {
                            await triggerRefetch();
                        }
                    }
                ],
                { cancelable: false }
            );
            handleAddCost();

        }
    }

    return (
        <View>
            {
                isModalCostAddVisible && <Modal isVisible={isModalCostAddVisible}>
                    <ScrollView className="flex-1 mx-2 my-5">

                        <View className="flex flex-row items-center justify-between">
                            <Pressable
                                onPress={handleAddCost}
                            >
                                <Text className="bg-[#8BD8EA] px-3  py-3 rounded-full text-white font-medium border border-[#8BD8EA]">
                                    <Icon name="left" size={20} color="#ffffff" />
                                </Text>
                            </Pressable>

                        </View>
                        <View>
                            <Text className="font-bold text-2xl text-center text-[#32a1b9]">Add a cost expenses!</Text>
                        </View>

                        {/* Form */}
                        <View className="flex px-2 space-y-4 my-10 w-full z-50 h-full">
                            <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Amount"
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setAmount}
                                />

                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} className="bg-[#32a1b9]/10 p-4 rounded-2xl w-[95%] mx-auto border border-[#32a1b9]">
                                <TextInput
                                    className="w-full"
                                    placeholder="Details"
                                    placeholderTextColor={"#32a1b9"}
                                    onChangeText={setDetails}
                                />

                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(900).duration(1000).springify()} className="w-full">
                                <TouchableOpacity className=" bg-[#8BD8EA] p-4 rounded-2xl w-[95%] mx-auto" onPress={onSubmit}>
                                    <Text className="text-white text-center font-semibold">Add</Text>
                                </TouchableOpacity>
                            </Animated.View>

                        </View>
                    </ScrollView>
                </Modal>
            }
        </View>
    );
}

export default PayExpenses;
