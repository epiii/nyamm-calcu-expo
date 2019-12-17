import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        alignItems: 'stretch',
        justifyContent: 'center',
        // alignContent: 'stretch',
    },

    // result
    resultArea: {
        flex: 2 / 4,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // backgroundColor: 'green'
    },
    resultTxt: {
        fontSize: .2 * width,
    },

    // button
    buttonArea: {
        flex: 2 / 4,
        // backgroundColor: 'red',
        flexDirection: 'row',
    },
    buttonCol1: {
        alignItems: 'stretch',
        flex: 3 / 4,
    },
    buttonCol2: {
        alignItems: 'stretch',
        flex: 1 / 4,
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'pink',
    },
    buttonItem: {
        alignItems: 'stretch',
        flex: 1,
        margin: .02 * width,
        backgroundColor: '#DDDDDD',
        justifyContent: 'center',
        borderRadius: 9
    },
    buttonTxt: {
        fontSize: .07 * width,
        textAlign: 'center'
    },

});

export default styles;