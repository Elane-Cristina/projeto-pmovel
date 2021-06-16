import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Forecast from './components/Forecast';

export default function App() {
  const [lon, setLon] = React.useState();
  const [lat, setLat] = React.useState();
  const [unit, setUnit] = React.useState();
  const [showImage, setShowImage] = React.useState(false);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>7Timer!</Text>
        <Text style={styles.subtitle}>API para previsão do tempo</Text>
        <View style={styles.form}>
          <TextInput 
            placeholder="Longitude. Ex.: 113.17"
            style={styles.input}
            keyboardType="numbers-and-punctuation"
            onChangeText={setLon}
          />
          <TextInput 
            placeholder="Latitude. Ex.: 23.09"
            style={styles.input}
            keyboardType="numbers-and-punctuation"
            onChangeText={setLat}
          />
          <TextInput 
            placeholder="Unidade. Ex.: metric"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
            onChangeText={setUnit}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setShowImage(true)}
          >
            <Text style={styles.buttonText}>Chamar API</Text>
          </TouchableOpacity>
        </View>
        {
          showImage && (
            <Forecast 
              lat={lat}
              lon={lon}
              unit={unit}
            />
          )
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#ecf0f1'
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 3,
    marginBottom: 15
  },
  form: {
    width: '100%'
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#842bd7',
    marginBottom: 15,
    width: '100%'
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#842bd7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
