import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import CompanyItem from './CompanyItem'
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

class CompanyList extends Component {

    render() {
        return(
            <View styles={styles.container}>
                <FlatList
                    data={this.props.Company}
                    renderItem={({item}) => <CompanyItem Company={item} />}
                />
            </View>
        )
    }
}

export default connect(null, actions)(CompanyList)