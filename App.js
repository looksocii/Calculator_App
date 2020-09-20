import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonInput from "./components/buttonInput";

class App extends Component {
  state = {
    display: "",
    ansTotal: "",
  };

  ChangeNum = (num) => {
    if (num == "=") {
      const operaion = ["+", "-", "*", "/", "."];
      if (operaion.indexOf(this.state.display.slice(-1)) === -1) {
        this.setState({
          ansTotal:
            "= " +
            new Intl.NumberFormat().format(this.AnsOutput(this.state.display)),
        });
      }
    } else if (num == "DEL") {
      this.setState({
        display: this.state.display.substring(0, this.state.display.length - 1),
      });
    } else if (num == "C") {
      this.setState({
        display: "",
        ansTotal: "",
      });
    } else {
      this.setState({
        display: this.state.display + num,
      });
    }
  };

  AnsOutput = (numbers) => {
    return eval(numbers);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2.7, marginTop: 62 }}>
          <View style={{ flex: 1.35 }}>
            <Text style={styles.texts}>{this.state.display}</Text>
          </View>
          <View style={{ flex: 1.35 }}>
            <Text style={styles.texts}>{this.state.ansTotal}</Text>
          </View>
        </View>
        <View style={{ flex: 7.3 }}>
          <ButtonInput ChangeNum={this.ChangeNum} />
        </View>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
    justifyContent: "center",
  },
  texts: {
    fontSize: 50,
    color: "#ffffff",
    textAlign: "right",
    marginTop: 18,
    marginRight: 8,
  },
});
