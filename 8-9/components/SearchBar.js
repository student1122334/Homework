import { TextInput, View, StyleSheet } from 'react-native';

export const SearchBar = ({ inputText, setInputText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        onChangeText={(inputText) => setInputText(inputText.trim())}
        defaultValue={inputText}
        placeholder={'Search'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 24,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  inputText: {
    flex: 1,
  },
});
