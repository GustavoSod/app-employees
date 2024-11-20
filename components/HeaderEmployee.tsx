import { StyleSheet, Text, View } from 'react-native';

export const HeaderEmployee = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Foto</Text>
    <Text style={[styles.headerText, { paddingLeft: 20 }]}>Nome</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 17,
    borderWidth: 0.5, 
    borderTopWidth: 1,
    borderColor: "#A8A8A8",
    backgroundColor: '#EDEFFB',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 10
  },
});
