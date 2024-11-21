import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
      <FontAwesome name="search" size={18} color="#1c1c1c" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleChange}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#1c1c1c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 30,
    width: "100%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});

export default SearchInput;
