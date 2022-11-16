import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonStyles } from '../../styles/index';
export const SubmitButton = ({ data, updateData, inputText }) => {
  const onHandleChange = () => {
    updateData([...data, inputText]);
  };

  return (
    <TouchableOpacity
      disabled={!inputText}
      onPress={onHandleChange}
      style={!inputText ? disabledBtn : activeBtn}>
      <Text style={ButtonStyles.text}>Submit</Text>
    </TouchableOpacity>
  );
};

const activeBtn = StyleSheet.compose(ButtonStyles.button, ButtonStyles.active);
const disabledBtn = StyleSheet.compose(
  ButtonStyles.button,
  ButtonStyles.disabled
);
