import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'react-native-vector-icons/EvilIcons'
import * as actions from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20
    }
})

class AddPerson extends Component {

    render() {
        return(
            <View styles={styles.container}>
                <Text>Add Person Screen</Text>
            </View>
        )
    }
}

export default connect(null, actions)(AddPerson)