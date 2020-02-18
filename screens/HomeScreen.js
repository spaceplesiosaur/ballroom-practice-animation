import React, { Component } from "react";
import Numbers from "../components/Numbers"
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";

export default class Infinite extends Component {
  state = {
    pulseValue1: new Animated.Value(0),
    pulseValue2: new Animated.Value(0),
    pulseValue3: new Animated.Value(0),
    pulseValue4: new Animated.Value(0),
    pulseValue5: new Animated.Value(0),
    pulseValue6: new Animated.Value(0),
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
    counter6: 0,

  };


  _start = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.pulseValue1, {
          toValue: 1,
          duration: 439.61519,
          // Infinite: true
        }),
        Animated.timing(this.state.pulseValue2, {
          toValue: 1,
          duration: 439.61519,
          // Infinite: true
        }),
        Animated.timing(this.state.pulseValue3, {
          toValue: 1,
          duration: 439.61519,
          // Infinite: true
        }),
        Animated.timing(this.state.pulseValue4, {
          toValue: 1,
          duration: 439.61519,
          // Infinite: true
        }),
        Animated.timing(this.state.pulseValue5, {
          toValue: 1,
          duration: 439.61519,
          // Infinite: true
        }),
        Animated.timing(this.state.pulseValue6, {
          toValue: 1,
          duration: 439.61519,
          // Infinite: true
        }),
      ]), {iterations: -1, useNativeDriver: true}).start();
  };

  countUp1 = () => {
    this.setState({counter1: this.state.counter1 + 1})
  }

  countUp2 = () => {
    this.setState({counter2: this.state.counter2 + 1})
  }

  countUp3 = () => {
    this.setState({counter3: this.state.counter3 + 1})
  }

  countUp4 = () => {
    this.setState({counter4: this.state.counter4 + 1})
  }

  countUp5 = () => {
    this.setState({counter5: this.state.counter5 + 1})
  }

  countUp6 = () => {
    this.setState({counter6: this.state.counter6 + 1})
  }

  render() {
    return (
      <>
        <TouchableOpacity onPress={this._start}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <View style={styles.numberView}>
          <Text style={styles.text}>{this.state.counter1.toString()}</Text>
          <Text style={styles.text}>{this.state.counter2.toString()}</Text>
          <Text style={styles.text}>{this.state.counter3.toString()}</Text>
          <Text style={styles.text}>{this.state.counter4.toString()}</Text>
          <Text style={styles.text}>{this.state.counter5.toString()}</Text>
          <Text style={styles.text}>{this.state.counter6.toString()}</Text>
        </View>
        <View style={styles.container1}>
          <TouchableOpacity onPress={this.countUp1}>
            <Animated.View
              style={{
                transform: [
                  {
                    scaleX: this.state.pulseValue1.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  },
                  {
                    scaleY: this.state.pulseValue1.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  }
                ],
                height: 10,
                width: 10,
                margin: 10,
                borderWidth: 10,
                borderColor: "#F60091",
                borderBottomColor: "#F60091",
                borderRadius: 10,
                justifyContent: "center"
              }}
            />
            <Animated.View />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.countUp2}>
            <Animated.View
              style={{
                transform: [
                  {
                    scaleX: this.state.pulseValue2.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  },
                  {
                    scaleY: this.state.pulseValue2.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  }
                ],
                height: 10,
                width: 10,
                margin: 10,
                borderWidth: 10,
                borderColor: "#F6811F",
                borderBottomColor: "#F6811F",
                borderRadius: 10,
                justifyContent: "center"
              }}
            />
            <Animated.View />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.countUp3}>
            <Animated.View
              style={{
                transform: [
                  {
                    scaleX: this.state.pulseValue3.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  },
                  {
                    scaleY: this.state.pulseValue3.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  }
                ],
                height: 10,
                width: 10,
                margin: 10,
                borderWidth: 10,
                borderColor: "#FFEB00",
                borderBottomColor: "#FFEB00",
                borderRadius: 10,
                justifyContent: "center"
              }}
            />
            <Animated.View />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.countUp4}>
            <Animated.View
              style={{
                transform: [
                  {
                    scaleX: this.state.pulseValue4.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  },
                  {
                    scaleY: this.state.pulseValue4.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  }
                ],
                height: 10,
                width: 10,
                margin: 10,
                borderWidth: 10,
                borderColor: "#71C043",
                borderBottomColor: "#71C043",
                borderRadius: 10,
                justifyContent: "center"
              }}
            />
            <Animated.View />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.countUp5}>
            <Animated.View
              style={{
                transform: [
                  {
                    scaleX: this.state.pulseValue5.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  },
                  {
                    scaleY: this.state.pulseValue5.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  }
                ],
                height: 10,
                width: 10,
                margin: 10,
                borderWidth: 10,
                borderColor: "#03ABF0",
                borderBottomColor: "#03ABF0",
                borderRadius: 10,
                justifyContent: "center"
              }}
            />
            <Animated.View />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.countUp6}>
            <Animated.View
              style={{
                transform: [
                  {
                    scaleX: this.state.pulseValue6.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  },
                  {
                    scaleY: this.state.pulseValue6.interpolate({
                      inputRange: [0, 2],
                      outputRange: [3, 0]
                    })
                  }
                ],
                height: 10,
                width: 10,
                margin: 10,
                borderWidth: 10,
                borderColor: "#6F2C8F",
                borderBottomColor: "#6F2C8F",
                borderRadius: 10,
                justifyContent: "center"
              }}
            />
            <Animated.View />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-around"
  },
  numberView: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
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
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
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
