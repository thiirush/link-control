const {getMessage} = require('./messages')

const getValidatorError = (error, messagePath) => {
  if (!error) return null;

  const errorMessages = {};

  error.details.map((detail, index) => {
    const message = detail.message;
    const key = detail.context.key;
    const type = detail.type;

    const path = `${messagePath}.${key}.${type}`;

    const customMessage = getMessage(path);

    if (!customMessage) {
      console.log('error message path', path);
    }
    errorMessages[key] = getMessage(path) || message;
  });
  return errorMessages;
};

module.exports = {
  getValidatorError,
  getMessage
};
