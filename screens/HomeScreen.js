import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import { useCallback, useEffect, useState } from 'react';
import supportedLanguages from '../utils/supportedLanguages';
import { translate } from '../utils/translate';
import * as Clipboard from 'expo-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { addHistoryItem } from '../store/historySlice';
import TranslationResult from '../components/TranslationResult';
import uuid from 'react-native-uuid';

export default function HomeScreen(props) {
    const params = props.route.params || {};

    const dispatch = useDispatch();
    const history = useSelector(state => state.history.items);

    const [enteredText, setEnteredText] = useState("");
    const [resultText, setResultText] = useState("");
    const [languageTo, setLanguageTo] = useState("fr");
    const [languageFrom, setLanguageFrom] = useState("en");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (params.languageTo) {
            setLanguageTo(params.languageTo);
        }

        if (params.languageFrom) {
            setLanguageFrom(params.languageFrom);
        }
    }, [params.languageTo, params.languageFrom]);

    const onSubmit = useCallback(async () => {

        try {
            setIsLoading(true);
            const result = await translate(enteredText, languageFrom, languageTo);

            if (!result) {
                setResultText("");
                return;
            }

            const textResult = result.translated_text[result.to];
            setResultText(textResult);

            const id = uuid.v4();
            result.id = id;
            result.dateTime = new Date().toISOString();

            dispatch(addHistoryItem({ item: result }));
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }

    }, [enteredText, languageTo, languageFrom, dispatch]);

    const copyToClipboard = useCallback(async () => {
        await Clipboard.setStringAsync(resultText);
    }, [resultText]);

  return (
      <View style={styles.container}>
        <View style={styles.languageContainer}>
            <TouchableOpacity
                style={styles.languageOption}
                onPress={() => props.navigation.navigate("languageSelect", { title: "Translate from", selected: languageFrom, mode: 'from' })}>
                <Text style={styles.languageOptionText}>{supportedLanguages[languageFrom]}</Text>
            </TouchableOpacity>

            <View style={styles.arrowContainer}>
                <AntDesign name="arrowright" size={24} color={colors.lightGrey} />
            </View>

            <TouchableOpacity
                style={styles.languageOption}
                onPress={() => props.navigation.navigate("languageSelect", { title: "Translate to", selected: languageTo, mode: 'to' })}>
                <Text style={styles.languageOptionText}>{supportedLanguages[languageTo]}</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
                multiline
                placeholder='Enter text'
                style={styles.textInput}
                onChangeText={(text) => setEnteredText(text)}
            />

            <TouchableOpacity
                onPress={isLoading ? undefined : onSubmit}
                disabled={enteredText === ""}
                style={styles.iconContainer}>

                {
                    isLoading ?
                    <ActivityIndicator size={'small'} color={colors.primary} /> :
                    <Ionicons 
                        name="arrow-forward-circle-sharp"
                        size={24} 
                        color={enteredText !== "" ? colors.primary : colors.primaryDisabled} />
                }
                
            </TouchableOpacity>
        </View>

        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{resultText}</Text>

            <TouchableOpacity
                onPress={copyToClipboard}
                disabled={resultText === ""}
                style={styles.iconContainer}>
                <MaterialIcons 
                    name="content-copy"
                    size={24} 
                    color={resultText !== "" ? colors.textColor : colors.textColorDisabled} />
            </TouchableOpacity>
        </View>

        <View style={styles.historyContainer}>
            <FlatList
                data={history.slice().reverse()}
                renderItem={itemData => {
                    return <TranslationResult itemId={itemData.item.id} />
                }}
            />
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
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: 'regular',
    letterSpacing: 0.3,
    height: 90,
    color: colors.textColor
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultContainer: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 90,
    paddingVertical: 15
  },
  resultText: {
    fontFamily: 'regular',
    letterSpacing: 0.3,
    color: colors.primary,
    flex: 1,
    marginHorizontal: 20
  },
  historyContainer: {
    backgroundColor: colors.greyBackground,
    flex: 1,
    padding: 10
  }
});
