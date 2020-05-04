import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
import CompanyItem from './CompanyItem'
import { Icon } from 'react-native-vector-icons/EvilIcons'

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
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'archive'} size={50} color={tintColor} />
        )
    }
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