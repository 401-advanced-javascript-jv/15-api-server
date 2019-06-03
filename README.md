# LAB - 

## Project Name

### Author: Jesse Van Volkinburg

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
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
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* `npm test` to run tests
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
