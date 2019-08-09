import { ADD_LOCATION } from '../actions/location'

const intialState = {
    lat: 0,
    lng: 0
}

export default function location(state = intialState, action) {
    switch (action.type) {
        case ADD_LOCATION:  
            const { location } = action
            return {
                ...state,
                ...location
            }
        default: 
            return state
    }
}