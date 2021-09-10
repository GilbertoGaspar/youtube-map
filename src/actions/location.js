import axios from 'axios';
import tingle from 'tingle.js';
import '../../node_modules/tingle.js/dist/tingle.min.css';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { addSelectedVideo } from './selectedVideo';

export const ADD_LOCATION = 'ADD_LOCATION';

const addLocation = (location, videos) => {
  return {
    type: ADD_LOCATION,
    location,
    videos,
  };
};

export const handleAddLocation = (location) => {
  return (dispatch) => {
    const API_KEY = '[YOUR-API-KEY]';
    const { lat, lng } = location;
    dispatch(showLoading());
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&location=${lat}%2C${lng}&locationRadius=10mi&maxResults=20&order=date&type=video&key=${API_KEY}`
      )
      .then(({ data }) => {
        dispatch(addLocation(location, data.items));
        if (data.items.length !== 0) {
          dispatch(addSelectedVideo(data.items[0].id.videoId));
        }
        dispatch(hideLoading());
      })
      .catch((error) => {
        console.error(error);
        var modal = new tingle.modal({
          footer: false,
          stickyFooter: false,
          closeMethods: ['overlay', 'button', 'escape'],
          closeLabel: 'Close',
          cssClass: ['custom-class-1', 'custom-class-2'],
          beforeClose: function () {
            return true;
          },
        });
        modal.setContent(
          'Sorry, we have exceeded our daily Youtube API Quota. Please come back after 12 Midnight PST.'
        );
        modal.open();
      });
  };
};
