import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
// import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";

export const { width: SIZE } = Dimensions.get("window");

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
  const data = [
    {
      timestamp: 1625261034,
      value: 2111.0690565535333,
    },
    {
      timestamp: 1625264634,
      value: 2103.2157660083094,
    },
    {
      timestamp: 1625268234,
      value: 2101.439907140796,
    },
    {
      timestamp: 1625271834,
      value: 2096.1108737260056,
    },
    {
      timestamp: 1625275434,
      value: 2117.0580894765258,
    },
    {
      timestamp: 1625279034,
      value: 2147.198549967824,
    },
    {
      timestamp: 1625282634,
      value: 2157.880584866453,
    },
    {
      timestamp: 1625286234,
      value: 2143.0406734474163,
    },
    {
      timestamp: 1625289834,
      value: 2156.585317174574,
    },
    {
      timestamp: 1625293434,
      value: 2146.5667786388008,
    },
    {
      timestamp: 1625297034,
      value: 2128.9966660808464,
    },
    {
      timestamp: 1625300634,
      value: 2144.8246185316075,
    },
    {
      timestamp: 1625304234,
      value: 2154.5155153219903,
    },
    {
      timestamp: 1625307834,
      value: 2148.700609656582,
    },
    {
      timestamp: 1625311434,
      value: 2205.508154935314,
    },
    {
      timestamp: 1625315034,
      value: 2199.3093598004393,
    },
    {
      timestamp: 1625318634,
      value: 2223.107884607486,
    },
    {
      timestamp: 1625322234,
      value: 2225.674548870885,
    },
    {
      timestamp: 1625325834,
      value: 2209.40228941738,
    },
    {
      timestamp: 1625329434,
      value: 2217.108207328355,
    },
  ];

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
