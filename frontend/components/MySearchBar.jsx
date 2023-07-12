import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { simpleComponents } from '../styles/styles';
import { colors } from '../styles/palette';

const MySearchBar = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      mode='bar'
      style={simpleComponents.searchbar}
      iconColor={colors.caribbeancurrent}
    />
  );
};

export default MySearchBar;
