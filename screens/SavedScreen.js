import { StyleSheet, Text, View } from 'react-native';

export default function SavedScreen() {
  return (
      <View style={styles.container}>
        <Text>Saved screen</Text>
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
