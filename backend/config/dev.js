module.exports = {
  "from" : "[FROM EMAIL ID HERE]",
  "smtpOptions" : {
  "service": "Gmail",
  "auth": {
    "user": '[EMAIL ID HERE]',
    "pass": '[PASSOWORD]'
  },
  "tls": {
    "rejectUnauthorized": false
}
}
  };