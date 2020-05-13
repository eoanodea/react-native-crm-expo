import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import { getTheme } from 'react-native-material-kit'
import Icon from 'react-native-vector-icons/MaterialIcons'

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

const CompanyItem = (props) => {
    const {companies} = props

    return(
        <View style={[theme.cardStyle, styles.card]}>
            <Image source={require('../images/background.jpg')} style={[theme.cardImageStyle, styles.image]} />
            <Icon 
                name={'business'}
                size={100}
                style={styles.icon}
            />
            <Text style={[theme.cardTitleStyle, styles.title]}>{companies.company}</Text>
            {props.companies.names.map((dat) => {
                return <Text style={[theme.cardTitleStyle, styles.company]}>{dat.firstName} {dat.lastName}</Text>
            })}
            
        </View>
    )
    
}

export default CompanyItem