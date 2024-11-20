import React from 'react';
import { render } from '@testing-library/react-native';
import { HeaderEmployee } from '@/components/HeaderEmployee';

describe('HeaderEmployee', () => {
  it('deve renderizar corretamente o componente', () => {
    const { getByText } = render(<HeaderEmployee />);

    expect(getByText('Foto')).toBeTruthy();
    expect(getByText('Nome')).toBeTruthy();
  });
});
