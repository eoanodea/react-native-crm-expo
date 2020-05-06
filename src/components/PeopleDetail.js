import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image
} from 'react-native'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import getTheme from 'react-native-material-kit'
import * as actions from '../actions'

const theme = getTheme();

import { connect } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20
    }
})

class PeopleDetail extends Component {


    render() {
        return(
            <View styles={styles.container}>
               <ScrollView showsVerticalScrollIndicator={false}>
                   <Image
                        source={require('../image/background.jpg')}
                        style={[theme.cardImageStyle, styles.image]}
                    />
                    <EvilIcon name={'user'} size={100} style={styles.icon} />
                    <SimpleIcon name={'close'} size={30} style={styles.closeIcon} onPress={() => this.props.noneSelected()} />
                    <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.person.firstName} {this.props.person.lastName}</Text>
                    <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.person.company}</Text>

               </ScrollView>
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
        people: state.people ,
        personSelected: state.personSelected
    }
}

export default connect(mapStateToProps)(PeopleDetail)