import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import { SearchBar, List, ClearButton } from '../components/index';

export const MainScreen = () => {
  const [inputText, setInputText] = useState('');
  const [data, updateData] = useState([]);

  return (
    <View style={{ flex: 1, backgroundColor: 'FFFFFF', padding: 10 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar inputText={inputText} setInputText={setInputText} />
        <List inputText={inputText} data={data} updateData={updateData} />
        {data.length > 0 && (
          <View style={{ alignItems: 'center' }}>
            <ClearButton updateData={updateData} />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};
