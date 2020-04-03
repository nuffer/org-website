# COVID Self report

#### Local development environment

The frontend uses vue-cli. Please refer to the [official documentation](https://cli.vuejs.org/) for setup instructions.

### Setup

Please be sure to use 'yarn' instead of 'npm' as package manager.

  1. Clone this repository
  2. Create a `.env` file based on the `.env.example` file and fill it with your configuration. See below to learn more about the configuration.
  4. Run `yarn serve` to test locally and `yarn build` to build application

#### Configuration

1. Choose you location selector (default: postal-code) (only postal code available for now)
1. Setup the data source and geocoding data URLs
2. Set the map default position and zoom level
3. Set the recaptcha key (not the secret) with the value from the reCAPTCHA console.
4. List the languages you need
5. Set the github repository of your fork for the issues reporting
6. Set the social links for the desired platforms
7. Configure the URL for the backend endpoint to your backend instance.

## Develop

If you want to develop on the front-end, you can set-up the configuration with existing data sources from an already running instance.

For example, to point to the Swiss data source, put this in your .env file:
```
VUE_APP_VISU_DATA_SOURCE_URL=https://raw.githubusercontent.com/ch-covid-19/datasets/master
VUE_APP_VISU_GEOCODE_URL=https://raw.githubusercontent.com/ch-covid-19/datasets/master/geocoding.csv
VUE_APP_VISU_LAST_UPDATE_URL=https://raw.githubusercontent.com/ch-covid-19/datasets/master/last_update.txt

```

## Translations

Translations are done with the online [POEditor](https://poeditor.com/projects/view?id=327349) service.

The process for translators is the following :

- New keys are added in the frontend by the developers
- New keys are imported in POEditor (done automatically, but with manual trigger, responsibility to be defined)
- Translators are informed of the new keys by notifications
- Translators translates the new keys in POEditor
- Translations are exported in the frontend (done automatically, but with manual trigger, responsibility to be defined)
- The next release includes the new translations

## Contribute

Contributions are welcome through merge requests.

This section will be updated soon...
