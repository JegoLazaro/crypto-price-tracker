import { StatusBar } from "expo-status-bar";
import React, { useRef, useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SAMPLE_DATA } from "./assets/data/sampleData";
import Chart from "./components/Chart";

export default function App() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["8%","60%"], []);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetRef.current;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Markets</Text>
          <View style={styles.divider}></View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={SAMPLE_DATA}
            renderItem={({ item }) => (
              <ListItem
                coinName={item.name}
                abbrv={item.symbol}
                priceChange={item.price_change_percentage_7d_in_currency}
                currentPrice={item.current_price}
                logo={item.image}
                onPress={() => openModal(item)}
              />
            )}
          />
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <View style={styles.contentContainer}>
          {selectedCoinData ? (
            <Chart 
              currentPrice={selectedCoinData.current_price}
              logo={selectedCoinData.image}
              coinName={selectedCoinData.name}
              priceChange={
                selectedCoinData.price_change_percentage_7d_in_currency
              }
              abbrv={selectedCoinData.symbol}
              sparkline={selectedCoinData.sparkline_in_7d.price}
            />
          ) : null}
          
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
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
    height: 0.6,
    marginTop: 10,
    width: "98%",
    backgroundColor: "#a9abb1",
    justifyContent: "center",
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
