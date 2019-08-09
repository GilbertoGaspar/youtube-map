import React from 'react'
import LoadingBar from 'react-redux-loading-bar'
import Map from './Map'
import YoutubeViewer from './YoutubeViewer'

function App() {
  return (
    <div className='container'>
      <LoadingBar />
      <h3 className='text-align-center'>Youtube Location Search Map</h3>
      <Map />
      <YoutubeViewer />
    </div>
  )
}

export default App
