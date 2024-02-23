import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = 270

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />

            <Text className="pt-3 pl-4 font-bold text-lg italic text-[#31b2cf]">{item.title}</Text>

            <View className="pt-1 pl-2 flex flex-row items-center gap-1">
                <Text>
                    <Icon name="location-arrow" size={20} color="#31b2cf" />
                </Text>
                <Text className="font-bold text-lg italic text-[#31b2cf]"> {item.location}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 250,
        paddingBottom: 40,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 4,
    },
    image: {
        width: 250,
        height: 200,
        borderRadius: 8,
    },
})

export default CarouselCardItem