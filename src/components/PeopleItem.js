import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { getTheme } from 'react-native-material-kit'
import Icon from 'react-native-vector-icons/EvilIcons'
import * as actions from '../actions'

const theme = getTheme()

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24
    },
    company: {
        top: 50,
        left: 80,
        fontSize: 18
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: '#fff'
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0)'
    }
})

const PeopleItem = (props) => {
    const {people} = props

    return(
        <TouchableWithoutFeedback onPress={() => props.selectPerson(people)}>
            <View style={[theme.cardStyle, styles.card]}>
                <Image source={require('../images/background.jpg')} style={[theme.cardImageStyle, styles.image]} />
                <Icon 
                    name={'user'}
                    size={100}
                    style={styles.icon}
                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{people.firstName} {people.lastName}</Text>
                <Text style={[theme.cardTitleStyle, styles.company]}>{people.company}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
    
}

export default connect(null, actions)(PeopleItem)