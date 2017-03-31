# Halp
A platform for elliciting help in the physical world, inspired by Stack Exchange

## Setup and Development
1. Install Meteor `curl https://install.meteor.com/ | sh`.
2. Clone the repository and run `npm install` to get the necessary depenencies.
3. Get at [Google Maps API key ](https://developers.google.com/maps/documentation/javascript/get-api-key) and create a settings.json file as follows:

```
{
    "public": {
        "gmapsapi": "YOUR API KEY"
    },
    "private": {}
}
```

4. Start the server using `npm start` and navigate to `localhost:3000`.
