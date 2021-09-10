import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { connect } from 'react-redux';

import { handleAddLocation } from '../actions/location';

const API_KEY = '[YOUR_API_KEY]';

class Map extends Component {
  componentDidMount() {
    let currentLocation = { lat: 40.711976, lng: -74.006171 }; //New York City Fallback

    const loader = new Loader({
      apiKey: API_KEY,
      version: 'weekly',
    });
    // let marker = null;
    loader.load().then((google) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            // If getCurrentPosition was successful, make new map, and marker with current location.
            currentLocation = { lat: coords.latitude, lng: coords.longitude };
            const map = new google.maps.Map(document.getElementById('map'), {
              center: currentLocation,
              zoom: 10,
            });

            const marker = new google.maps.Marker({
              position: currentLocation,
              map: map,
              draggable: true,
              title: 'Drag me!',
            });
            marker.addListener('mouseup', ({ latLng }) => {
              this.props.dispatch(
                handleAddLocation({
                  lat: latLng.lat(),
                  lng: latLng.lng(),
                })
              );
            });

            this.props.dispatch(handleAddLocation(currentLocation));
          },
          () => {
            // If geolocation as unsuccessful make new map with fallback location.
            const map = new google.maps.Map(document.getElementById('map'), {
              center: currentLocation,
              zoom: 10,
            });
            const marker = new google.maps.Marker({
              position: currentLocation,
              map: map,
              draggable: true,
              title: 'Drag me!',
            });
            marker.addListener('mouseup', ({ latLng }) => {
              this.props.dispatch(
                handleAddLocation({
                  lat: latLng.lat(),
                  lng: latLng.lng(),
                })
              );
            });
            this.props.dispatch(handleAddLocation(currentLocation));
          }
        );
      } else {
        // If navigator browser api doesn't exist, create new map with fallback location.
        const map = new google.maps.Map(document.getElementById('map'), {
          center: currentLocation,
          zoom: 10,
        });
        const marker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          draggable: true,
          title: 'Drag me!',
        });
        marker.addListener('mouseup', ({ latLng }) => {
          this.props.dispatch(
            handleAddLocation({
              lat: latLng.lat(),
              lng: latLng.lng(),
            })
          );
        });
        this.props.dispatch(handleAddLocation(currentLocation));
      }
    });
  }

  render() {
    return <div id='map'>Map</div>;
  }
}

export default connect()(Map);
