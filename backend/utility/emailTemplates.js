// This function will be used to generate a template which will be utilized in all email types
// module.exports.generateHtml(data){};

module.exports.getMailTemplate = (type) => {
  const templates = {
    'INVITE-ADMIN': {
      // html:"",
      subject: '[INVITATION] Invited to become an admin',
      text:
        'Hi $name$ \n We would love for you to join us at HITK Tech Community as an admin.\n\tHITK Tech Community is a platform built by the students and for the students with the main intent of increasing awareness towards plethora of opportunities and internships in tech all around/over the year. This will not only give practical work experience/exposure to students, but will also help everyone to know and grab their required opportunities in time!\nClick on $link$ for further action',
    },
  };
  return templates[type];
};

module.exports.populateTemplate = (text, data) => {
  let emailBody = text;
  const replacables = emailBody.match(/\$(.*?)\$/g);
  replacables.forEach((replacable) => {
    const placeholder = replacable.substring(1, replacable.length - 1);

    if (data[placeholder]) {
      emailBody = emailBody.replace(replacable, data[placeholder]);
    }
  });

  return emailBody;
};
