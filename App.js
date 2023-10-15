import { StatusBar } from "expo-status-bar";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import ListItem from "./components/ListItem";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SAMPLE_DATA } from "./assets/data/sampleData";
import Chart from "./components/Chart";
import { getMarketData } from "./services/cryptoService";

export default function App() {
  const [data, setData] = useState([]);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["8%", "60%"], []);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };
    fetchMarketData();
  }, []);

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
            data={data} 
            //Use "SAMPLE_DATA" for testing, use "data" for API call
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
          ) : (
            <View>
              <Text
                style={{ fontWeight: "bold", textAlign: "center", padding: 10 }}
              >
                Choose A Coin to View Chart
              </Text>
              <Text style={{ color: "grey", textAlign: "center", padding: 5 }}>
                React Native Crypto Price Tracker - Lazaro
              </Text>
              <Image source={require('../crypto-price-tracker/assets/mypic.jpg')} style={{height: "90%", width: "auto", justifyContent: "center"}} />
            </View>
          )}
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  largeTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#F8BD00"
  },
  titleWrapper: {
    marginTop: 60,
    paddingHorizontal: 28,
  },
  divider: {
    height: 0.6,
    marginTop: 10,
    width: "98%",
    backgroundColor: "##BCBBBB",
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
