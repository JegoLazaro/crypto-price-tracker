import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";

import { SAMPLE_DATA } from './assets/data/sampleData';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
        <View style={styles.divider}></View>
        

        <FlatList 
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <ListItem coinName={item.name} abbrv={item.symbol} priceChange={item.price_change_percentage_7d_in_currency} currentPrice={item.current_price} logo={item.image}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  largeTitle: {
    fontSize: 34,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 60,
    paddingHorizontal: 28,
  },
  divider: {
    height: .6,
    marginTop: 10,
    width: "98%",
    backgroundColor: "#a9abb1",
    justifyContent: "center",
  }
});
