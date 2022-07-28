import { StyleSheet, Text, View } from 'react-native';
import SettingsItem from '../components/SettingsItem';
import colors from '../utils/colors';
import { AntDesign } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
      <View style={styles.container}>
        <SettingsItem
          title="Clear history"
          subTitle="Clears all items from your history"
          iconFamily={AntDesign}
          icon="delete"
        />
        <SettingsItem
          title="Clear saved items"
          subTitle="Clears all saved items"
          iconFamily={AntDesign}
          icon="delete"
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBackground,
    padding: 10
  },
});
