import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TourManageDetails = () => {
    const route = useRoute();
    const { id } = route.params;
    return (
        <View>
            <Text>ID : {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default TourManageDetails;
