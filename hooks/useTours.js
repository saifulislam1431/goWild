import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import useUser from './useUser';

export const useTours = () => {
    const { user, loading } = useUser();

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

    return { tours, refetch, toursFetching };
};

export default useTours;
