import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, ScrollView, Pressable } from 'react-native';
import useUser from '../../hooks/useUser';
import useTours from '../../hooks/useTours';
import NavHeader from '../NavHeader/NavHeader';
import PayExpenses from './PayExpenses';

const Costs = () => {
    const navigation = useNavigation();
    const { user } = useUser();
    const { tours, triggerRefetch, toursFetching } = useTours();
    const [isModalCostAddVisible, setModalCostAddVisible] = useState(false);
    const route = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        setLoading(true);
        const res = tours?.find(item => item?._id == id);
        setData(res)
        setLoading(false);
    }, [id]);


    if (toursFetching && loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#32a1b9" />
            </View>
        );
    }

    const handleAddCost = () => {
        setModalCostAddVisible(false);
        triggerRefetch()
    };




    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');



    return (
        <ScrollView className="flex-1 h-full w-full">
            <View>
                <NavHeader />
            </View>

            <View className="w-full mt-4">
                <Pressable className="w-[90%] mx-auto bg-[#32a1b9]  py-3 rounded-full" onPress={() => setModalCostAddVisible(true)}>
                    <Text className="text-center text-white text-base font-semibold">Pay</Text>
                </Pressable>
            </View>
            <PayExpenses handleAddCost={handleAddCost} isModalCostAddVisible={isModalCostAddVisible} id={data?._id}></PayExpenses>

            {/* table container */}

            <View className="mt-10">
                <Text className="text-center font-bold text-3xl text-[#32a1b9]">Expenses Record</Text>
            </View>

            {
                data?.expenses?.length > 0 ? <ScrollView className="my-10 w-[97%] mx-auto">
                    <View className="flex flex-row items-center w-full bg-[#49cce9] px-2 py-2 rounded-t">
                        <View style={{ width: "30%" }}>
                            <Text className="font-semibold text-white">Payer</Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text className="font-semibold text-white">Description</Text>
                        </View>
                        <View style={{ width: "20%" }}>
                            <Text className="font-semibold text-white">Amount</Text>
                        </View>
                    </View>
                    {
                        data?.expenses?.map((expense, indx) => <View className="flex flex-row items-center w-full bg-[#49cce92a] px-2 py-2" key={indx}>
                            <View style={{ width: "30%" }}>
                                <Text className="font-semibold text-[#237183]">{expense?.payer}</Text>
                            </View>
                            <View style={{ width: "50%" }}>
                                <Text className="font-semibold text-[#237183]">{expense?.details}</Text>
                            </View>
                            <View style={{ width: "20%" }}>
                                <Text className="font-semibold text-[#237183]">{expense?.amount}</Text>
                            </View>
                        </View>)
                    }
                </ScrollView> : <View className="mt-10">
                    <Text className="text-center font-bold text-3xl text-red-500">No expenses record created yet!</Text>
                </View>
            }
        </ScrollView>
    );
}

// const styles = StyleSheet.create({})

export default Costs;
