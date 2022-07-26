import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/colors';

export default function HomeScreen(props) {
  return (
      <View style={styles.container}>
        <View style={styles.languageContainer}>
            <TouchableOpacity
                style={styles.languageOption}
                onPress={() => console.log("Pressed")}>
                <Text style={styles.languageOptionText}>English</Text>
            </TouchableOpacity>

            <View style={styles.arrowContainer}>
                <AntDesign name="arrowright" size={24} color={colors.lightGrey} />
            </View>

            <TouchableOpacity
                style={styles.languageOption}
                onPress={() => console.log("Pressed")}>
                <Text style={styles.languageOptionText}>French</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  languageContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1
  },
  languageOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  arrowContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageOptionText: {
    color: colors.primary,
    fontFamily: 'regular',
    letterSpacing: 0.3
  }
});
