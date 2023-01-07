# Getting Started with Weather App
The application is designed to show the weather by the client's location. Current weather and brief information for four days.

#### The following services are used for work:

* [nominatim](https://nominatim.openstreetmap.org) - the service allows you to determine the city by coordinates
* [unsplash](https://unsplash.com) - service for receiving images on request
* [open-meteo](https://open-meteo.com) - service for getting weather information

Additionally, the application works with web worker to determine offline mode and caching. Also allows you to install the application as standalone

The app supports Russian and English versions. The language is determined depending on the browser settings

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

