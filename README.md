
<h1 align="center">Youtube Map </h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Search for youtube videos depending on where you are on the map. Created using React and Redux. Uses [Youtube's Data API](https://developers.google.com/youtube/v3/) and [Google's Maps API](https://developers.google.com/maps/documentation/javascript/tutorial).

[Demo App](https://youtube-map.netlify.com/)

## Install

```sh
npm install
```
### API Key Dependencies
```
- Changes to file "public/index.html"
1. Replace "<script  async  defer
src="https://maps.googleapis.com/maps/api/js?key=[YOUR_API_KEY]&callback=initMap">
</script>" with your Google Maps API key.

- Changes to file "src/actions/location.js"
- 1. Replace "const API_KEY = '[YOUR_API_KEY]'" with your Youtube Data API key.
```

## Usage

```sh
npm run start
```

## Author

👤 **Gilberto Gaspar**

* Github: [@GilbertoGaspar](https://github.com/GilbertoGaspar)

