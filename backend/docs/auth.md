# <u>Backend Documentation</u>
</br>

### Auth module
This module is responsible for all the activities related to authentication.

### API description
- <code> <b> /auth/login </b> </code>
    - method : <b>POST</b>
    - response body : 
        | Parameter   | 
        | ----------- | 
        | email       |
        | password    |

    - ![diagram](images/loginroute.jpg)
    <br>
##### The auth middleware uses JWT method for verification.
<br>

![diagram](images/jwt.jpg)
<br>
The user submits the login data which is collected by the server and using these data.
it generates a JSON Web Token which takes { payload , SECRET_KEY , expiresIn parameters . This token is then passed to the client side where it is used every time the client makes any kind of request to the server . The server validates the token , if it matches then the client gets the response otherwise error is thrown.

###### ERROR RESPONSE 
- If header is invalid or missing:
  - Staus Code: <code>401</code>

  - Content: Missing or invalid authentication header

- If token is not verified :
  - Status Code: <code>401</code>
  - Content: JWT authentication failed

  ### Custom Error class
  For throwing errors we have made our own custom <b>ErrorHandler</b> class which inherits the properties from inbuilt <b>Error</b> class 
 <br>
  ![diagram](images/error.png)

- <b>errorType</b> - describes the type of error whether - it is internal server error , database error etc.
- <b>statusCode</b> - used for assigning the status code for the error eg:- 400,401,500 etc
- <b>message</b> - used for sending the custom error messages.
- <b>User</b> - the current user logged in
- <b>errStack</b> -  describes the point in the code at which the Error was instantiated.




