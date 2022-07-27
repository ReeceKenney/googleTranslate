import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import colors from "../utils/colors";

export default LanguageItem = props => {

    return <TouchableOpacity
                style={styles.container}
                onPress={props.onPress}>
        <View style={styles.iconContainer}>
            {
                props.selected &&
                <Feather name="check" size={18} color={colors.textColor} />
            }
        </View>

        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1
    },
    iconContainer: {
        paddingRight: 7,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40
    },
    text: {
        flex: 1,
        fontFamily: 'regular',
        letterSpacing: 0.3
    }
})