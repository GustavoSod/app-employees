import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchInput from '@/components/SearchInput';

describe('SearchInput', () => {
  it('deve renderizar corretamente com o placeholder', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchInput onSearch={onSearch} />);

    const input = getByPlaceholderText('Pesquisar...');
    expect(input).toBeTruthy();
  });

  it('deve chamar a função onSearch com o texto correto', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchInput onSearch={onSearch} />);

    const input = getByPlaceholderText('Pesquisar...');

    fireEvent.changeText(input, 'novo texto');

    expect(onSearch).toHaveBeenCalledWith('novo texto');
  });

  it('deve renderizar com o placeholder personalizado', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchInput onSearch={onSearch} placeholder="Buscar..." />);

    const input = getByPlaceholderText('Buscar...');
    expect(input).toBeTruthy();
  });
});
