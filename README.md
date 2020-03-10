## Instructions to build and deploy your application
### Ruby on Rails API
Rails does not require an app to be built in order to deploy it.
In order for the app to function once deployed the Plivo auth id and auth token will need to be included in the environment.
Currently the credentials are stored in `/config/credentials.yml.enc` and decrypted by Rails from the `master.key` file that is not included with the git repository.
The `master.key` file would need to be included on the deployment server.

The auth id and token values could also stored in the server's ENV but some minor changes to the sms_controller would be required to access them correctly.

Currently the api is set up to allow calls from all domains and would need to be limited to calls from our frontend and possibly a Plivo Application. These values are set in the `/config/initializers/cors.rb` file


### React Front End
The front end was done with create react app and can be built to deploy with
`npm run build`
Before doing this the app will need to know the correct URL for the deployed back end. This is set in the main App.js file as `backEndURL`.
Once you build, a directory /build will be made and the http server will need to serve the index.html file from that directory and ensure that other paths in that directory are served correctly as well.

### Limitations
- Currently only the first page of text history is being handled. This can be handled with the :meta information from the API response but is not currently
- The app is currently set up to only text myself, to prevent any accidental texts.
- Validations for the user inputted destination phone number would be required to ensure content and length were correct 


### Improvements

- Fully utilize the database functions of the Rails backend to make less API calls for history
- Create a Plivo Application to send an api call to our Rails API to automatically update database
- Rather than a button to request the text history, call on page load and refresh every x minutes.

