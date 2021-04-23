# <u>Backend Documentation</u>
</br>

### FAQ module
The FAQ module is responsible for the functions related to adding a new FAQ.
Before executing every route function validation middleware gets executed which checks whether the input is in the given format or not. Then auth middleware gets executed which checks the validity of token in authorization header.

### API description
- <code> <b> /faq </b> </code> [<b>  POST</b> ]
    - Add new FAQ to the database
    - request body : 
        | Parameter   | description |
        | ----------- | ------------
        | question    | string, required, unique |
        | answer      | string, required |
        | isActive    | boolean |
        | tags        | array of string, required      |
  
    - ![diagram](images/addFAQ.jpg)
    <br>
