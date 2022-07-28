import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import colors from "../utils/colors"

export default SettingsItem = props => {
    return <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.textContainer}>
            <Text
                numberOfLines={1}
                style={styles.title}>
                {props.title}
            </Text>

            <Text
                numberOfLines={1}
                style={styles.subTitle}>
                {props.subTitle}
            </Text>

        </View>

        <View style={styles.iconContainer}>
            <props.iconFamily name={props.icon} size={24} color={colors.primary}/>
        </View>

    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: colors.lightGrey,
        borderWidth: 0.5,
        borderTopWidth: 0,
        paddingVertical: 10,
        paddingHorizontal: 20
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