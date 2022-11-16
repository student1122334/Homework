import { StyleSheet } from 'react-native';

export const ButtonStyles = StyleSheet.create({
  button: {
    flex: 1,
    width: 150,
    paddingVertical: 15,
    paddingHorizontal: 70,
    color: 'white',
    backgroundColor: '#5A31F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 700,
  },
  active: {
    backgroundColor: '#5A31F4',
  },
  disabled: {
    backgroundColor: 'gray',
  },
});
