import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import colors from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setSavedItems } from "../store/savedItemsSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default TranslationResult = props => {
    const dispatch = useDispatch();

    const { itemId } = props;
    const item = useSelector(state => {
        return state.history.items.find(item => item.id === itemId) ||
            state.savedItems.items.find(item => item.id === itemId)
    });
    const savedItems = useSelector(state => state.savedItems.items);

    const isSaved = savedItems.some(i => i.id === itemId);
    const starIcon = isSaved ? "star" : "star-outlined";

    const starItem = useCallback(async () => {
        let newSavedItems;

        if (isSaved) {
            newSavedItems = savedItems.filter(i => i.id !== itemId);
        }
        else {
            newSavedItems = savedItems.slice();
            newSavedItems.push(item);
        }

        await AsyncStorage.setItem('savedItems', JSON.stringify(newSavedItems));

        dispatch(setSavedItems({ items: newSavedItems }));
    }, [dispatch, savedItems]);

    return <View style={styles.container}>

        <View style={styles.textContainer}>
            <Text
                numberOfLines={4}
                style={styles.title}>{item.original_text}</Text>
            <Text
                numberOfLines={4}
                style={styles.subTitle}>{item.translated_text[item.to]}</Text>
        </View>

        <TouchableOpacity
            onPress={starItem}
            style={styles.iconContainer}>
            <Entypo name={starIcon} size={24} color={colors.subTextColor} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        borderColor: colors.lightGrey,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderTopWidth: 0
    },
    textContainer: {
        flex: 1,
        marginRight: 8
    },
    title: {
        fontFamily: 'medium',
        letterSpacing: 0.3,
        color: colors.textColor
    },
    subTitle: {
        fontFamily: 'regular',
        letterSpacing: 0.3,
        color: colors.subTextColor,
        fontSize: 13
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})