import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { components } from '../styles/styles';

const MySearchBar = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      mode='bar'
      style={components.searchbar}
    />
  );
};

export default MySearchBar;
