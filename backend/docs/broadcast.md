# <u>Backend Documentation</u>
</br>

### Broadcasts module
The Broadcasts module is responsible for all the functions related to Broadcasts, for example : fetching particular Broadcasts from the database, creating a new Broadcasts, Updating Broadcasts, Deleting Broadcasts etc. 
Before executing every route function validation middleware gets executed which checks whether the input is in the given format or not also for all the routes except get route, auth middleware gets executed which checks the validity of token in authorization header.

### API description
- <code> <b> /broadcast </b> </code> [<b>  POST</b> ]
    - Add new broadcast to the database
    - request body : 
        | Parameter   | description |
        | ----------- | ------------
        | title       | string, required |
        | content     | string, required |
        | link        | string(uri), required |
        | isExpired   | boolean, required     |
        | imageUrl    | array of string(uri), required |
        | category    | array of string, required      |
  
    - ![diagram](images/addBroadcast.jpg)
    <br>

- <code> <b> /broadcast/:id </b> </code> [<b>  DELETE</b> ]
    - Delete broadcast from the database
    <br>

- <code> <b> /broadcast?page= &limit=  </b> </code> [<b>  GET</b> ]
    - Get Array of broadcast from the database with limit
    - query params : 
        | Parameter   | description |
        | ----------- | ------------
        | page        | integer, required |
        | limit       | integer, required |
    - This is a public Route (No Auth Required).
    <br>