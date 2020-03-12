"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeRequest;

function normalizeRequest(req = {}) {
  return Object.freeze({
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
    body: req.body
  });
}
//# sourceMappingURL=normalize-request.js.map