// This function will be used to generate a template which will be utilized in all email types
// module.exports.generateHtml(data){};

module.exports.getMailTemplate = (type) => {
  const templates = {
    'INVITE-ADMIN': {
      // html:"",
      subject: '[INVITATION] Invited to become an admin',
      text:
        'Hi <%= name %> \n We would love for you to join us at HITK Tech Community as an admin.\n\tHITK Tech Community is a platform built by the students and for the students with the main intent of increasing awareness towards plethora of opportunities and internships in tech all around/over the year. This will not only give practical work experience/exposure to students, but will also help everyone to know and grab their required opportunities in time!\nClick on <%= link %> for further action',
    },
  };
  return templates[type];
};

module.exports.JoinUsMailTemplate = (adminName, req) => {
  const emailContent = `
  <h4>Hi ${adminName}, </h4> There is new Join Us Request at Community Website with following details : <br><br>
  <ul>
  <li>Name - ${req.body.name}</li>
  <li>Email - ${req.body.email}</li>
  <li>Linkdin - <a href=${req.body.linkdin}>Linkdin</a></li>
  <li>College - ${req.body.college}</li>
  <li>Department - ${req.body.department}</li>
  <li>Contact - ${req.body.contact}</li>
  <li>Description - ${req.body.description}</li>
  <li>Interested Domain - ${req.body.interestedDomain.join(', ')}</li>
  </ul>
  <br>
  Please take the required actions!
  `;
  return emailContent;
};

module.exports.JoinUsCronJobMailTemplate = (adminName) => {
  const emailContent = `
  <h4>Hi ${adminName},<br>
  Join Us Data has been removed !
  <br>
  Thanks
  `;
  return emailContent;
};

module.exports.ContactUsMailTemplate = (adminName, req) => {
  const emailContent = `
  <h4>Hi ${adminName}, </h4> There is new Contact Request at Community Website with following details : <br><br>
  <ul>
  <li>Name - ${req.body.name}</li>
  <li>Email - ${req.body.email}</li>
  <li>Subject - ${req.body.subject}</li>
  <li>Message - ${req.body.message}</li>
  </ul>
  <br>
  Please take the required actions!
  `;
  return emailContent;
};

module.exports.ResourceAddedInformingMailTemplate = (adminName, req) => {
  const emailContent = `
  <h4>Hi ${adminName}, </h4> There is new Resource added at Community Website with following details : <br><br>
  <ul>
  <li>Name - ${req.body.name}</li>
  <li>Email - ${req.body.email}</li>
  <li>Resource URL - ${req.body.url}</li>
  <li>Description - ${req.body.description}</li>
  <li>Trust level - ${req.body.trustLevel}</li>
  <li>Expiry date - ${req.body.expiryDate}</li>
  <li>Additional Information - ${req.body.additionalInfo}</li>
  </ul>
  <br>
  Please take the required actions!
  `;
  return emailContent;
};

module.exports.ContactUsCronJobMailTemplate = (adminName) => {
  const emailContent = `
  <h4>Hi ${adminName},<br>
  The Contact Us Form data of last 2 month has been removed!
  <br>
  Thanks
  `;
  return emailContent;
};

module.exports.ResourceDeletedMailTemplate = (adminName) => {
  const emailContent = `
  <h2>Hi ${adminName},<b2>
  The resource data of last 2 month has been removed
  <br>
  Thanks
  `;
  return emailContent;
};

module.exports.NewSubscriberMailTemplate = (SubscriberName) => {
  const emailContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to HITK Tech Community</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f6f6f6;
          }
          .container {
              width: 100%;
              padding: 20px;
              background-color: #ffffff;
              margin: 0 auto;
              max-width: 600px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              background-color: #007bff;
              color: #ffffff;
              padding: 10px 0;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
          }
          .content {
              padding: 20px;
          }
          .content h2 {
              font-size: 20px;
              color: #333333;
          }
          .content p {
              font-size: 16px;
              color: #666666;
              line-height: 1.6;
          }
          .footer {
              text-align: center;
              padding: 10px;
              background-color: #f1f1f1;
              font-size: 14px;
              color: #666666;
          }
          .footer a {
              color: #007bff;
              text-decoration: none;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Welcome to HITK Tech Community!</h1>
          </div>
          <div class="content">
              <h2>Hello ${SubscriberName},</h2>
              <p>Thank you for joining the HITK Tech Community! We are excited to have you on board.</p>
              <p>HITK Tech Community is a platform built by the students and for the students with the main intent of increasing awareness towards the plethora of opportunities and internships in tech all around the year. This will not only give practical work experience and exposure to students but will also help everyone to know and grab their required opportunities in time!</p>
              <p>In HITK Tech Community, we will have mentors from almost all domains, and members of the community can just put up their queries. Any member having the answer or insight to get the solution will respond to it. Along with addressing the students' queries, all mentors will be sharing valuable event opportunities like:</p>
              <ul>
                  <li>Workshops and webinars on the latest tech trends</li>
                  <li>Internship and job openings</li>
                  <li>Hackathons and coding competitions</li>
                  <li>Tech talks and networking events</li>
              </ul>
              <p>Welcome once again to the HITK Tech Community. We're glad to have you with us!</p>
              <p>Best regards,<br>The HITK Tech Team</p>
          </div>
          <div class="footer">
              <p>&copy; 2024 HITK Tech Community. All rights reserved.</p>
              <p><a href="[Unsubscribe Link]">Unsubscribe</a> | <a href="[Privacy Policy Link]">Privacy Policy</a></p>
          </div>
      </div>
  </body>
</html>
  `;
  return emailContent;
}

module.exports.NewBroadCastMailTemplate = (subscriber) => {
  const emailContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Broadcast from HITK Tech Community</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f6f6f6;
          }
          .container {
              width: 100%;
              padding: 20px;
              background-color: #ffffff;
              margin: 0 auto;
              max-width: 600px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              background-color: #007bff;
              color: #ffffff;
              padding: 10px 0;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
          }
          .content {
              padding: 20px;
          }
          .content h2 {
              font-size: 20px;
              color: #333333;
          }
          .content p {
              font-size: 16px;
              color: #666666;
              line-height: 1.6;
          }
          .tags {
              margin-top: 10px;
              padding: 10px 0;
          }
          .tag {
              display: inline-block;
              background-color: #007bff;
              color: #ffffff;
              padding: 5px 10px;
              margin: 5px 0;
              border-radius: 3px;
              font-size: 14px;
          }
          .footer {
              text-align: center;
              padding: 10px;
              background-color: #f1f1f1;
              font-size: 14px;
              color: #666666;
          }
          .footer a {
              color: #007bff;
              text-decoration: none;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>New Broadcast from HITK Tech Community</h1>
          </div>
          <div class="content">
              <h2>${subscriber.title}</h2>
              <p>${subscriber.content}</p>
              <p><strong>Expires On:</strong> ${subscriber.expiresOn}</p>
              <p><a href="${subscriber.link}" target="_blank">link</a></p>
              <div class="tags">
                  <strong>Tags:</strong>
                  <p>
                      ${subscriber.tags}
                  </p>
              </div>
          </div>
          <div class="footer">
              <p>&copy; 2024 HITK Tech Community. All rights reserved.</p>
              <p><a href="[Unsubscribe Link]">Unsubscribe</a> | <a href="[Privacy Policy Link]">Privacy Policy</a></p>
          </div>
      </div>
  </body>
</html>
  `;
  return emailContent;
}