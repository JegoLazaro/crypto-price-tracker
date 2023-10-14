import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const ListItem = ( {coinName, logo, currentPrice, priceChange, abbrv, onPress} ) => {
    const priceChangeColor = priceChange > 0 ? "#34c759" : "#ff3b30";
  
    return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/* Left Side */}
        <View style={styles.leftWrapper}>
          <Image
            style={styles.image}
            source={{uri: logo}}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{coinName}</Text>
            <Text style={styles.subtitle}>{abbrv.toUpperCase()}</Text>
          </View>
        </View>
        {/* Right Side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD'})}</Text>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>{priceChange.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
  rightWrapper: {
    alignItems: "flex",
  },
  titleWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize:20,
  },
  subtitle: {
    color: "#a9abb1",
    marginTop: 4,
    fontSize:14,
  },
});

export default ListItem;
