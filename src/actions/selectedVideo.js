export const SELECT_VIDEO = 'SELECT_VIDEO'

export const addSelectedVideo = (videoId) => {
    return {
        type: SELECT_VIDEO,
        videoId
    }
}