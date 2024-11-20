import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchInputProps {
  placeholder?: string;
  onSearch: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Pesquisar...", onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleChange}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={"#000"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    marginBottom: 30,
    width:"100%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default SearchInput;
