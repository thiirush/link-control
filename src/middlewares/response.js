const TYPE_JSON = 'application/json';
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_BAD_UNAUTHORIZED = 401;
const STATUS_CODE_BAD_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonOK = function (data, message, metadata) {
  const status = STATUS_CODE_OK;
  message = message ? message : 'Sucesso!';
  metadata = metadata ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({ message, data, metadata, status });
};

const jsonBadRequest = function (data, message, metadata) {
  const status = STATUS_CODE_BAD_REQUEST;
  message = message ? message : 'a URL que você solicitou não existe';
  metadata = metadata ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status,
  });
};

const jsonUnauthorized = function (data, message, metadata) {
  const status = STATUS_CODE_BAD_UNAUTHORIZED;
  message = message ? message : 'Você não está autorizado a acessar este local';
  metadata = metadata ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status,
  });
};

const jsonNotFound = function (data, message, metadata) {
  const status = STATUS_CODE_BAD_NOT_FOUND;
  message = message ? message : 'URL não encontrada';
  metadata = metadata ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status,
  });
};

const jsonServerError = function (data, message, metadata) {
  const status = STATUS_CODE_SERVER_ERROR;
  message = message ? message : 'Problema no servidor';
  metadata = metadata ? metadata : {};

  this.status(status);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status,
  });
};
const response = (req, res, next) => {
  res.jsonOK = jsonOK;
  res.jsonBadRequest = jsonBadRequest;
  res.jsonServerError = jsonServerError;
  res.jsonNotFound = jsonNotFound;
  res.jsonUnauthorized = jsonUnauthorized;
  next();
};

module.exports = response;
