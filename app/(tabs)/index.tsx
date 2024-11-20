import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Employee from '@/components/Employee';
import { HeaderEmployee } from '@/components/HeaderEmployee';
import SearchInput from '@/components/SearchInput';

interface EmployeeProps {
  id: number;
  name: string;
  image: string;
  phone: string;
  admission_date: string;
  job: string;
}

export default function TabOneScreen() {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeProps[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3000/employees');
        const data = await response.json();
        setEmployees(data);
        setFilteredEmployees(data);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = (text: string) => {
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funcionários</Text>
      <SearchInput onSearch={handleSearch} />
      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Employee item={item} />}
        ListHeaderComponent={HeaderEmployee}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
  list: {
    borderRadius: 10,
  },
});
