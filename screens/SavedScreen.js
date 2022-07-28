import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import TranslationResult from '../components/TranslationResult';
import colors from '../utils/colors';

export default function SavedScreen() {

  const savedItems = useSelector(state => state.savedItems.items);

  if (savedItems.length === 0) {
    return <View style={styles.noItemsContainer}>
        <Text style={styles.noItemsText}>Nothing to show</Text>
    </View>
  }

  return (
      <View style={styles.container}>
        
        <FlatList
            data={savedItems.slice().reverse()}
            renderItem={itemData => {
                return <TranslationResult itemId={itemData.item.id} />
            }}
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
  noItemsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noItemsText: {
    fontFamily: 'regular',
    letterSpacing: 0.3
  }
});
