import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MySearchBar = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      mode='bar'
      style={{ borderRadius: 10, height: 50, minWidth: '70%'}}
          
    />
  );
};

export default MySearchBar;
