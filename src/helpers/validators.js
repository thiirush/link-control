const { getMessage } = require('./messages');

const getValidatorError = (error, messagePath) => {
  if (!error) return null;

  const errorMessages = {};

  error.details.map((detail) => {
    const { message } = detail;
    const { key } = detail.context;
    const { type } = detail;

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
  getMessage,
};
