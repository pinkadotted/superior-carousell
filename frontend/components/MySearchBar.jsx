import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { simpleComponents } from '../styles/styles';
import { colors } from '../styles/palette';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const MySearchBar = ({ isIdle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchTimer, setSearchTimer] = useState(null);
  const navigate = useNavigation();

  const onChangeSearch = query => {
    // if (searchTimer){
    //   clearTimeout(searchTimer);
    // };
    setSearchQuery(query);
    isIdle(query==="");
    // setSearchTimer(setTimeout( () => {
    //   navigate.navigate("search-results");
    //   setSearchQuery("");
    // }, 1000),
    // );    
  };
  return (
    <Searchbar
      placeholder=""
      onChangeText={onChangeSearch}
      value={searchQuery}
      mode='bar'
      style={simpleComponents.searchbar}
      iconColor={colors.caribbeancurrent}
      onFocus={() => isIdle(false)}
      onBlur={() => {
          isIdle(searchQuery==="");
        }
      }
      onClearIconPress={() => isIdle(true)}
    />
  );
};

export default MySearchBar;
