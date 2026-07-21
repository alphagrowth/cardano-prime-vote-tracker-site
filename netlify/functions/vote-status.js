const voteStatusHandler = require("../../api/vote-status");

exports.handler = async function handler(event) {
  const headers = {};
  let statusCode = 200;
  let body = "";

  const response = {
    setHeader(name, value) {
      headers[name] = value;
    },
    status(code) {
      statusCode = code;
      return this;
    },
    json(value) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(value);
      return this;
    },
  };

  await voteStatusHandler({ method: event.httpMethod }, response);

  return {
    statusCode,
    headers,
    body,
  };
};
