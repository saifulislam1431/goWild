import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ScrollView, Image, Pressable, Modal, Button } from 'react-native';
import tourData from "./tour.json"
import NavHeader from '../NavHeader/NavHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import UpdateModal from './UpdateModal';
import AddFriendModal from './AddFriendModal';

const TourManageDetails = () => {
    const [isModalUpdateVisible, setModalUpdateVisible] = useState(false);
    const [isAddFriendModalVisible, setAddFriendModalVisible] = useState(false);
    const route = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const res = tourData?.find(item => item?.id == id);
        setData(res)
        setLoading(false);
    }, []);
    // console.log(data);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#32a1b9" />
            </View>
        );
    }

    const handleUpdate = () => {
        setModalUpdateVisible(false);
    };

    const handleAddFriend = () => {
        setAddFriendModalVisible(false);
    };

    const handleDelete = async (id) => {
        console.log('====================================');
        console.log("delete", id);
        console.log('====================================');
    }



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
                    <Text className="font-bold text-base">Date: <Text className="text-[#32a1b9]">{data?.startDate}</Text> to <Text className="text-[#32a1b9]">{data?.endDate}</Text></Text>
                    <Text className="font-bold text-base">Cost: <Text className="text-[#32a1b9]"><Icon name='dollar' size={16} color="#32a1b9" />{data?.cost}/person</Text></Text>
                    <Text className="font-bold text-base">Transportation: <Text className="text-[#32a1b9]">{data?.transportation}</Text></Text>
                </View>
                <View className="mt-4 flex flex-row items-center space-x-5">
                    <Pressable className="bg-red-600 p-3 rounded-full" onPress={() => handleDelete(data?.id)}>
                        <Text><Icon name='trash-o' size={20} color="#ffffff" /></Text>
                    </Pressable>

                    <Pressable className="bg-[#32a1b9] p-3 rounded-full" onPress={() => setModalUpdateVisible(true)}>
                        <Text><Icon name='edit' size={20} color="#ffffff" /></Text>
                    </Pressable>

                    <UpdateModal handleUpdate={handleUpdate} isModalUpdateVisible={isModalUpdateVisible} data={data}></UpdateModal>

                    <Pressable className="border border-[#6fb98f] rounded-full flex flex-row items-center space-x-2" onPress={() => setAddFriendModalVisible(true)}>
                        <Text className="bg-[#6fb98f] p-3 rounded-full"><Icon name='user-plus' size={20} color="#ffffff" /></Text>
                        <Text className=" pr-3 font-semibold text-[#6fb98f]">Add Friend</Text>
                    </Pressable>

                    <AddFriendModal handleAddFriend={handleAddFriend} isAddFriendModalVisible={isAddFriendModalVisible} id={data?.id} />
                </View>
            </View>

            <View className="my-8 p-3 rounded-md bg-sky-50 mx-2 shadow-lg">
                <Text className="font-bold text-base text-[#32a1b9]">Tour Mate:</Text>
                {
                    data?.friends ? data?.friends?.map((friend, indx) => <View key={indx} className="my-5 bg-sky-100/75 p-3 rounded-md flex flex-row items-center justify-between border border-[#32a1b9]">
                        <View>
                            <View className="flex flex-row items-center space-x-2">
                                <Image source={{
                                    uri: "https://i.ibb.co/tqnD2S3/man.png"
                                }} className="w-11 h-11" />

                                <Text className="font-bold text-xl text-[#32a1b9]">Saiful Islam</Text>
                            </View>
                        </View>
                        <View>
                            <Text className="font-bold text-xl text-[#32a1b9]">Wallet: 0</Text>
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
