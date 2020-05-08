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
        .catch(err => console.log('ERROR!', error))
    }
}