import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import colors from "../utils/colors";

export default TranslationResult = props => {

    return <View style={styles.container}>

        <View style={styles.textContainer}>
            <Text
                numberOfLines={4}
                style={styles.title}>Some item</Text>
            <Text
                numberOfLines={4}
                style={styles.subTitle}>Some sub title</Text>
        </View>

        <TouchableOpacity
            style={styles.iconContainer}>
            <Entypo name="star" size={24} color={colors.subTextColor} />
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
        color: colors.subTextColor
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})