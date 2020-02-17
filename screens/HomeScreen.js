import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";

export default class Infinite extends Component {
  state = {
    rotateValue: new Animated.Value(0),
    rotateValue2: new Animated.Value(0),
    counter1: 0,
    counter2: 0,

  };

  componentDidMount() {
    this._start();
  }
  _start = () => {
    Animated.loop(
      Animated.timing(this.state.rotateValue, {
        toValue: 1,
        duration: 845.08,
        Infinite: true
      })
    ).start();
    Animated.loop(
      Animated.timing(this.state.rotateValue2, {
        toValue: 1,
        duration: 845.08,
        Infinite: true
      })
    ).start();
  };

  countUp = () => {
    this.setState({counter1: this.state.counter1 + 1})
  }

  countUp2 = () => {
    this.setState({counter2: this.state.counter2 + 1})
  }
  render() {
    return (
      <>
        <View style={styles.container1}>
        <TouchableOpacity onPress={this.countUp}>
          <Animated.View
            style={{
              transform: [
                {
                  scaleX: this.state.rotateValue.interpolate({
                    inputRange: [0, 2],
                    outputRange: [-3, 0]
                  })
                },
                {
                  scaleY: this.state.rotateValue.interpolate({
                    inputRange: [0, 2],
                    outputRange: [-3, 0]
                  })
                }
              ],
              height: 50,
              width: 50,
              margin: 5,
              borderWidth: 50,
              borderColor: "#FE7F9C",
              borderBottomColor: "#FE7F9C",
              borderRadius: 50,
              justifyContent: "center"
            }}
          />

          <Text style={styles.text}>{this.state.counter1.toString()}</Text>
          <Animated.View />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity onPress={this.countUp2}>
            <Animated.View
              style={{
                transform: [
                  {
                    scaleX: this.state.rotateValue.interpolate({
                      inputRange: [0, 0],
                      outputRange: [-3, 0]
                    })
                  },
                  {
                    scaleY: this.state.rotateValue.interpolate({
                      inputRange: [0, 2],
                      outputRange: [-3, 0]
                    })
                  }
                ],
                height: 50,
                width: 50,
                margin: 5,
                borderWidth: 50,
                borderColor: "#A1C4FD",
                borderBottomColor: "#A1C4FD",
                borderRadius: 50,
                justifyContent: "center"
              }}
            />

            <Text style={styles.text}>{this.state.counter2.toString()} </Text>
            <Animated.View />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container1: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  item: {},
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  item1: {
    backgroundColor: "red",
    padding: 20,
    width: 100,
    margin: 10
  },

  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  }
});
