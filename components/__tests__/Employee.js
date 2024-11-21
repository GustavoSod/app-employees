import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Employee from '@/components/Employee';

describe('Employee', () => {
  const mockEmployee = {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    phone: '1234567890',
    admission_date: '2023-01-01T00:00:00Z',
    job: 'Software Engineer',
  };

  it('deve renderizar corretamente os dados do funcionário', () => {
    const { getByText } = render(<Employee item={mockEmployee} />);

    expect(getByText('John Doe')).toBeTruthy();
  });

  it('deve alternar a visibilidade dos detalhes quando o botão for pressionado', () => {
    const { getByText, queryByText } = render(<Employee item={mockEmployee} />);

    expect(queryByText('Telefone:')).toBeNull();
    expect(queryByText('Data de Admissão:')).toBeNull();
    expect(queryByText('Cargo:')).toBeNull();

    fireEvent.press(getByText('v'));

    expect(getByText('Telefone:')).toBeTruthy();
    expect(getByText('Data de Admissão:')).toBeTruthy();
    expect(getByText('Cargo:')).toBeTruthy();

    fireEvent.press(getByText('>'));

    expect(queryByText('Telefone:')).toBeNull();
    expect(queryByText('Data de Admissão:')).toBeNull();
    expect(queryByText('Cargo:')).toBeNull();
  });
});
