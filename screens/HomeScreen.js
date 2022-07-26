import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(props) {
  return (
      <View style={styles.container}>
        <Text>Home screen</Text>

        <Button title='Click me' onPress={() => {
            props.navigation.navigate("screen2")
        }} />
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
