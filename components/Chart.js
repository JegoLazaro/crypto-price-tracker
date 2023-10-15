import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
// import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";

export const { width: SIZE } = Dimensions.get("window");

const Chart = ({ currentPrice, logo, coinName, abbrv, priceChange, sparkline }) => {
  const priceChangeColor = priceChange > 0 ? "#34c759" : "#ff3b30";

  return (
    <LineChart.Provider data={sparkline}>
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
            {/* ${currentPrice.toLocaleString("en-US", { currency: "USD" })} */}
          </Text>
          <Text style={[styles.title, { color: priceChangeColor }]}>
            {priceChange.toFixed(4)}%
          </Text>
        </View>
      </View>

      <View style={styles.lineChartWrapper}>
          <LineChart yGutter={8}>
            <LineChart.PriceText
              format={({ value }) => {
                "worklet";
                if (value === "") {
                  return `$${currentPrice.toLocaleString("en-US", { currency: "USD" })}`;
                }
                const formattedValue = `$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
                return formattedValue;
              }}
              style={styles.boldTitle}
            />
            <LineChart.Path width={2} style={styles.chartPath}/>
            <LineChart.CursorCrosshair>
              
              <LineChart.Tooltip
                textStyle={{
                  backgroundColor: "black",
                  borderRadius: 4,
                  color: "white",
                  fontSize: 18,
                  padding: 4,
                }}
              />
            </LineChart.CursorCrosshair>
            
          </LineChart>
      </View>
    </View>
    </LineChart.Provider>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 14,
  },
  titlesWrapper: {
    marginHorizontal: 20
  },
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
    position: "absolute",
    top: -27,
    marginHorizontal: 150,
    fontSize: 26,
    fontWeight: "bold",
  },
  title: {
    position: "absolute",
    top: -5,
    right: 0,
    fontSize: 20,
  },
  lineChartWrapper: {
  },
  chartPath: {}
});

export default Chart;
