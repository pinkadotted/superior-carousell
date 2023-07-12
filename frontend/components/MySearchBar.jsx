import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { simpleComponents } from '../styles/styles';

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
    />
  );
};

export default MySearchBar;
