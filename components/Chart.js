import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Chart = ({
  currentPrice,
  logo,
  coinName,
  abbrv,
  priceChange,
  sparkline,
}) => {
  // console.log(coinName)
  const priceChangeColor = priceChange > 0 ? "#34c759" : "#ff3b30";


  return (
    <View style={styles.chartWrapper}>
      {/* Title */}
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source={{ uri: logo }} style={styles.image} />
            <Text style={styles.subtitle}>
              {coinName} ({abbrv.toUpperCase()})
            </Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>
        <View style={styles.lowerTitles}>
          <Text style={styles.boldTitle}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.title, {color: priceChangeColor}]}>{priceChange.toFixed(4)}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16,
  },
  titlesWrapper: {},
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 4,
  },
  image: {
    marginRight: 4,
    width: 30,
    height: 30,
  },
  subtitle: {
    fontSize: 16,
    color: "#a9abb1",
  },
  lowerTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
  },
});

export default Chart;
