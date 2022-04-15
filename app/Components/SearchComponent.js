import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons";
import { normalScale, verticalScale } from "../Utils/Device/normalize";

const SearchComponent = ({ onSearchEnter }) => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.searchWrapperStyle}>
      <Icon size={18} name="search" color="white" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="white"
        style={styles.searchInputStyle}
        value={term}
        onChangeText={(newText) => {
          setTerm(newText);
        }}
        onEndEditing={() => {
          onSearchEnter(term);
        }}
      />
      <Icon
        size={18}
        name="close"
        color="white"
        style={styles.iconStyle}
        onPress={() => {
          setTerm("");
          onSearchEnter("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapperStyle: {
    backgroundColor: "#16A085",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyle: {
    marginTop: verticalScale(12),
    marginHorizontal: normalScale(8),
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 16,
    paddingVertical: verticalScale(8),
    
    color: "white",
  },
});

export default SearchComponent;