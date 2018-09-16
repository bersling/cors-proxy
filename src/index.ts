import {forwardRequest} from './cors-proxy';

exports.corsProxy = (req, res) => {
  forwardRequest(req, res)
};
