import React, { useEffect, useState } from 'react';
import {
  Aert, ActivityIndicator, StatusBar,
  SafeAreaView, StyleSheet, Text, Alert,
} from 'react-native';
import ItemList from './components/ItemList';

const _onPress = (item) => {
  Alert.alert(`Selected Index: ${item.index.toString()}`);
  //console.log(item.index)
}

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://next.json-generator.com/api/json/get/Ekl3z-teY')
      .then((response) => response.json())
      .then((json) => {
        setData(json.people);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.infobar}>Flatlist Example</Text>
      {isLoading ? <ActivityIndicator size="large" /> :
        <ItemList data={data} callback={_onPress} />}
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  infobar: {
    backgroundColor: 'black',
    color: 'white',
    paddingTop: 10,
    paddingLeft: 6,
    paddingBottom: 10,
    marginBottom: 10
  }
});
