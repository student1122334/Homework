import { StyleSheet } from 'react-native';

export const ListStyles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    borderRadius: 25,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  block: {
    height: 70,
    width: 115,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    overflow: 'hidden',
    backgroundColor: '#6F59F8',
    borderColor: '#5D558C',
    borderWidth: 2,
  },
  text: {
    color: 'white',
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: 'black',
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.8,
    alignSelf: 'center',
  },
});
