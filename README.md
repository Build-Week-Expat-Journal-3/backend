# Back End

https://expat-journal3.herokuapp.com/

### Endpoints

#### ALL GET ENDPOINTS, AS WELL AS LOGIN/REGISTER DO NOT REQUIRE AUTHENTICATION. Any other requests must be sent with an Authorization header containing the token.

| Method | Endpoint             | Description                                                                                                                                                                                                 |
| ------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register   | Creates a user using the information sent inside the `request body`. Returns the new user and the authorization token. username and password are required fields, bio is optional and can be updated later. |
| POST   | /api/auth/login      | checks user credentials against the `request body`, and returns an authorization token. Username and password are required.                                                                                 |
| GET    | /api/users           | Returns an array of all the users contained in the database.                                                                                                                                                |
| GET    | /api/users/:id       | Returns the user object with the specified id from URL.                                                                                                                                                     |
| GET    | /api/users/:id/posts | Returns an array of all the post objects associated with the user with the specified id provided in URL.                                                                                                    |
| GET    | /api/posts/          | Returns an array of all of the posts objects in the database. Not protected.                                                                                                                                |
| GET    | /api/posts/:id       | Returns the post object with the associated post ID specified in URL.                                                                                                                                       |
| DELETE | /api/users/:id       | Removes the user with the specified id and returns a success message. `PROTECTED`                                                                                                                           |
| DELETE | /api/posts/:id       | Removes the post with the specified id and returns a success message. `PROTECTED`.                                                                                                                          |
| PUT    | /api/users/:id/bio   | Updates the user bio with the specified `id` using data from the `request body`. Returns the modified user object. `PROTECTED`                                                                              |
| PUT    | /api/posts/:id       | Takes a request body object and updates the post story for the post object with the specified ID.                                                                                                           |
| POST   | /api/users/:id/posts | Creates a new post using the information sent inside the request body. title and image are required. ID and timestamp are created by the database. Location and story are optional. `PROTECTED'             |

## POST LOGIN

{
username: '',
password: '',
}

BOTH REQUIRED FIELDS

## POST REGISTER

{
username: '',
password: '',
bio: '',
}

USERNAME & PASSWORD REQUIRED. bio is optional.

## PUT /api/users/:id/bio

{
bio: 'new bio goes here'
}

## PUT /api/posts/:id

{
story: 'new story goes here',
}
