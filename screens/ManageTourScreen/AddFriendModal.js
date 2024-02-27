import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Modal, Text, TextInput, Image, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import useTours from '../../hooks/useTours';
import { useNavigation } from '@react-navigation/native';


const AddFriendModal = ({ handleAddFriend, isAddFriendModalVisible, id }) => {
    const [text, setText] = useState("");
    const [users, setUser] = useState([]);
    const { refetch, tours } = useTours();
    const navigation = useNavigation();
    // console.log('====================================');
    // console.log(users);
    // console.log('====================================');




    const fetchUsers = async () => {
        const response = await axios.get(`https://tour-management-server-beryl.vercel.app//api/v1/search-user?name=${text}`);
        const allFriendsEmails = tours.flatMap(tour => tour.friends.map(fr => fr.email));
        const data = response.data.filter(friend => !allFriendsEmails.includes(friend.email));
        setUser(data);
    };

    // console.log(text);

    const handleAdd = async (userData) => {

        const response = await axios.patch(`https://tour-management-server-beryl.vercel.app/api/v1/tours/${id}/addFriend`, userData)
        if (response.data.modifiedCount > 0) {
            refetch();
            Alert.alert(
                "🎉 Success 🎉",
                "Friend Added!",
                [
                    {
                        text: "OK", onPress: async () => {
                            await refetch()
                            setText("")
                            navigation.navigate('Manage_Tour');
                            handleAddFriend();
                        }
                    }
                ],
                { cancelable: false }
            );
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [text])

    return (
        <View>
            {
                isAddFriendModalVisible && <Modal isVisible={isAddFriendModalVisible}>
                    <ScrollView className="flex-1 mx-2 my-5">

                        <View>
                            <Text className="font-bold text-2xl text-center text-[#32a1b9]">Add Friend in Tour!</Text>
                        </View>

                        <View className="bg-[#098B42]/10 p-2 rounded-2xl w-[70%] mx-auto border border-[#098B42] relative flex flex-row items-center justify-center mt-6">
                            <Text className="absolute right-3">
                                <Icon name="search1" size={25} color="#098B42" />
                            </Text>
                            <TextInput placeholder='Search friend by name...' placeholderTextColor={"#045326"}
                                className="w-full"
                                onChangeText={setText}
                            />
                        </View>

                        {/* List */}
                        {
                            users.length < 0 ? <View>
                                <Text className="text-3xl font-medium my-3 text-red-500">Not Found!</Text>
                            </View>
                                : users?.map(user => <View key={user?._id} className="my-5 bg-sky-100/75 p-3 rounded-md flex flex-row items-center justify-between">
                                    <View>
                                        <View className="flex flex-row items-center space-x-2">
                                            <Image source={{
                                                uri: `${user?.profile}`
                                            }} className="w-11 h-11 rounded-full" />

                                            <Text className="font-bold text-xl text-[#32a1b9]">{user?.userName}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Pressable className="p-2 bg-[#12B659] rounded-full" onPress={() => handleAdd({ name: user?.userName, profile: user?.profile, email: user?.email, balance: 0 })}>
                                            <Text>
                                                <Icon name="pluscircleo" size={23} color="#ffffff" />
                                            </Text>
                                        </Pressable>
                                    </View>
                                </View>)
                        }

                        {/* Modal Close */}
                        <Pressable className="border border-[#12B659] rounded-full flex flex-row items-center justify-start space-x-3 w-1/2 mx-auto mt-4" onPress={handleAddFriend}>
                            <Text className="bg-[#12B659] p-2 rounded-full">
                                <Icon name="closecircle" size={23} color="#ffffff" />
                            </Text>

                            <Text className="font-bold text-xl text-[#12B659]">
                                Close Modal
                            </Text>
                        </Pressable>
                    </ScrollView>
                </Modal>
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default AddFriendModal;
