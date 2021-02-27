function sendTemplates(details){
  
  var templates = {
    "INVITE_ADMIN" : {
      "SUBJECT" : "Invitation for becoming an Admin",
      "BODY" : `Hey ${details.name}! \n You are invited to join HITK Tech Community as an admin.\n\nUse ${details.link} to sign up`
    }
}

return templates;
}

module.exports = sendTemplates;