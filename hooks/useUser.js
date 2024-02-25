import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                const value = await AsyncStorage.getItem('user');
                const info = JSON.parse(value);
                setUser(info);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, []);

    return { user, loading }
}


export default useUser;
