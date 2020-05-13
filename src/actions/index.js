export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId
    }
}

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED'
    }
}

export const formUpdate = ({prop, value}) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value }
    }
}

export const createNewContact = ({ firstName, lastName, phone, email, company, project, notes }) => {
    return (dispatch) => {
        fetch('http://192.168.0.164:3000/contact', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, phone, email, company, project, notes
            })
        })
        .then(response => console.log('response!', response))
        .then(() => {
            dispatch({ type: 'NEW_CONTACT' })
        })
        .catch(err => console.log('ERROR add contact!', error))
    }
}

export const loadInitialContacts = () => {
    return (dispatch) => {
        fetch('http://192.168.0.164:3000/contact', {
            method: 'GET',
        })
        .then(response => response.json())
        .then((data) => {
            dispatch({ type: 'INITIAL_FETCH', payload: data })
        })
        .catch(err => console.log('Error fetch contacts', err))
    }
}

export const updateContact = (person) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: person
    }
}

export const saveContact = ({ firstName, lastName, phone, email, company, project, notes, _id }) => {
    return (dispatch) => {
        fetch('http://192.168.0.164:3000/contact/' + _id, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, phone, email, company, project, notes
            })
        })
        .then(response => console.log('update!', response.json()))
        .then(() => {
            dispatch({ type: 'SAVE_CONTACT'})
        })
        .catch(err => console.log('Error delete contact', err))
    }
}

export const deleteContact = (id) => {
    return (dispatch) => {
        fetch('http://192.168.0.164:3000/contact/' + id, {
            method: 'DELETE',
        })
        .then(() => {
            dispatch({ type: 'DELETE_PERSON' })
        })
        .catch(err => console.log('Error delete contact', err))
    }
}