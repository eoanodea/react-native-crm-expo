export const selectPerson  = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId
    }
}

export const nonPerson  = () => {
    return {
        type: 'NONE_SELECTED'
    }
}