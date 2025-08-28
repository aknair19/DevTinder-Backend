# DEV TINDER

Spend lot of time in planning, then writing code will be easy.

### Requirement Gathering

    - Create an account
    - login
    - update your profile
    - feed page
    - send connection request
    - see our matches
    - see the request we have sent
    - see the request we have received
    - update your profile

    ### Tech Planning
    -Backend
      - Nodejs
      - Expressjs
      - MongoDB
      - Mongoose
      - JWT
      - Bcryptjs

### LLD

- DB Design
  - User collection
    - name
    - email
    - password
    - gender
    - age
    - bio
  - Connection Request collection
    - from_user_id
    - to_user_id
    - status (pending, accepted, rejected,ignored)
- API Design
- REST API
  - POST
    - /signup
    - /login
    - /send-request
    - /review-request
  - GET
    - /profile
    - /connections
  - PUT
  - DELETE
    - /delete-account
  - PATCH
