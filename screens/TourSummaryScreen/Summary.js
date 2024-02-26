import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, ScrollView, Pressable, Image } from 'react-native';
import useUser from '../../hooks/useUser';
import useTours from '../../hooks/useTours';
import NavHeader from '../NavHeader/NavHeader';

const Summary = () => {
    const navigation = useNavigation();
    const { user } = useUser();
    const { tours, triggerRefetch, toursFetching } = useTours();
    const route = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [payerTotals, setPayerTotals] = useState({});

    useEffect(() => {
        setLoading(true);
        const tour = tours.find(item => item?._id === id);
        const expensesData = tour?.expenses || [];

        // Calculate total amount for each payer
        const totals = {};
        expensesData.forEach(expense => {
            const { payer, amount, email } = expense;
            if (!totals[email]) {
                totals[email] = {
                    name: payer,
                    totalAmount: 0
                };
            }
            totals[email].totalAmount += amount;
        });
        setPayerTotals(totals);

        setData(tour)

        setLoading(false);
    }, [id, tours]);


    if (toursFetching && loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#32a1b9" />
            </View>
        );
    }
    return (
        <ScrollView className="flex-1 h-full w-full">
            <View>
                <NavHeader />
            </View>
            {/* table container */}

            <View className="mt-10">
                <Text className="text-center font-bold text-3xl text-[#32a1b9]">Expenses Record</Text>
            </View>

            {Object.keys(payerTotals).length > 0 ? (
                <ScrollView className="w-[97%] mx-auto my-12">
                    <View style={{ flexDirection: 'row', backgroundColor: '#49cce9', padding: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Payer</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Total Pay Amount</Text>
                        </View>
                    </View>
                    {Object.keys(payerTotals).map(email => (
                        <View key={email} style={{ flexDirection: 'row', backgroundColor: '#49cce92a', padding: 10 }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontWeight: 'bold', color: '#237183' }}>{payerTotals[email].name}</Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontWeight: 'bold', color: '#237183' }}>{payerTotals[email].totalAmount}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            ) : (
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'red' }}>No expenses record created yet!</Text>
                </View>
            )}

            <View className="mt-10">
                <Text className="text-center font-bold text-3xl text-[#32a1b9]">Current Wallet</Text>
            </View>

            <ScrollView className="my-10">
                {
                    data?.friends ? data?.friends?.map((friend, indx) => <View key={indx} className="my-2 bg-sky-100/75 p-3 rounded-md flex flex-row items-center justify-between border border-[#32a1b9] w-[97%] mx-auto">
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
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Summary;
