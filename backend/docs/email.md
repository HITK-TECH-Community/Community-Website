# <u>Backend Documentation</u>

</br>

## Email module

This module sends emails using pre-defined templates.

There are two major components of this service.

### Components

- templates (/utility/emailTemplates.js)
- Email sender ( /helpers/emailService.js)

### Templates(/utility/emailTemplates.js)

Templates are defined as json object, and accessed using **getMailTemplate(type)** function, here type is the name of template to be used.

Ejs is responsible for templating , so **<%= variable-name %>** is used for placeholders. Visit [docs](https://ejs.co/#docs) for more.

### Email Sender( /helpers/emailService.js)

For sending emails use the **sendEmail(email,data,type** function.

- email - recipient's email
- data - json object with required fields as per the template
- type - name of the email template to be used

#### On success(status code -200)

```yaml
{ 'message': 'Email successfully sent' }
```

#### On failure(status code -500)

```yaml
{
  'errorType': 'Unexpected Error',
  'statusCode': '500',
  'message': 'The server encountered an unexpected condition which prevented it from fulfilling the request.',
  'user': 'admin@gmail.com',
  'errStack': '',
}
```

#### Environment setup

in the .env file set the following with proper values

```yaml
EMAIL_USER=EMAIL_HERE
EMAIL_PASS=PASSWORD_HERE
EMAIL_HOST=HOST_PROTOCOL (for gmail - smtp.gmail.com)
```

**Note** : If you are using gmail make sure to allow less secure apps. Read [docs](https://nodemailer.com/usage/using-gmail/) for more info.

### API

- <code> <b> /admin/inviteAdmin </b> </code> [<b>POST</b> ]

  - Send invitation mail using **INVITE-ADMIN** template
  - request body :
    | Parameter | description |
    | ----------- | ------------
    | email | string, required |
    | data | object, required |

    data object :
    | Parameter | description |
    | ----------- | -------------
    | name | string, required |
    | link | string, required |

  - response:

    status code - 200
    message - "Email succesfully sent"
