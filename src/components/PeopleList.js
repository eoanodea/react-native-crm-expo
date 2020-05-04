import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import PeopleItem from './PeopleItem'

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
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }

    render() {
        return(
            <View styles={styles.container}>
                <FlatList
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item} />}
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
    return { people: state.people }
}

export default connect(mapStateToProps)(PeopleList)