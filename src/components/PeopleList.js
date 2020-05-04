import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Flatlist
} from 'react-native'
import { connect } from 'react-redux'
import PeopleItem from './PeopleItem'

const styles = StyleSheet.create({
    //
})

class PeopleList extends Component {
    render() {
        return(
            <View>

            </View>
        )
    }
}

//Return a list of people from our redux state
const mapStateToProps = state => {
    return { people: state.people }
}