import {forwardRequest} from './cors-proxy';

// just to have a local debug server...

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  forwardRequest(req,res);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

