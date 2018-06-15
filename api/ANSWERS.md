<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware is interface that provides access to server resources.
Session time alloted to use a resource, which you have to show to use 
bcrypt is password hashing algorithm
JWT Json web token is a token that grants us access to server resource as long as it is valid. 

2.  What does bcrypt do in order to prevent attacks?
It hashes the password before saving it, so that the plain password will not be accessible.

3.  What are the three parts of the JSON Web Token?
secret/signature, payload and header
