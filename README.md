# Harbor Metadata API

### GET `/barges`

> Return a list of available Barges


### GET `/barges/_all`

> Return a list of available and unavailable Barges


### GET `/barge/:name`

> Return all the data on particular Barge


### POST `/barge/:name`

> Create a new Barge metadata object

#### Headers

```
x-username
- type:        String
- required:    true
- description: The username of authenticated user
- requirement: Must be a valid turner ldap username

x-token
- type:        String
- required:    true
- description: The token of authenticated user
- requirement: Must be a valid token for username authenticated against
               http://auth.services.dmtio.net
```


### PUT `/barge/:name`

> Update an existing Barge metadata object

#### Headers

```
x-username
- type:        String
- required:    true
- description: The username of authenticated user
- requirement: Must be a valid turner ldap username

x-token
- type:        String
- required:    true
- description: The token of authenticated user
- requirement: Must be a valid token for username authenticated against
               http://auth.services.dmtio.net
```


### DELETE `/barge/:name`

> Delete an existing Barge metadata object

#### Headers

```
x-username
- type:        String
- required:    true
- description: The username of authenticated user
- requirement: Must be a valid turner ldap username

x-token
- type:        String
- required:    true
- description: The token of authenticated user
- requirement: Must be a valid token for username authenticated against
               http://auth.services.dmtio.net
```
