import React from 'react';
import { View, StyleSheet, ScrollView, Modal, Text, TextInput, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const AddFriendModal = ({ handleAddFriend, isAddFriendModalVisible, id }) => {

    const handleAdd = async (userData) => {
        console.log('====================================');
        console.log(userData, id);
        console.log('====================================');
    }

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
                            />
                        </View>

                        {/* List */}
                        <View className="my-5 bg-sky-100/75 p-3 rounded-md flex flex-row items-center justify-between">
                            <View>
                                <View className="flex flex-row items-center space-x-2">
                                    <Image source={{
                                        uri: "https://i.ibb.co/tqnD2S3/man.png"
                                    }} className="w-11 h-11" />

                                    <Text className="font-bold text-xl text-[#32a1b9]">Saiful Islam</Text>
                                </View>
                            </View>
                            <View>
                                <Pressable className="p-2 bg-[#12B659] rounded-full" onPress={() => handleAdd({ name: "Saiful islam", profile: "https://i.ibb.co/tqnD2S3/man.png", balance: 0 })}>
                                    <Text>
                                        <Icon name="pluscircleo" size={23} color="#ffffff" />
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

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
