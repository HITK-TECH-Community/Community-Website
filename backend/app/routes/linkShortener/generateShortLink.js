const crypto = require('crypto');

function generateShortLink() {
  const randomBytes = crypto.randomBytes(12);
  const checksum = crypto
    .createHash('md5')
    .update(randomBytes)
    .digest('base64');
  const stripOffDisallowedChar = checksum.replace(/[^a-zA-Z0-9]/gi, '');
  return stripOffDisallowedChar.substring(0, 5);
}

module.exports = generateShortLink;
