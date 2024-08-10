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

module.exports.resetPasswordMailTemplate = (data) => {
  const emailContent = `
    <h2>Hello, ${data.adminName}</h2>
    Click below link to reset your password<br>
    <a href=${data.url} target="_blank">Reset password link</a>
    <br>
    <br>
    Please ignore this mail If you not request the service
  `;
  return emailContent;
};

module.exports.welcomeSubscriberMailTemplate=()=>{
  const emailContent=`
    <h2>Hello There, 👋</h2><br/>
    Welcome to HITK Tech Community! 💐
    <br/><br/>
    Thanks for subscribing to our newsletter and joining our community.We're so happy to have you.🤩 
    <br/><br/>
    Bye for now!
    <br/>
    The HITK Tech Community Team
  `
  return emailContent
}

module.exports.broadcastPublishMailTemplate=(data)=>{
  const emailContent=`
    <h2>Hello there</h2>
    <h3>${data?.title}</h3>
    ${data?.content}
    <a href="${data?.link}" target="_blank">Click here</a>
    <br/>
    For more resource <a href="https://hitk-tech-community.netlify.app/broadcasts" target="_blank">See all broadcasts</a>
    <br/>
    <br/>
    Best regards<br/>
    <span style="font-weight:bold;">The HITK Tech Community</span>

  `;

  return emailContent;
}