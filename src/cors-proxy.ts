const request = require('request');

const doRequest = (req) => {
  return new Promise((resolve, reject) => {
    const url = req.query.url;
    const data = req.body;
    const headers = req.headers;
    const method = req.method;
    const reqOptions = {
      body: data,
      method: method,
      url: url,
      json: true,
      // headers: headers, // TODO
      rejectUnauthorized: false
    };
    request(reqOptions, (err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};

const setHeaders = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Origin', req.get('origin') || req.get('Origin') || '*');
  res.set('Access-Control-Allow-Headers', "Accept-Encoding, Accept-Language, Cache-Control, Connection, Content-Length, Content-Type, Host, Origin, Pragma, Referer, User-Agent");
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
};

export const forwardRequest = async (req, res) => {

  setHeaders(req, res);

  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  } else {
    try {
      const resp: any = await doRequest(req);
      res.status(resp.statusCode).send({
        resp: resp
      });
    } catch (err) {
      res.status(500).send({
        err: err
      });
    }
  }

};

