import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

class ButtonInput extends Component {
  render() {
    const { ChangeNum } = this.props;
    const numbers = {
      one: ["1", "4", "7", "."],
      two: ["2", "5", "8", "0"],
      three: ["3", "6", "9", "="],
      four: ["C", "DEL", "+", "-", "*", "/"],
    };
    return (
      <View style={styles.all}>
        <View style={styles.container}>
          {numbers.one.map((i) => (
            <TouchableOpacity
              style={styles.but}
              onPress={() => {
                ChangeNum(i);
              }}
            >
              <Text style={styles.text}>{i}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          {numbers.two.map((i) => (
            <TouchableOpacity
              style={styles.but}
              onPress={() => {
                ChangeNum(i);
              }}
            >
              <Text style={styles.text}>{i}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          {numbers.three.map((i) => (
            <TouchableOpacity
              style={styles.but}
              onPress={() => {
                ChangeNum(i);
              }}
            >
              <Text style={styles.text}>{i}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tool}>
          {numbers.four.map((i) => (
            <TouchableOpacity
              style={styles.tool}
              onPress={() => {
                ChangeNum(i);
              }}
            >
              <Text style={styles.textTool}>{i}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
export default ButtonInput;

const styles = StyleSheet.create({
  all: {
    flexDirection: "row",
    position: "absolute",
  },
  container: {
    width: 95,
    borderWidth: 1,
    borderColor: "#404040",
  },
  but: {
    width: 95,
    height: 110,
    backgroundColor: "#222222",
    borderWidth: 1,
    borderColor: "#404040",
  },
  text: {
    fontSize: 20,
    marginTop: 40,
    color: "#ffffff",
    textAlign: "center",
  },
  tool: {
    width: 90,
    height: 73.3,
    backgroundColor: "#ff9200",
    borderWidth: 1,
    borderColor: "#404040",
  },
  textTool: {
    marginTop: 28,
    color: "#222222",
    textAlign: "center",
  },
});
