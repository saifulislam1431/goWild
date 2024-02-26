import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ScrollView, Image, Pressable, Modal, Button, Alert } from 'react-native';
// import tourData from "./tour.json"
import NavHeader from '../NavHeader/NavHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import UpdateModal from './UpdateModal';
import AddFriendModal from './AddFriendModal';
import useTours from '../../hooks/useTours';
import moment from 'moment';
import useUser from '../../hooks/useUser';
import axios from 'axios';

const TourManageDetails = () => {
    const navigation = useNavigation();
    const { user } = useUser();
    const { tours, refetch, toursFetching, triggerRefetch } = useTours();
    const [isAddFriendModalVisible, setAddFriendModalVisible] = useState(false);
    const route = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});


    if (toursFetching && loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#32a1b9" />
            </View>
        );
    }

    // const handleOpenUpdateModal = () => {
    //     setModalUpdateVisible(true);
    // }

    const handleUpdate = () => {
        navigation.navigate('Update_Tour_Details', { id: data?._id, data: data })
    };

    const handleAddFriend = () => {
        setAddFriendModalVisible(false);
        refetch();
    };

    const handleDelete = async (id) => {
        const response = await axios.delete(`https://tour-management-server-beryl.vercel.app/api/v1/delete-tour/${id}`)
        if (response?.data?.deletedCount > 0) {
            triggerRefetch();
            Alert.alert(
                "🎉 Success 🎉",
                "Tour Deleted!",
                [
                    {
                        text: "OK", onPress: () => {
                            navigation.navigate("Manage_Tour");
                        }
                    }
                ],
                { cancelable: false }
            );
        }
    }

    const handleDeleteNotification = async (id) => {
        Alert.alert(
            "Confirmation!",
            "Do you sure to delete this? You won't be able to retrieve this again",
            [
                { text: "Yes, Delete it!", onPress: () => handleDelete(id) }
            ],
            {
                cancelable: true,
            }
        );
    }



    useEffect(() => {
        refetch();
        const res = tours?.find(item => item?._id == id);
        setData(res);
        setLoading(false);
    }, [id]);

    return (
        <ScrollView className="flex-1 h-full w-full relative bg-white">
            <View className="absolute">
                <NavHeader />
            </View>
            <View className="w-full h-80 -z-10 relative flex items-center justify-center">
                <Image source={{ uri: `${data?.image}` }} className="h-full w-full opacity-80" />
            </View>

            <View className="mt-6 p-3 rounded-md bg-slate-100 mx-2 shadow-lg">
                <View className="space-y-2">
                    <Text className="font-bold text-base text-[#32a1b9]">{data?.tourName}</Text>
                    <Text className="font-bold text-base">Destination: <Text className="text-[#32a1b9]">{data?.destination}</Text></Text>
                    <Text className="font-bold text-base">Date: <Text className="text-[#32a1b9]">{moment(data?.startDate).format('l')}</Text> to <Text className="text-[#32a1b9]">{moment(data?.endDate).format('l')}</Text></Text>
                    <Text className="font-bold text-base">Cost: <Text className="text-[#32a1b9]"><Icon name='dollar' size={16} color="#32a1b9" />{data?.cost}/person</Text></Text>
                    <Text className="font-bold text-base">Transportation: <Text className="text-[#32a1b9]">{data?.transportation}</Text></Text>
                </View>
                {
                    user?._id === data?.organizerId && <View className="mt-4 flex flex-row items-center space-x-5">
                        <Pressable className="bg-red-600 p-3 rounded-full" onPress={() => handleDeleteNotification(data?._id)}>
                            <Text><Icon name='trash-o' size={20} color="#ffffff" /></Text>
                        </Pressable>

                        <Pressable className="bg-[#32a1b9] p-3 rounded-full" onPress={handleUpdate}>
                            <Text><Icon name='edit' size={20} color="#ffffff" /></Text>
                        </Pressable>

                        <Pressable className="border border-[#6fb98f] rounded-full flex flex-row items-center space-x-2" onPress={() => setAddFriendModalVisible(true)}>
                            <Text className="bg-[#6fb98f] p-3 rounded-full"><Icon name='user-plus' size={20} color="#ffffff" /></Text>
                            <Text className=" pr-3 font-semibold text-[#6fb98f]">Add Friend</Text>
                        </Pressable>

                        <AddFriendModal handleAddFriend={handleAddFriend} isAddFriendModalVisible={isAddFriendModalVisible} id={data?._id} />
                    </View>
                }

            </View>

            <View className="my-8 p-3 rounded-md bg-sky-50 mx-2 shadow-lg">
                <Text className="font-bold text-base text-[#32a1b9]">Tour Mate:</Text>
                {
                    data?.friends ? data?.friends?.map((friend, indx) => <View key={indx} className="my-5 bg-sky-100/75 p-3 rounded-md flex flex-row items-center justify-between border border-[#32a1b9]">
                        <View>
                            <View className="flex flex-row items-center space-x-2">
                                <Image source={{
                                    uri: `${friend?.profile}`
                                }} className="w-12 h-12 rounded-full" />

                                <Text className="font-bold text-xl text-[#32a1b9]">{friend?.name === user?.userName ? "You" : friend?.name}</Text>
                            </View>
                        </View>
                        <View>
                            <Text className="font-bold text-xl text-[#32a1b9]">Wallet: <Text className={`${friend?.balance < 0 ? "text-red-600" : ""}`}>{friend?.balance?.toFixed(2)}</Text></Text>
                        </View>
                    </View>) : <Text className="font-bold text-base text-red-500"> No Friend added yet! </Text>
                }
            </View>

            <View className="my-8 p-3 rounded-md bg-sky-50 mx-2 shadow-lg">
                <View className="space-y-2">
                    <Text className="font-bold text-base">Description: <Text className="text-[#32a1b9]">{data?.description}</Text></Text>
                    <Text className="font-bold text-base">Itinerary: </Text>
                    <View>
                        {
                            data?.itinerary?.split(",").map((item, indx) => <Text className="text-[#32a1b9] font-medium" key={indx}>{item}</Text>)
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default TourManageDetails;
