## Restaurant Finder App With Context API

## https://restaurant-finder-123.netlify.app/

A React app which provides a restaurant list according to different parameters.

If you select a restaurant from the list you'll be redirected to a new page with the selected restaurant info.

It automatically displays different types of restaurant list if location permissions are granted.

## Enabling CORS

This application requires Cross-Origin Resource Sharing (CORS) to be enabled in order to function properly. If you're running into issues related to CORS, such as getting errors mentioning that the origin isn't allowed by Access-Control-Allow-Origin, here's what you can do:

1. Go to [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo).
2. Click on the "Request temporary access to the demo server" button.

This should enable CORS for your session and allow the application to work as expected.

## Search parameters:

- Type: cousine or restaurant
- Location: search area input with Google address autocomplete feature
- Sort by: sort search results

## Restaurant info page:

- Restaurant details, such as address, stars,
- Google map widget
- Reviews with link

## API

- Yelp API: [Documentation](https://www.yelp.com/developers/documentation/v3)
- Google API: [Documentation](https://developers.google.com/maps/documentation/javascript/places-autocomplete)

## Front-end

- React with Context API and Hooks

## Testing

- Jest for unit test
- Enzyme for components

## ToDo

- Minor style improvement needed
