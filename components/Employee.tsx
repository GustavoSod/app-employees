import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface EmployeeProps {
  id: number;
  name: string;
  image: string;
  phone: string;
  admission_date: string;
  job: string;
}

export default function Employee({ item }: { item: EmployeeProps }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.employeeContainer}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: item.image }} style={styles.employeeImage} />
        <Text style={styles.employeeName}>{item.name}</Text>
        <TouchableOpacity onPress={toggleDetails} style={styles.arrowButton}>
          <Text style={styles.arrow}>{isVisible ? 'v' : '>'}</Text>
        </TouchableOpacity>
      </View>

      {isVisible && (
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text style={styles.detailsType}>Telefone:</Text>
            <Text>{item.phone}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsType}>Data de Admissão:</Text>
            <Text>
              {new Date(item.admission_date).toLocaleString('pt-BR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsType}>Cargo:</Text>
            <Text>{item.job}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  employeeContainer: {
    paddingStart: 15,
    borderColor: '#A8A8A8',
    borderWidth: 0.5,
    borderTopWidth: 0,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  employeeImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 20,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: '300',
    flex: 1,
  },
  arrowButton: {
    padding: 5,
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#717171',
  },
  detailsContainer: {
    width: '100%',
    marginTop: 10,
  },
  details: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsType: {
    fontWeight: '600',
    fontSize: 15,
  },
});
