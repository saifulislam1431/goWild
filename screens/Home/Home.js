import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import NavHeader from '../NavHeader/NavHeader';

const Home = () => {
    return (
        <SafeAreaView className="flex-1 h-full w-full">
            <View>
                <NavHeader />
            </View>

            <View>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    );
}


export default Home;
