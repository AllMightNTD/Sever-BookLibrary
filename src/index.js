const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const route = require('./routes/index')
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app)
app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
