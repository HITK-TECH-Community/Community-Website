function sendTemplates(name, link){
  
  var templates = {
    "INVITE_ADMIN" : {
      "SUBJECT" : "Invitation for becoming an Admin",
      "BODY" : `Hey ${name}! \n You are invited to join HITK Tech Community as an admin.\n\nUse ${link} to sign up`
    }
}

return templates;
}

module.exports = sendTemplates;