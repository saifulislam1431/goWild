import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import useUser from './useUser';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

export const useTours = () => {
    const { user, loading } = useUser();
    const [isRefetching, setRefetching] = useState(false)

    const { data: tours = [], refetch, isLoading: toursFetching } = useQuery({
        queryKey: ["tours"],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            try {
                const res = await axios.get(`https://tour-management-server-beryl.vercel.app/api/v1/tours/${user?.email}`)
                return res.data;
            } catch (error) {
                throw error;
            }
        }
    });

    // Function to trigger a refetch
    const triggerRefetch = () => {
        setRefetching(true); // Set isRefetching to true
        refetch(); // Trigger the refetch
        setRefetching(false)
    }

    // Run this effect when the screen comes into focus
    // useFocusEffect(
    //     React.useCallback(() => {
    //         triggerRefetch(); // Trigger a refetch when the screen comes into focus
    //         return () => {
    //             // Clean up if necessary
    //         };
    //     }, [])
    // );

    return { tours, triggerRefetch, toursFetching, refetch };
};

export default useTours;
