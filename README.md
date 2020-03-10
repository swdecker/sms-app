## Instructions to build and deploy your application
### Ruby on Rails API
Rails does not require an app to be built in order to deploy it.
In order for the app to function once deployed the Plivo auth id and auth token will need to be included in the environment.
Currently the credentials are stored in /config/credentials.yml.enc and decrypted by Rails from the master.key file that is not included with the git repository.
This file would need to be included on the deployment server.

These values could also stored in the server's ENV but some minor changes to the sms_controller would be required to access them correctly.

### React Front End
The front end was done with create react app and can be built to deploy with
`npm run build`
Before doing this the app will need to know the correct URL for the deployed back end. This is set in the main App.js file as `backEndURL`.

The app is currently set up to only text myself, to prevent any accidental texts.
It is also set up to only display the incoming text history, but could easily be adjusted to query for all text history instead.

### Improvements
- Validation for the phone numbers to send texts to 
- Fully utilize the database functions of the Rails backend to make less API calls for history
- Create a Plivo program to send a call to our Rails API to automatically update database
- Rather than a button to request the text history, call on page load and refresh every x minutes.

