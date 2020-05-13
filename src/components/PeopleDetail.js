import React, { Component } from 'react'
import DetailView from './DetailView'
import UpdatePerson from './UpdatePerson'
import * as actions from '../actions'
import { connect } from 'react-redux'

class PeopleDetail extends Component {

    render() {
        if(this.props.toUpdate) return <UpdatePerson />
        return <DetailView />
    }
}

/**
 * Return a list of people from our redux state
 * 
 * @param {*} state 
 */
const mapStateToProps = state => {
    return { 
        toUpdate: state.toUpdate
    }
}

export default connect(mapStateToProps, actions)(PeopleDetail)