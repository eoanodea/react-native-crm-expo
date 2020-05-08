import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import PeopleItem from './PeopleItem'
import PeopleDetail from './PeopleDetail'
import { loadInitialContacts } from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20
    }
})

class PeopleList extends Component {

    componentDidMount() {
        this.props.loadInitialContacts()
    }

    render() {
        if(this.props.detailView) return <PeopleDetail person={this.props.people} />

        return(
            <View styles={styles.container}>
                <FlatList
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

/**
 * Return a list of people from our redux state
 * 
 * @param {*} state 
 */
const mapStateToProps = state => {
    return { 
        people: state.people,
        detailView: state.detailView
    }
}

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList)