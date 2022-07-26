import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
      <View style={styles.container}>
        <Text>Settings screen</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
