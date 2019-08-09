import { SELECT_VIDEO } from '../actions/selectedVideo'

export default function selectedVideo(state = '', action) {
    switch (action.type) {
        case SELECT_VIDEO:  
            const { videoId } = action
            return videoId
        default: 
            return state
    }
}