import React, {
    useState
    , Component
} from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import {
    togglePlusMinus,
    saveExpression,
    calcResult,
    clearResult,
} from "./actions";
// import * as actions from "./actions";
// import { Expression } from "../Expression/";
// import { Result } from "../Result/";
// import { Controls } from "../Controls/";
import styles from "./styles";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxHeight: 0,
            controlsPadding: 0
        };
    }

    measureControls = e => {
        const { height } = e.nativeEvent.layout;
        const padding = height * 0.01; // 1% of height
        this.setState({ controlsPadding: padding });
    };

    measureBox = e => {
        const { height } = e.nativeEvent.layout;
        this.setState({ boxHeight: height });
    };

    render() {
        return (
            // <View style={{ backgroundColor: 'red', flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.resultArea}>
                    <Text style={styles.resultTxt}>hasil</Text>
                </View>
                <View style={styles.buttonArea}>

                    <View style={styles.buttonCol1}>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonItem}>
                                <Text style={styles.buttonTxt}>.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.buttonCol2}>
                        <TouchableOpacity style={styles.buttonItem}>
                            <Text style={styles.buttonTxt}>/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonItem}>
                            <Text style={styles.buttonTxt}>*</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonItem}>
                            <Text style={styles.buttonTxt}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonItem}>
                            <Text style={styles.buttonTxt}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonItem}>
                            <Text style={styles.buttonTxt}>=</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

// const mapStateToProps = ({ expression, result }) => ({ expression, result });

// const mapDispatchToProps = dispatch => ({
//     saveExpression: payload => dispatch(actions.saveExpression(payload)),
//     calcResult: () => dispatch(actions.calcResult()),
//     clearResult: () => dispatch(actions.clearResult()),
//     togglePlusMinus: payload => dispatch(actions.togglePlusMinus(payload))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;