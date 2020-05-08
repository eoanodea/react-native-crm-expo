import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'react-native-vector-icons/EvilIcons'
import { Button } from 'react-native-material-ui';
import { Textfield, MKColor } from 'react-native-material-kit'
import * as actions from '../actions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 50,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingRight: 20,
        justifyContent: 'space-around'
    },
    fieldStyles: {
        width: 300,
        height: 40,
        color: MKColor.Orange
    },
    addButton: {
        margin: 20
    }
})

// const AddButton = MKButton.coloredButton()
//     .withText('Add')
//     .build()

class AddPerson extends Component {
    
    onAddPress() {
        const {firstName, lastName, phone, email, company, project, notes } = this.props
        
        this.props.createNewContact({ firstName, lastName, phone, email, company, project, notes})

        this.props.navigation.navigate('People')
    }

    render() {
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text>Add a new Contact</Text>
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'First Name'}
                        tintColor={MKColor.Teal}
                        value={this.props.firstName}
                        onChangeText={value => this.props.formUpdate({ prop: 'firstName', value})}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Last Name'}
                        tintColor={MKColor.Teal}
                        value={this.props.lastName}
                        onChangeText={value => this.props.formUpdate({ prop: 'lastName', value})}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Phone Number'}
                        tintColor={MKColor.Teal}
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({ prop: 'phone', value})}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Email'}
                        tintColor={MKColor.Teal}
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({ prop: 'email', value})}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Company'}
                        tintColor={MKColor.Teal}
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({ prop: 'company', value})}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Project'}
                        tintColor={MKColor.Teal}
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({ prop: 'project', value})}
                    />
                    <Textfield
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Notes'}
                        tintColor={MKColor.Teal}
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({ prop: 'notes', value})}
                    />
                    <View style={styles.addButton}>
                        <Button
                            text='hello'
                            raised
                            primary
                            onPress={this.onAddPress.bind(this)}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const {firstName, lastName, phone, email, company, project, notes} = state
    return {firstName, lastName, phone, email, company, project, notes}
}

export default connect(mapStateToProps, actions)(AddPerson)