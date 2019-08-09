import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddLocation } from '../actions/location'

class Map extends Component {
    componentDidMount() {
        let currentLocation = {lat: 40.711976, lng: -74.006171 } //New York Fallback
        const initMap = () => {
            const google = window.google;
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 10, center: currentLocation});
            
            var marker = new google.maps.Marker({
                position: currentLocation, 
                map: map,
                draggable: true,
                title: "Drag me!"});
                marker.addListener('mouseup', ({latLng}) => {
                    this.props.dispatch(handleAddLocation({
                        lat: latLng.lat(),
                        lng: latLng.lng()
                    }))
                })
            }

            //Moves map location to current location if accepted, else returns fallback location.
        navigator.geolocation.getCurrentPosition(({ coords }) => {
                currentLocation = {lat: coords.latitude, lng: coords.longitude}
                this.props.dispatch(handleAddLocation(currentLocation))
                initMap()
            },
            () => {
                this.props.dispatch(handleAddLocation(currentLocation))
                initMap()
            })
        }

    render() {
        return (
            <div id='map'>Map</div>
        )
    }
}

export default connect()(Map)