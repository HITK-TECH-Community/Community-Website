# <u>Backend Documentation</u>
</br>

### Broadcasts module
The Broadcasts module is responsible for all the functions related to Broadcasts, for example : fetching particular Broadcasts from the database, creating a new Broadcasts, Updating Broadcasts, Deleting Broadcasts etc. 
Before executing every route function validation middleware gets executed which checks whether the input is in the given format or not . For this validation process a library called joi is used. 
### API description
- <code> <b> /broadcasts </b> </code> [<b>  POST</b> ]
    - Add new broadcast to the database
    - request body : 
        | Parameter   | description |
        | ----------- | ------------
        | title       | string, required |
        | content     | string, required |
        | link        | string(uri), required, unique |
        | isExpired   | boolean, required, unique     |
        | imageUrl    | string(uri), required         |
        | category    | string, required  |
  
    - ![diagram](images/addBroadcast.jpg)
    <br>
