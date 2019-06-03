# LAB - 15

## API Server

### Author: Jesse Van Volkinburg

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-jv/15-api-server/pull/1)
* [travis](https://www.travis-ci.com/401-advanced-javascript-jv/15-api-server)
* [back-end]() (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)

### Modules

### Setup

#### `.env` (environment variable) requirements
- `PORT` - port to run backend server on
- `MONGODB_URI` MongoDB URI
- `GOOGLE_CLIENT_ID` Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET` Google OAuth Client Secret
- `API_URL` relative location to `.../oauth` endpoint (e.g. `API_URL=http://localhost:3000/auth` when the auth endpoint
 is 
actually
`http://localhost:3000/auth/oauth`)
- `SECRET` token signing secret
- _(optional)_ `SINGLE_USE_TOKENS` Sets all (non-API-key) tokens to be single-use.
- _(optional)_ `TOKEN_LIFETIME` duration of token validity
- _(optional)_ `DEVMODE` when set, activates additional tools, such as role population.

#### Running the app
* `npm start`

#### Database setup

With the `DEVMODE` environment variable set to true, run the back-end app and perform a `GET` query to the 
`/populate-roles` route in order to create the roles in the database.

The app will not function without this step.
  
#### Tests
* `npm test` to run tests
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
