const url = require('url');

function handleRequest(req, res) {
  const queryObject = url.parse(req.url, true).query;

  if (queryObject.codecanyon_app_template_purchase_code) {
    const purchaseCode = queryObject.codecanyon_app_template_purchase_code;
    res.write("Regular");
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
}

module.exports = {
  handleRequest,
};
