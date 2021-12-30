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
  <li>Contact - ${req.body.contact}</li>
  <li>Description - ${req.body.description}</li>
  </ul>
  <br>
  Thanks :)
  `;
  return emailContent;
};
