import { Text, TouchableOpacity } from 'react-native';
import { ButtonStyles } from '../../styles/index';

export const ClearButton = ({ updateData }) => {
  const onHandleChange = () => {
    updateData([]);
  };

  return (
    <TouchableOpacity onPress={onHandleChange} style={{...ButtonStyles.button, marginTop: 20}}>
      <Text style={ButtonStyles.text}>Clear</Text>
    </TouchableOpacity>
  );
};


