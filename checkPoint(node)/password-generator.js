const generatePassword = require("generate-password");


function generateRandomPassword() {
  return generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
}

const password = generateRandomPassword();
console.log("Random Password:", password);
