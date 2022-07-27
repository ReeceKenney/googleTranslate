import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import LanguageItem from '../components/LanguageItem';
import colors from '../utils/colors';
import supportedLanguages from '../utils/supportedLanguages';

const CustomHeaderButton = props => {
  return <HeaderButton
            { ...props }
            IconComponent={Ionicons}
            iconSize={23}
            color={props.color || colors.primary}
          />
}

export default function LanguageSelectScreen({ navigation, route }) { 
  const params = route.params || {};
  const { title, selected } = params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            iconName="close"
            color={colors.textColor}
            onPress={() => navigation.goBack()}
            />
        </HeaderButtons>
    )
    })
  }, [navigation]);

  const onLanguageSelect = useCallback(itemKey => {
    const dataKey = params.mode === 'to' ? 'languageTo' : 'languageFrom';
    navigation.navigate("Home", { [dataKey]: itemKey });
  }, [params, navigation]);

  return (
      <View style={styles.container}>
        
        <FlatList
          data={Object.keys(supportedLanguages)}
          renderItem={(itemData) => {
            const languageKey = itemData.item;
            const languageString = supportedLanguages[languageKey];
            return <LanguageItem
                      onPress={() => onLanguageSelect(languageKey)}
                      text={languageString}
                      selected={languageKey === selected }
                    />
          }}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
