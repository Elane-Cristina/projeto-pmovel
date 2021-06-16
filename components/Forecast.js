import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


export default function Forecast({ lat, lon, unit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: `http://www.7timer.info/bin/two.php?lon=${lon}&lat=${lat}&ac=0&lang=en&unit=${unit}&output=internal&tzshift=0` }}
          style={{ height: 480, width: 310 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  }
});
