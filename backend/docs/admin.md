# <u>Backend Documentation</u>
</br>

### Admin module
The Admin module is responsible for all the functions related to admin , for example : fetching particular admin data from the database , creating a new account , changing password etc. 
Before executing every route function validation middleware gets executed which checks whether the input is in the given format or not . For this validation process a library called joi is used. 
### API description
- <code> <b> /admin </b> </code>
    - GET the list of all admins
    - method : <b>GET</b>
    - response body : 
        | Parameter   | 
        | ----------- | 
        | firstName   |
        | lastName    |
        | username    |
        | email       |
        | contact     |
        | isSuperAdmin|   
  
    - ![diagram](images/basic.jpg)
    <br>

- <code> <b> /admin </b> </code>
    - For creating admin account
    - method : <b>POST</b>
    - request body : 
        | Parameter   | 
        | ----------- | 
        | firstName   |
        | lastName    |
        | username    |
        | email       |
        | contact     |   

    - ![diagram](images/postsuperadmin.jpg)
<br>

- <code> <b> /admin/password </b> </code>
    - To change the existing user's password
    - method : <b>PUT</b>
    - request body : 
        | Parameter   | 
        | ----------- | 
        | old password|   
        | new password|
           
        
    - ![diagram](images/passwordchange.jpg)