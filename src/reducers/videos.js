import { ADD_LOCATION } from '../actions/location'

export default function videos(state = [], action) {
    switch (action.type) {
        case ADD_LOCATION:  
            const { videos } = action
            return videos
        default: 
            return state
    }
}