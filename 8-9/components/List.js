import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { SubmitButton } from './index';
import { ListStyles } from '../styles/index';
import { getEncoded } from '../utils/index'
export const List = ({ data, updateData, inputText }) => {
  const filteredData = [...data].filter((e) =>
    e.toLowerCase().includes(inputText.toLowerCase())
  );
  const deleteData = (input) => {
    const filteredList = data.filter((item) => item !== input);
    updateData(filteredList);
  };
  return (
    <FlatList
      data={filteredData}
      style={{ flex: 1, alignItems: 'center' }}
      renderItem={({ item, index }) => (
        <Row item={item} deleteRow={deleteData} index={index} key={index} />
      )}
      ListEmptyComponent={() => (
        <SubmitButton
          inputText={inputText}
          data={data}
          updateData={updateData}
          das
        />
      )}
      ItemSeparatorComponent={() => <View style={ListStyles.separator} />}
    />
  );
};

export const Row = ({ item, deleteRow }) => {
  const [encryptedData, setEncryptedData] = useState('');

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={ListStyles.block}>
        <Text style={ListStyles.text}>{item}</Text>
      </View>

      {encryptedData ? (
        <TrashCan deleteItem={deleteRow} item={item} />
      ) : (
        <Lock setEncryptedData={setEncryptedData} item={item} />
      )}
      <View
        style={[
          ListStyles.block,
          { backgroundColor: encryptedData ? 'green' : 'FFFFFF' },
        ]}>
        <Text style={ListStyles.text}>{encryptedData}</Text>
      </View>
    </View>
  );
};

export const Lock = ({ setEncryptedData, item }) => {
  const handleChange = () => {
    setEncryptedData(getEncoded(item, 7));
  };

  return (
    <TouchableOpacity onPress={handleChange} style={ListStyles.imgContainer}>
      <Image
        style={ListStyles.img}
        source={{
          uri: 'https://img.icons8.com/ios-glyphs/30/000000/lock--v1.png',
        }}
      />
    </TouchableOpacity>
  );
};
export const TrashCan = ({ deleteItem, item }) => {
  const handleDelete = (toBeDeletedItem) => {
    deleteItem(toBeDeletedItem);
  };
  return (
    <TouchableOpacity
      onPress={() => handleDelete(item)}
      style={ListStyles.imgContainer}>
      <Image
        style={ListStyles.img}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/542/542724.png',
        }}
      />
    </TouchableOpacity>
  );
};
